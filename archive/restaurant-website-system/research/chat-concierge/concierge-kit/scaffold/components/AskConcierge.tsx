'use client';

// AskConcierge.tsx — reference implementation. Copy verbatim into the new
// template. All visual tokens come from ./concierge-theme.ts; all prose
// tokens come from ../lib/concierge-voice.ts. This file should never need
// hand-edits per fork.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
import {
  buildReservationUrl,
  buildSpecialRequest,
  copyToClipboard,
  formatIntentPreview,
  mergeIntent,
  type ReservationConfig,
  type ReservationIntent,
} from '../lib/concierge-reserve';
import { CONCIERGE_CONFIG, getSurface, type ConciergeSurface } from '../lib/concierge-config';
import {
  buildClientContext,
  trackConciergeEvent,
  type ConciergeTrackingContext,
} from '../lib/concierge-analytics';
import { CONCIERGE_OPEN_EVENT, type ConciergeOpenDetail } from './ConciergeEntrance';
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

const DIETARY_LABELS: Record<string, string> = {
  vegetarian: 'Veg',
  vegan: 'Vegan',
  'gluten-free': 'GF',
  'dairy-free': 'DF',
  pescatarian: 'Pesc',
};

function MenuCard({ item }: { item: MenuItemCard }) {
  const hasBadges =
    item.dietary.length > 0 || typeof item.calories === 'number' || (item.spiceLevel ?? 0) > 0;
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
        {hasBadges && (
          <div className={THEME.cards.badgeRowClasses}>
            {item.dietary.map((d) => (
              <span key={d} className={THEME.cards.dietaryBadgeClasses}>
                {DIETARY_LABELS[d] ?? d}
              </span>
            ))}
            {typeof item.calories === 'number' && (
              <span className={THEME.cards.metaBadgeClasses}>{item.calories} cal</span>
            )}
            {item.spiceLevel !== null && item.spiceLevel > 0 && (
              <span className={THEME.cards.metaBadgeClasses}>
                {'•'.repeat(item.spiceLevel)} spice
              </span>
            )}
          </div>
        )}
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

function ReserveButton({
  intent,
  config,
  onToast,
  onCtaClick,
}: {
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (message: string) => void;
  onCtaClick: (ctaType: string, destination: string) => void;
}) {
  const url = useMemo(() => buildReservationUrl(intent, config), [intent, config]);
  const preview = useMemo(() => formatIntentPreview(intent), [intent]);
  const special = useMemo(() => buildSpecialRequest(intent), [intent]);

  const handleClick = useCallback(async () => {
    onCtaClick('reserve', url);
    if (!special) return;
    const ok = await copyToClipboard(special);
    onToast(
      ok
        ? 'Special request copied, paste it in the notes field on OpenTable.'
        : 'Mention your special request in the notes field of the reservation platform.',
    );
  }, [onCtaClick, onToast, special, url]);

  return (
    <div className="flex flex-col gap-1">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className={THEME.cta.primaryClasses}
      >
        Reserve <span aria-hidden>→</span>
      </a>
      {preview && (
        <p className="text-[11px] leading-tight tracking-[1px] text-text-muted">
          {preview}
        </p>
      )}
    </div>
  );
}

function CallButton({ onCtaClick }: { onCtaClick: (ctaType: string, destination: string) => void }) {
  const phone = (content as any).brand?.phone ?? '';
  const href = `tel:+${phone.replace(/[^0-9]/g, '')}`;
  return (
    <a href={href} onClick={() => onCtaClick('call', href)} className={THEME.cta.outlineClasses}>
      Call {phone}
    </a>
  );
}

function PageLinkButton({
  path,
  label,
  onCtaClick,
}: {
  path: string;
  label: string;
  onCtaClick: (ctaType: string, destination: string) => void;
}) {
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
    <a href={href} onClick={() => onCtaClick('page', href)} className={THEME.cta.pageClasses}>
      {label} <span aria-hidden>→</span>
    </a>
  );
}

