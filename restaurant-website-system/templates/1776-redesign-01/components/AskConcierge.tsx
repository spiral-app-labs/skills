'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { content } from '../content.example';
import { computeOpenStatus } from '../lib/hours';
import { resolveMenuSlug, type MenuItemCard } from '../lib/concierge-kb';
import {
  buildReservationUrl,
  buildSpecialRequest,
  copyToClipboard,
  formatIntentPreview,
  mergeIntent,
  type ReservationConfig,
  type ReservationIntent,
} from '../lib/concierge-reserve';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Block =
  | { type: 'text'; text: string }
  | { type: 'marker'; kind: string; id?: string; label?: string };

const SUGGESTED_CHIPS = [
  'What should I order?',
  'Are you open tonight?',
  'Is it gluten-free?',
  'Book a table',
];

// ---- Marker parser ----------------------------------------------------------

const MARKER_RE = /\{\{([a-z_]+)(?::([a-z0-9-]+))?(?:\|([^}]+))?\}\}/gi;

function stripDashes(s: string): string {
  // Belt-and-suspenders: replace em/en dashes with commas even if the prompt
  // rule fails. Keeps output typographically clean.
  return s.replace(/\s*[—–]\s*/g, ', ');
}

function parseResponse(raw: string): Block[] {
  // Hide any trailing unclosed marker so it doesn't flash as raw text mid-stream.
  let text = stripDashes(raw);
  const lastOpen = text.lastIndexOf('{{');
  const lastClose = text.lastIndexOf('}}');
  if (lastOpen > lastClose) text = text.slice(0, lastOpen);

  // Strip surrounding quotes that Haiku sometimes wraps the whole response in.
  text = text.replace(/^\s*["']+/, '').replace(/["']+\s*$/, '');

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
    const tail = text.slice(lastEnd).replace(/["']+\s*$/, '');
    if (tail.trim()) out.push({ type: 'text', text: tail });
  }
  return out;
}

// ---- Themed cards -----------------------------------------------------------

function MenuCard({ item }: { item: MenuItemCard }) {
  return (
    <a
      href="/menu"
      className="group block overflow-hidden rounded-card border border-border/60 bg-surface transition-colors hover:border-accent/60"
    >
      {item.image && (
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden
        />
      )}
      <div className="p-4">
        <div className="mb-1 text-[10px] uppercase tracking-[3px] text-accent">
          {item.category}
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <div className="font-display text-card-title text-text">
            {item.name}
          </div>
          <div className="font-display text-card-title text-accent">
            {item.price}
          </div>
        </div>
        <p className="mt-2 text-body-sm text-text-muted">{item.description}</p>
      </div>
    </a>
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

  const stateColor =
    status.state === 'open'
      ? 'bg-emerald-500'
      : status.state === 'opening-soon'
      ? 'bg-accent'
      : 'bg-text-subtle';

  return (
    <div className="rounded-card border border-border/60 bg-surface p-4">
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2 w-2 rounded-full ${stateColor}`} aria-hidden />
        <span className="font-display text-card-title text-text">
          {status.label}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-body-sm text-text-muted">
        {content.brand.hours.map((h) => (
          <div key={h.days} className="flex justify-between gap-4">
            <span>{h.days}</span>
            <span className="text-text">{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapCard() {
  const { geo, addressFull } = content.brand;
  const q = encodeURIComponent(addressFull);
  const src = `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  return (
    <div className="overflow-hidden rounded-card border border-border/60 bg-surface">
      <iframe
        src={src}
        title="1776 location"
        className="block h-48 w-full border-0"
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="text-body-sm text-text-muted">{addressFull}</div>
        <a
          href={directions}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-pill border border-accent px-3 py-1.5 text-[11px] uppercase tracking-[2px] text-accent hover:bg-accent/10"
        >
          Directions →
        </a>
      </div>
    </div>
  );
}

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function ReserveButton({
  intent,
  config,
  onToast,
}: {
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (message: string) => void;
}) {
  const url = useMemo(() => buildReservationUrl(intent, config), [intent, config]);
  const preview = useMemo(() => formatIntentPreview(intent), [intent]);
  const special = useMemo(() => buildSpecialRequest(intent), [intent]);

  const handleClick = useCallback(async () => {
    if (!special) return;
    const ok = await copyToClipboard(special);
    onToast(
      ok
        ? 'Special request copied, paste it in the notes field on OpenTable.'
        : 'Mention your special request in the OpenTable notes field.',
    );
  }, [special, onToast]);

  return (
    <div className="flex flex-col gap-1">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="group inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-3 text-button font-semibold uppercase tracking-[2px] text-canvas shadow-[0_6px_20px_-6px_rgba(201,169,110,0.6)] transition-all hover:-translate-y-[1px] hover:bg-accent-hover hover:shadow-[0_10px_28px_-6px_rgba(201,169,110,0.8)]"
      >
        Reserve on OpenTable
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
      {preview && (
        <p className="text-[11px] leading-tight tracking-[1px] text-text-muted">
          {preview}
        </p>
      )}
    </div>
  );
}

function CallButton() {
  return (
    <a
      href={`tel:+${content.brand.phone.replace(/[^0-9]/g, '')}`}
      className="inline-flex items-center gap-2 rounded-pill border border-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-accent hover:bg-accent/10"
    >
      Call {content.brand.phone}
    </a>
  );
}

function PageLinkButton({ path, label }: { path: string; label: string }) {
  const validPaths: Record<string, string> = {
    menu: '/menu',
    about: '/about',
    contact: '/contact',
    home: '/',
  };
  const href = validPaths[path] ?? null;
  if (!href) return null;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-pill border border-border/80 bg-surface px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-text hover:border-accent hover:text-accent"
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}

const CTA_KINDS = new Set(['reserve', 'call', 'page']);

function renderCtaButton(
  block: Block & { type: 'marker' },
  i: number,
  ctx: { intent: ReservationIntent; config: ReservationConfig; onToast: (m: string) => void },
) {
  if (block.kind === 'reserve')
    return (
      <ReserveButton
        key={i}
        intent={ctx.intent}
        config={ctx.config}
        onToast={ctx.onToast}
      />
    );
  if (block.kind === 'call') return <CallButton key={i} />;
  if (block.kind === 'page' && block.id) {
    return <PageLinkButton key={i} path={block.id} label={block.label ?? block.id} />;
  }
  return null;
}

function renderRichBlock(block: Block & { type: 'marker' }, i: number) {
  if (block.kind === 'menu' && block.id) {
    const item = resolveMenuSlug(block.id);
    if (!item) return null;
    return <MenuCard key={i} item={item} />;
  }
  if (block.kind === 'hours') return <HoursCard key={i} />;
  if (block.kind === 'map') return <MapCard key={i} />;
  return null;
}

/** Group consecutive CTA markers into a single CtaRow. Menu/hours/map render individually. */
function renderBlocks(
  blocks: Block[],
  ctx: { intent: ReservationIntent; config: ReservationConfig; onToast: (m: string) => void },
) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === 'text') {
      out.push(
        <p key={`t-${i}`} className="whitespace-pre-wrap text-body-sm leading-relaxed text-text">
          {b.text}
        </p>,
      );
      i++;
      continue;
    }
    // Marker. If it's a CTA, accumulate consecutive CTAs into one row.
    if (CTA_KINDS.has(b.kind)) {
      const ctaButtons: React.ReactNode[] = [];
      while (i < blocks.length && blocks[i].type === 'marker' && CTA_KINDS.has((blocks[i] as Extract<Block, { type: 'marker' }>).kind)) {
        const btn = renderCtaButton(
          blocks[i] as Extract<Block, { type: 'marker' }>,
          i,
          ctx,
        );
        if (btn) ctaButtons.push(btn);
        i++;
      }
      if (ctaButtons.length > 0) {
        out.push(<CtaRow key={`cta-${i}`}>{ctaButtons}</CtaRow>);
      }
      continue;
    }
    // Otherwise: rich block (menu/hours/map).
    const rich = renderRichBlock(b as Extract<Block, { type: 'marker' }>, i);
    if (rich) out.push(rich);
    i++;
  }
  return out;
}

function AssistantBubble({
  text,
  intent,
  config,
  onToast,
}: {
  text: string;
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (m: string) => void;
}) {
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
  return <div className="space-y-3">{renderBlocks(blocks, { intent, config, onToast })}</div>;
}

// ---- Main component ---------------------------------------------------------

export function AskConcierge() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [intent, setIntent] = useState<ReservationIntent>({});
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const reservationConfig: ReservationConfig = useMemo(
    () => ({
      platform: content.brand.reservationPlatform,
      fallbackUrl: content.brand.reservationUrl,
      restref: content.brand.reservationRestref,
    }),
    [],
  );

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
              tool_use?: { name: string; input: unknown };
            };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              acc += parsed.text;
              setMessages([...next, { role: 'assistant', content: acc }]);
            }
            if (
              parsed.tool_use &&
              parsed.tool_use.name === 'update_reservation_intent' &&
              parsed.tool_use.input &&
              typeof parsed.tool_use.input === 'object'
            ) {
              const patch = parsed.tool_use.input as Partial<ReservationIntent>;
              setIntent((prev) => mergeIntent(prev, patch));
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
          content: `Sorry, I hit a snag (${msg}). Please call us directly. {{call}}`,
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Trigger — amber-accented pill, reveals after scroll */}
      <button
        type="button"
        aria-label="Ask 1776"
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-pill border border-accent bg-surface/95 px-5 py-3 font-display text-[16px] tracking-wide text-accent shadow-xl backdrop-blur transition-all duration-500 hover:bg-accent hover:text-canvas ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        <em className="not-italic">Ask</em>
        <span className="italic">1776</span>
      </button>

      {/* Backdrop + panel */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-canvas/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-label="1776 concierge"
          className={`absolute bottom-0 left-0 right-0 mx-auto flex h-[min(82vh,680px)] w-full max-w-xl flex-col rounded-t-[24px] border border-border/60 bg-canvas shadow-2xl transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          } md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[440px] md:rounded-card`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <div className="font-display text-[22px] tracking-wide text-text">
                <em className="not-italic">Ask</em>{' '}
                <span className="italic">1776</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Transcript */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="font-display text-section-h2 leading-[1.1] text-text">
                  <em className="not-italic">Welcome to</em>{' '}
                  <span className="italic">1776.</span>
                </p>
                <p className="text-body-sm text-text-muted">
                  Ask about the menu, the kitchen, the wine list, or a table for
                  tonight. Our kitchen is 100% gluten-free.
                </p>
              </div>
            )}
            <div className="mt-4 space-y-5">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-card border border-border/60 bg-surface px-4 py-2.5 text-body-sm text-text">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="max-w-full">
                    <AssistantBubble
                      text={m.content}
                      intent={intent}
                      config={reservationConfig}
                      onToast={showToast}
                    />
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
                  className="rounded-pill border border-border/60 bg-surface px-3 py-1.5 text-body-sm text-text-muted hover:border-accent hover:text-accent"
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
            className="border-t border-border/60 bg-surface px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask 1776…"
                disabled={streaming}
                className="flex-1 rounded-field bg-canvas px-4 py-2.5 text-body-sm text-text placeholder:text-text-subtle focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="rounded-pill bg-accent px-4 py-2.5 text-button font-medium uppercase tracking-[2px] text-canvas disabled:opacity-40 hover:bg-accent-hover"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-tight text-text-subtle">
              AI concierge, for allergy or large-party questions, please call{' '}
              {content.brand.phone}.
            </p>
          </form>

          {toast && (
            <div
              role="status"
              aria-live="polite"
              className="pointer-events-none absolute inset-x-4 bottom-[84px] mx-auto max-w-sm rounded-card border border-accent/60 bg-surface px-4 py-2.5 text-body-sm text-text shadow-lg"
            >
              {toast}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
