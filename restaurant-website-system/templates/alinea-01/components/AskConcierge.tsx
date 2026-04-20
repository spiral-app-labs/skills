'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { content } from '../content.example';
import { computeOpenStatus } from '../lib/hours';
import {
  resolveTier,
  resolvePrivateSpace,
  type DiningTierCard,
  type PrivateSpaceCard,
} from '../lib/concierge-kb';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Block =
  | { type: 'text'; text: string }
  | { type: 'marker'; kind: string; id?: string; label?: string };

const SUGGESTED_CHIPS = [
  'What are the dining experiences?',
  'When are you open?',
  'Tell me about private events',
  'How do I book?',
];

// ---- Marker parser (same pattern as 1776) ----------------------------------

const MARKER_RE = /\{\{([a-z_]+)(?::([a-z0-9-]+))?(?:\|([^}]+))?\}\}/gi;

function parseResponse(raw: string): Block[] {
  let text = raw;
  const lastOpen = text.lastIndexOf('{{');
  const lastClose = text.lastIndexOf('}}');
  if (lastOpen > lastClose) text = text.slice(0, lastOpen);

  const out: Block[] = [];
  let lastEnd = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(MARKER_RE.source, 'gi');
  while ((m = re.exec(text)) !== null) {
    if (m.index > lastEnd) {
      const before = text.slice(lastEnd, m.index).replace(/\s+$/, ' ');
      if (before.trim()) out.push({ type: 'text', text: before });
    }
    out.push({
      type: 'marker',
      kind: m[1].toLowerCase(),
      id: m[2],
      label: m[3]?.trim(),
    });
    lastEnd = m.index + m[0].length;
  }
  if (lastEnd < text.length) {
    const tail = text.slice(lastEnd);
    if (tail.trim()) out.push({ type: 'text', text: tail });
  }
  return out;
}

// ---- Themed cards (editorial, hairline, no accent color) -------------------

function TierCard({ tier }: { tier: DiningTierCard }) {
  return (
    <a
      href="#reserve"
      className="group block overflow-hidden border border-divider bg-canvas"
    >
      <div
        className="relative aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${tier.image})` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-3">
          <div className="font-display text-card-label italic leading-tight text-text-strip">
            {tier.label}
          </div>
        </div>
      </div>
      <p className="px-4 py-3 text-body-sm font-body leading-relaxed text-text-muted">
        {tier.description}
      </p>
    </a>
  );
}

function PrivateSpaceCard({ space }: { space: PrivateSpaceCard }) {
  return (
    <div className="overflow-hidden border border-divider bg-canvas">
      <div
        className="aspect-[16/10] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${space.image})` }}
        aria-hidden
      />
      <div className="px-4 py-3">
        <div className="font-display text-[22px] leading-tight text-text">
          {space.label}
        </div>
        <p className="mt-1 text-body-sm font-body leading-relaxed text-text-muted">
          {space.description}
        </p>
      </div>
    </div>
  );
}