const CTA_KINDS = new Set(['reserve', 'call', 'page']);

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function renderCtaButton(
  block: Extract<Block, { type: 'marker' }>,
  i: number,
  ctx: {
    intent: ReservationIntent;
    config: ReservationConfig;
    onToast: (m: string) => void;
    onCtaClick: (ctaType: string, destination: string) => void;
  },
) {
  if (block.kind === 'reserve')
    return (
      <ReserveButton
        key={i}
        intent={ctx.intent}
        config={ctx.config}
        onToast={ctx.onToast}
        onCtaClick={ctx.onCtaClick}
      />
    );
  if (block.kind === 'call') return <CallButton key={i} onCtaClick={ctx.onCtaClick} />;
  if (block.kind === 'page' && block.id)
    return (
      <PageLinkButton
        key={i}
        path={block.id}
        label={block.label ?? block.id}
        onCtaClick={ctx.onCtaClick}
      />
    );
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

function renderBlocks(
  blocks: Block[],
  ctx: {
    intent: ReservationIntent;
    config: ReservationConfig;
    onToast: (m: string) => void;
    onCtaClick: (ctaType: string, destination: string) => void;
  },
) {
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
        const btn = renderCtaButton(
          blocks[i] as Extract<Block, { type: 'marker' }>,
          i,
          ctx,
        );
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

function AssistantBubble({
  text,
  intent,
  config,
  onToast,
  onCtaClick,
}: {
  text: string;
  intent: ReservationIntent;
  config: ReservationConfig;
  onToast: (m: string) => void;
  onCtaClick: (ctaType: string, destination: string) => void;
}) {
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
  return <div className="space-y-3">{renderBlocks(blocks, { intent, config, onToast, onCtaClick })}</div>;
}

// ---- Main component --------------------------------------------------------

export function AskConcierge() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSurface, setActiveSurface] = useState<ConciergeSurface>(() =>
    getSurface('floating_pill'),
  );
  const [activeContext, setActiveContext] = useState<ConciergeTrackingContext>(() =>
    buildClientContext({
      surfaceId: 'floating_pill',
      pageType: 'sitewide',
    }),
  );
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [intent, setIntent] = useState<ReservationIntent>({});
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      platform: ((content as any).brand?.reservationPlatform ?? 'opentable') as ReservationConfig['platform'],
      fallbackUrl: (content as any).brand?.reservationUrl ?? '#reserve',
      restref: (content as any).brand?.reservationRestref,
    }),
    [],
  );

  const openFromContext = useCallback((context: ConciergeTrackingContext) => {
    const surface = getSurface(context.surfaceId);
    setActiveSurface(surface);
    setActiveContext(context);
    setOpen(true);
  }, []);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<ConciergeOpenDetail>).detail;
      if (!detail) return;
      openFromContext(detail);
      if (detail.promptText) {
        setTimeout(() => {
          void send(detail.promptText!, detail);
        }, 0);
      }
    };
    window.addEventListener(CONCIERGE_OPEN_EVENT, handler);
    return () => window.removeEventListener(CONCIERGE_OPEN_EVENT, handler);
  });

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

  const trackCtaClick = useCallback(
    (ctaType: string, destination: string) => {
      trackConciergeEvent({
        eventName: 'cta_click',
        context: activeContext,
        properties: { cta_type: ctaType, destination },
      });
    },
    [activeContext],
  );

  async function send(userMessage: string, contextOverride?: ConciergeTrackingContext) {
    if (!userMessage.trim() || streaming) return;
    setInput('');
    const requestContext = contextOverride ?? activeContext;
    const next: ChatMessage[] = [...messages, { role: 'user', content: userMessage.trim() }];
    setMessages(next);
    setStreaming(true);
    setMessages([...next, { role: 'assistant', content: '' }]);

    let acc = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next, context: requestContext }),
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
  const emptySub = activeSurface.body ?? 'Ask about the menu, hours, directions, or a table tonight.';
  const starterPrompts =
    activeSurface.prompts.length > 0
      ? activeSurface.prompts
      : VOICE.suggestedChips.map((text, i) => ({ id: `suggested_${i + 1}`, text }));

  return (
    <>
      <button
        type="button"
        aria-label="Ask the concierge"
        onClick={() => {
          const context = buildClientContext({
            surfaceId: 'floating_pill',
            pageType: 'sitewide',
          });
          trackConciergeEvent({
            eventName: 'entry_click',
            context,
            properties: { label: CONCIERGE_CONFIG.surfaces.floating_pill.label },
          });
          openFromContext(context);
        }}
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
        <div
          className={THEME.panel.backdropClasses}
          onClick={() => {
            trackConciergeEvent({
              eventName: 'conversation_closed',
              context: activeContext,
              properties: { close_reason: 'backdrop' },
            });
            setOpen(false);
          }}
        />
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
              onClick={() => {
                trackConciergeEvent({
                  eventName: 'conversation_closed',
                  context: activeContext,
                  properties: { close_reason: 'button' },
                });
                setOpen(false);
              }}
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
                    <AssistantBubble
                      text={m.content}
                      intent={intent}
                      config={reservationConfig}
                      onToast={showToast}
                      onCtaClick={trackCtaClick}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {messages.length === 0 && (
            <div className={THEME.chips.wrapperClasses}>
              {starterPrompts.map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => {
                    const context = {
                      ...activeContext,
                      promptId: chip.id,
                      promptText: chip.text,
                    };
                    trackConciergeEvent({
                      eventName: 'starter_prompt_click',
                      context,
                    });
                    send(chip.text, context);
                  }}
                  className={THEME.chips.chipClasses}
                >
                  {chip.text}
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
              {CONCIERGE_CONFIG.privacyNotice}
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
