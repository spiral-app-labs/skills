'use client';

// AskConcierge.tsx — reference implementation. Copy verbatim into the new
// template. All visual tokens come from ./concierge-theme.ts; all prose
// tokens come from ../lib/concierge-voice.ts. This file should never need
// hand-edits per fork.

import { useEffect, useMemo, useRef, useState } from 'react';
// @ts-expect-error — each template supplies its own content shape.
import { content } from '../content';
import { computeOpenStatus } from '../lib/hours';
import {
  resolveMenuSlug,
  resolveTier,
  resolvePrivateSpace,
  type MenuItemCard,
  type DiningTierCard,
  type PrivateSpaceCard,
} from '../lib/concierge-kb';
import { VOICE } from '../lib/concierge-voice';
import { THEME } from './concierge-theme';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Block =
  | { type: 'text'; text: string }
  | { type: 'marker'; kind: string; id?: string; label?: string };

// ---- Marker parser ----------------------------------------------------------

const MARKER_RE = /\{\{([a-z_]+)(?::([a-z0-9-]+))?(?:\|([^}]+))?\}\}/gi;

function stripDashes(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ', ');
}

function parseResponse(raw: string): Block[] {
  let text = stripDashes(raw);
  const lastOpen = text.lastIndexOf('{{');
  const lastClose = text.lastIndexOf('}}');
  if (lastOpen > lastClose) text = text.slice(0, lastOpen);
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
    out.push({ type: 'marker', kind: m[1].toLowerCase(), id: m[2], label: m[3]?.trim() });
    lastEnd = m.index + m[0].length;
  }
  if (lastEnd < text.length) {
    const tail = text.slice(lastEnd).replace(/["']+\s*$/, '');
    if (tail.trim()) out.push({ type: 'text', text: tail });
  }
  return out;
}

// ---- Cards (every className reads from THEME) -------------------------------

function MenuCard({ item }: { item: MenuItemCard }) {
  return (
    <a href="/menu" className={THEME.cards.mediaCardFrameClasses}>
      {item.image && (
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden
        />
      )}
      <div className="p-4">
        <div className={THEME.cards.categoryEyebrowClasses}>{item.category}</div>
        <div className="flex items-baseline justify-between gap-3">
          <div className={THEME.cards.itemTitleClasses}>{item.name}</div>
          <div className={THEME.cards.itemPriceClasses}>{item.price}</div>
        </div>
        <p className={THEME.cards.itemDescClasses}>{item.description}</p>
      </div>
    </a>
  );
}

function TierCard({ tier }: { tier: DiningTierCard }) {
  return (
    <a href="#reserve" className={THEME.cards.mediaCardFrameClasses}>
      <div
        className="relative aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${tier.image})` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-3">
          <div className={THEME.cards.itemTitleClasses}>{tier.label}</div>
        </div>
      </div>
      <p className={THEME.cards.itemDescClasses}>{tier.description}</p>
    </a>
  );
}

function PrivateSpaceCard({ space }: { space: PrivateSpaceCard }) {
  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <div
        className="aspect-[16/10] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${space.image})` }}
        aria-hidden
      />
      <div className="px-4 py-3">
        <div className={THEME.cards.itemTitleClasses}>{space.label}</div>
        <p className={THEME.cards.itemDescClasses}>{space.description}</p>
      </div>
    </div>
  );
}