function HoursCard() {
  const [status, setStatus] = useState(() =>
    computeOpenStatus(content.brand.hoursConfig),
  );
  useEffect(() => {
    const t = setInterval(
      () => setStatus(computeOpenStatus(content.brand.hoursConfig)),
      60_000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="border border-divider bg-canvas px-4 py-4">
      <div className="font-display text-[22px] leading-tight text-text">
        {status.label}
      </div>
      <div className="mt-3 space-y-1 text-body-sm font-body text-text-muted">
        <div className="flex justify-between gap-4">
          <span>Sunday</span>
          <span className="text-text">5:00pm – 9:30pm</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Wednesday – Thursday</span>
          <span className="text-text">5:00pm – 9:30pm</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Friday – Saturday</span>
          <span className="text-text">5:00pm – 10:00pm</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Monday – Tuesday</span>
          <span className="text-text-muted/80">Closed</span>
        </div>
      </div>
    </div>
  );
}

function MapCard() {
  const { geo, address } = content.brand;
  const fullAddress = `${address.line1}, ${address.line2}`;
  const q = encodeURIComponent(fullAddress);
  const src = `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  return (
    <div className="overflow-hidden border border-divider bg-canvas">
      <iframe
        src={src}
        title="Alinea location"
        className="block h-44 w-full border-0"
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="text-body-sm font-body text-text-muted">
          {address.line1}
          <span className="text-text-muted/70"> · </span>
          {address.line2}
        </div>
        <a
          href={directions}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-eyebrow uppercase text-text underline underline-offset-4 hover:text-text-muted"
        >
          Directions →
        </a>
      </div>
    </div>
  );
}

function ReserveButton() {
  return (
    <a
      href="#reserve"
      className="inline-flex items-center gap-2 bg-tock-blue px-5 py-3 text-button font-body uppercase text-text-strip hover:bg-tock-blue/90"
    >
      Book Through Tock
      <span aria-hidden>→</span>
    </a>
  );
}

function PageLinkButton({ path, label }: { path: string; label: string }) {
  const validPaths: Record<string, string> = {
    gallery: '/gallery',
    'private-events': '/private-events',
    home: '/',
  };
  const href = validPaths[path] ?? null;
  if (!href) return null;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 border border-text px-5 py-3 text-button font-body uppercase text-text hover:bg-text hover:text-text-strip"
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function MarkerBlock({ kind, id, label }: { kind: string; id?: string; label?: string }) {
  if (kind === 'tier' && id) {
    const tier = resolveTier(id);
    if (!tier) return null;
    return <TierCard tier={tier} />;
  }
  if (kind === 'private_space' && id) {
    const space = resolvePrivateSpace(id);
    if (!space) return null;
    return <PrivateSpaceCard space={space} />;
  }
  if (kind === 'hours') return <HoursCard />;
  if (kind === 'map') return <MapCard />;
  if (kind === 'reserve') {
    return (
      <CtaRow>
        <ReserveButton />
      </CtaRow>
    );
  }
  if (kind === 'page' && id) {
    return (
      <CtaRow>
        <PageLinkButton path={id} label={label ?? id} />
      </CtaRow>
    );
  }
  return null;
}

function AssistantBubble({ text }: { text: string }) {
  const blocks = useMemo(() => parseResponse(text), [text]);
  if (blocks.length === 0) {
    return (
      <div className="inline-flex gap-1" aria-label="Thinking">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {blocks.map((b, i) =>
        b.type === 'text' ? (
          <p
            key={i}
            className="whitespace-pre-wrap font-body text-body-sm leading-relaxed text-text"
          >
            {b.text}
          </p>
        ) : (
          <MarkerBlock key={i} kind={b.kind} id={b.id} label={b.label} />
        ),
      )}
    </div>
  );
}

// ---- Main component --------------------------------------------------------

export function AskConcierge() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.35) setVisible(true);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, streaming]);

  async function send(userMessage: string) {
    if (!userMessage.trim() || streaming) return;
    setInput('');
    const next: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMessage.trim() },
    ];
    setMessages(next);
    setStreaming(true);
    setMessages([...next, { role: 'assistant', content: '' }]);

    let acc = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.body) throw new Error('No response body');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice(6).trim();
          if (!payload) continue;
          try {
            const parsed = JSON.parse(payload) as {
              text?: string;
              done?: boolean;
              error?: string;
            };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              acc += parsed.text;
              setMessages([...next, { role: 'assistant', content: acc }]);
            }
          } catch {
            /* ignore malformed frame */
          }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setMessages([
        ...next,
        {
          role: 'assistant',
          content: `Apologies — our system couldn't complete that (${msg}). Please reach our hospitality team at hospitality@example.com.`,
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Trigger — restrained, text-only, warm strip background, italic serif */}
      <button
        type="button"
        aria-label="Ask the maître d'"
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 border border-strip-warm bg-strip-warm px-4 py-2.5 text-text-strip shadow-md transition-all duration-500 hover:bg-strip-warm-dark ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span className="font-display text-[17px] italic leading-none">Ask</span>
        <span className="font-display text-[17px] leading-none">Alinea</span>
      </button>

      {/* Backdrop + panel */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-label="Alinea concierge"
          className={`absolute bottom-0 left-0 right-0 mx-auto flex h-[min(84vh,700px)] w-full max-w-xl flex-col border border-divider bg-canvas shadow-2xl transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          } md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[460px]`}
        >
          {/* Header — warm-gray strip */}
          <div className="flex items-center justify-between border-b border-strip-warm-dark bg-strip-warm px-5 py-4 text-text-strip">
            <div className="flex items-center gap-3">
              <div className="font-display text-[20px] leading-none">
                <span className="italic">Ask</span> Alinea
              </div>
              <div className="text-eyebrow uppercase opacity-70">Concierge</div>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="opacity-80 hover:opacity-100"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Transcript */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6">
            {messages.length === 0 && (
              <div className="space-y-3 text-text">
                <p className="font-display text-section-h3 leading-tight">
                  A tasting menu is a journey.
                </p>
                <p className="font-body text-body-sm leading-relaxed text-text-muted">
                  Ask about the three dining experiences, private events, hours,
                  or directions. Reservations are ticketed through Tock.
                </p>
              </div>
            )}
            <div className="mt-5 space-y-5">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] border border-divider bg-bg-muted px-4 py-2.5 font-body text-body-sm text-text">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="max-w-full">
                    <AssistantBubble text={m.content} />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Suggested chips */}
          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {SUGGESTED_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className="border border-divider bg-canvas px-3 py-1.5 font-body text-body-sm text-text-muted hover:border-text hover:text-text"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-divider bg-bg-muted px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the maître d'…"
                disabled={streaming}
                className="flex-1 border border-divider bg-canvas px-4 py-2.5 font-body text-body-sm text-text placeholder:text-text-muted focus:border-text focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="border border-text bg-text px-4 py-2.5 font-body text-button uppercase text-text-strip hover:bg-text-muted hover:border-text-muted disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-tight text-text-muted">
              AI concierge — for allergies or private-event inquiries, please
              reach hospitality@example.com or book through Tock.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