function HoursCard() {
  const hoursConfig = (content as any).brand?.hoursConfig;
  const hours = (content as any).brand?.hours ?? [];
  const [status, setStatus] = useState(() =>
    hoursConfig ? computeOpenStatus(hoursConfig) : { state: 'open', label: 'Open' },
  );
  useEffect(() => {
    if (!hoursConfig) return;
    const t = setInterval(() => setStatus(computeOpenStatus(hoursConfig)), 60_000);
    return () => clearInterval(t);
  }, [hoursConfig]);

  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <div className={THEME.cards.itemTitleClasses}>{status.label}</div>
      <div className={`mt-3 space-y-1 ${THEME.cards.itemDescClasses}`}>
        {hours.map((h: { days: string; time: string }) => (
          <div key={h.days} className="flex justify-between gap-4">
            <span>{h.days}</span>
            <span>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapCard() {
  const brand = (content as any).brand ?? {};
  const addressFull =
    brand.addressFull ?? (brand.address ? `${brand.address.line1}, ${brand.address.line2}` : '');
  const geo = brand.geo ?? { lat: 0, lng: 0 };
  const q = encodeURIComponent(addressFull);
  const src = `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
  return (
    <div className={THEME.cards.infoCardFrameClasses}>
      <iframe src={src} title="Location" className="block h-48 w-full border-0" loading="lazy" />
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className={THEME.cards.itemDescClasses}>{addressFull}</div>
        <a href={directions} target="_blank" rel="noreferrer" className={THEME.cta.outlineClasses}>
          Directions →
        </a>
      </div>
    </div>
  );
}

function ReserveButton() {
  const url = (content as any).brand?.reservationUrl ?? '#reserve';
  return (
    <a href={url} target="_blank" rel="noreferrer" className={THEME.cta.primaryClasses}>
      Reserve <span aria-hidden>→</span>
    </a>
  );
}

function CallButton() {
  const phone = (content as any).brand?.phone ?? '';
  return (
    <a href={`tel:+${phone.replace(/[^0-9]/g, '')}`} className={THEME.cta.outlineClasses}>
      Call {phone}
    </a>
  );
}

function PageLinkButton({ path, label }: { path: string; label: string }) {
  const validPaths: Record<string, string> = {
    menu: '/menu',
    about: '/about',
    contact: '/contact',
    gallery: '/gallery',
    'private-events': '/private-events',
    home: '/',
  };
  const href = validPaths[path] ?? null;
  if (!href) return null;
  return (
    <a href={href} className={THEME.cta.pageClasses}>
      {label} <span aria-hidden>→</span>
    </a>
  );
}

const CTA_KINDS = new Set(['reserve', 'call', 'page']);

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function renderCtaButton(block: Extract<Block, { type: 'marker' }>, i: number) {
  if (block.kind === 'reserve') return <ReserveButton key={i} />;
  if (block.kind === 'call') return <CallButton key={i} />;
  if (block.kind === 'page' && block.id)
    return <PageLinkButton key={i} path={block.id} label={block.label ?? block.id} />;
  return null;
}

function renderRichBlock(block: Extract<Block, { type: 'marker' }>, i: number) {
  if (block.kind === 'menu' && block.id) {
    const item = resolveMenuSlug(block.id);
    return item ? <MenuCard key={i} item={item} /> : null;
  }
  if (block.kind === 'tier' && block.id) {
    const tier = resolveTier(block.id);
    return tier ? <TierCard key={i} tier={tier} /> : null;
  }
  if (block.kind === 'private_space' && block.id) {
    const space = resolvePrivateSpace(block.id);
    return space ? <PrivateSpaceCard key={i} space={space} /> : null;
  }
  if (block.kind === 'hours') return <HoursCard key={i} />;
  if (block.kind === 'map') return <MapCard key={i} />;
  return null;
}

function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === 'text') {
      out.push(
        <p key={`t-${i}`} className={THEME.transcript.assistantProseClasses}>
          {b.text}
        </p>,
      );
      i++;
      continue;
    }
    if (CTA_KINDS.has(b.kind)) {
      const ctaButtons: React.ReactNode[] = [];
      while (
        i < blocks.length &&
        blocks[i].type === 'marker' &&
        CTA_KINDS.has((blocks[i] as Extract<Block, { type: 'marker' }>).kind)
      ) {
        const btn = renderCtaButton(blocks[i] as Extract<Block, { type: 'marker' }>, i);
        if (btn) ctaButtons.push(btn);
        i++;
      }
      if (ctaButtons.length > 0) out.push(<CtaRow key={`cta-${i}`}>{ctaButtons}</CtaRow>);
      continue;
    }
    const rich = renderRichBlock(b as Extract<Block, { type: 'marker' }>, i);
    if (rich) out.push(rich);
    i++;
  }
  return out;
}

function AssistantBubble({ text }: { text: string }) {
  const blocks = useMemo(() => parseResponse(text), [text]);
  if (blocks.length === 0) {
    return (
      <div className="inline-flex gap-1" aria-label="Thinking">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" style={{ animationDelay: '150ms' }} />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" style={{ animationDelay: '300ms' }} />
      </div>
    );
  }
  return <div className="space-y-3">{renderBlocks(blocks)}</div>;
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
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  async function send(userMessage: string) {
    if (!userMessage.trim() || streaming) return;
    setInput('');
    const next: ChatMessage[] = [...messages, { role: 'user', content: userMessage.trim() }];
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
            const parsed = JSON.parse(payload) as { text?: string; done?: boolean; error?: string };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              acc += parsed.text;
              setMessages([...next, { role: 'assistant', content: acc }]);
            }
          } catch { /* ignore malformed frame */ }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setMessages([
        ...next,
        { role: 'assistant', content: `Sorry, I hit a snag (${msg}). Please call us directly. {{call}}` },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  const emptyHeading = (content as any).brand?.tagline ?? 'How can we help?';
  const emptySub = 'Ask about the menu, hours, directions, or a table tonight.';

  return (
    <>
      <button
        type="button"
        aria-label="Ask the concierge"
        onClick={() => setOpen(true)}
        className={`${THEME.trigger.pillClasses} ${
          visible && !open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {THEME.trigger.dotClasses && <span className={THEME.trigger.dotClasses} aria-hidden />}
        <span dangerouslySetInnerHTML={{ __html: THEME.trigger.labelHtml }} />
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className={THEME.panel.backdropClasses} onClick={() => setOpen(false)} />
        <div
          role="dialog"
          aria-label="Concierge"
          className={`${THEME.panel.shellClasses} transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className={THEME.panel.headerClasses}>
            <div className={THEME.panel.titleClasses} dangerouslySetInnerHTML={{ __html: THEME.trigger.labelHtml }} />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className={THEME.transcript.containerClasses}>
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className={THEME.transcript.emptyHeadingClasses}>{emptyHeading}</p>
                <p className={THEME.transcript.emptySubClasses}>{emptySub}</p>
              </div>
            )}
            <div className="mt-4 space-y-5">
              {messages.map((m, i) =>
                m.role === 'user' ? (
                  <div key={i} className="flex justify-end">
                    <div className={THEME.transcript.userBubbleClasses}>{m.content}</div>
                  </div>
                ) : (
                  <div key={i} className="max-w-full">
                    <AssistantBubble text={m.content} />
                  </div>
                ),
              )}
            </div>
          </div>

          {messages.length === 0 && (
            <div className={THEME.chips.wrapperClasses}>
              {VOICE.suggestedChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className={THEME.chips.chipClasses}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className={THEME.composer.wrapperClasses}
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask…"
                disabled={streaming}
                className={THEME.composer.inputClasses}
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className={THEME.composer.sendClasses}
              >
                Send
              </button>
            </div>
            <p className={THEME.composer.footnoteClasses}>
              AI concierge, confirm with the restaurant for allergy or time-sensitive questions.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
