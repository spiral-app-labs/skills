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
import { CONCIERGE_CONFIG, getSurface, type ConciergeSurface } from '../lib/concierge-config';
import {
  buildClientContext,
  trackConciergeEvent,
  type ConciergeTrackingContext,
} from '../lib/concierge-analytics';
import { CONCIERGE_OPEN_EVENT, type ConciergeOpenDetail } from './ConciergeEntrance';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

type Block =
  | { type: 'text'; text: string }
  | { type: 'marker'; kind: string; id?: string; label?: string };

const SUGGESTED_CHIPS = [
  'What should I order?',
  'Are you open tonight?',
  'How do I reserve?',
  'Where are you located?',
];

const MARKER_RE = /\{\{([a-z_]+)(?::([a-z0-9-]+))?(?:\|([^}]+))?\}\}/gi;
const CTA_KINDS = new Set(['reserve', 'call', 'page']);

function stripDashes(value: string): string {
  return value.replace(/\s*[\u2014\u2013]\s*/g, ', ');
}

function parseResponse(raw: string): Block[] {
  let text = stripDashes(raw);
  const lastOpen = text.lastIndexOf('{{');
  const lastClose = text.lastIndexOf('}}');
  if (lastOpen > lastClose) text = text.slice(0, lastOpen);
  text = text.replace(/^\s*["']+/, '').replace(/["']+\s*$/, '');

  const blocks: Block[] = [];
  let lastEnd = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(MARKER_RE.source, 'gi');
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastEnd) {
      const before = text.slice(lastEnd, match.index).replace(/\s+$/, ' ');
      if (before.trim()) blocks.push({ type: 'text', text: before });
    }
    blocks.push({
      type: 'marker',
      kind: match[1].toLowerCase(),
      id: match[2],
      label: match[3]?.trim(),
    });
    lastEnd = match.index + match[0].length;
  }

  if (lastEnd < text.length) {
    const tail = text.slice(lastEnd).replace(/["']+\s*$/, '');
    if (tail.trim()) blocks.push({ type: 'text', text: tail });
  }

  return blocks;
}

function MenuCard({ item }: { item: MenuItemCard }) {
  return (
    <a
      href="/menu"
      className="group block overflow-hidden rounded-card border border-divider bg-surface transition-colors hover:border-accent-warm/70"
    >
      {item.image && (
        <div
          className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden
        />
      )}
      <div className="p-4">
        <div className="mb-1 font-body text-[10px] uppercase tracking-[0.18em] text-accent-warm">
          {item.category}
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <div className="font-display text-[24px] leading-none text-ink">
            {item.name}
          </div>
          {item.price ? (
            <div className="font-body text-body-sm text-ink">{item.price}</div>
          ) : null}
        </div>
        <p className="mt-2 font-body text-body-sm text-ink-muted">
          {item.description}
        </p>
      </div>
    </a>
  );
}

function HoursCard() {
  const [status, setStatus] = useState(() =>
    computeOpenStatus(content.brand.hoursConfig),
  );

  useEffect(() => {
    const timer = setInterval(
      () => setStatus(computeOpenStatus(content.brand.hoursConfig)),
      60_000,
    );
    return () => clearInterval(timer);
  }, []);

  const stateColor =
    status.state === 'open'
      ? 'bg-emerald-500'
      : status.state === 'opening-soon'
      ? 'bg-accent-warm'
      : 'bg-ink-quiet';

  return (
    <div className="rounded-card border border-divider bg-surface p-4">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${stateColor}`} aria-hidden />
        <span className="font-display text-[24px] leading-none text-ink">
          {status.label}
        </span>
      </div>
      <div className="mt-3 space-y-1 font-body text-body-sm text-ink-muted">
        {content.home.hero.sidebar.hours.map((row) => (
          <div key={row.day} className="flex justify-between gap-4">
            <span>{row.day}</span>
            <span className="text-ink">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapCard() {
  return (
    <div className="overflow-hidden rounded-card border border-divider bg-surface">
      <iframe
        src={content.brand.mapEmbed}
        title="Da Baffone location"
        className="block h-44 w-full border-0"
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="font-body text-body-sm text-ink-muted">
          {content.brand.address.line1}, {content.brand.address.line2}
        </div>
        <a
          href={content.brand.mapLink}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-pill border border-accent-warm px-3 py-1.5 font-body text-[11px] uppercase tracking-[0.16em] text-accent-warm hover:bg-accent-warm/10"
        >
          Directions
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
    const copied = await copyToClipboard(special);
    onToast(
      copied
        ? 'Details copied, mention them when you call.'
        : 'Mention those details when you call.',
    );
  }, [onCtaClick, onToast, special, url]);

  return (
    <div className="flex flex-col gap-1">
      <a
        href={url}
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-pill bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
      >
        Call to Reserve
      </a>
      {preview ? (
        <p className="font-body text-[11px] leading-tight text-ink-quiet">
          {preview}
        </p>
      ) : null}
    </div>
  );
}

function CallButton({ onCtaClick }: { onCtaClick: (ctaType: string, destination: string) => void }) {
  return (
    <a
      href={content.brand.reservationUrl}
      onClick={() => onCtaClick('call', content.brand.reservationUrl)}
      className="inline-flex items-center justify-center rounded-pill border border-accent-warm px-4 py-2.5 font-body text-button font-medium text-accent-warm hover:bg-accent-warm/10"
    >
      Call {content.brand.phoneDisplay}
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
    home: '/',
  };
  const href = validPaths[path] ?? null;
  if (!href) return null;

  return (
    <a
      href={href}
      onClick={() => onCtaClick('page', href)}
      className="inline-flex items-center justify-center rounded-pill border border-divider bg-surface px-4 py-2.5 font-body text-button font-medium text-ink hover:border-accent-warm hover:text-accent-warm"
    >
      {label}
    </a>
  );
}

function CtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function renderCtaButton(
  block: Extract<Block, { type: 'marker' }>,
  index: number,
  context: {
    intent: ReservationIntent;
    config: ReservationConfig;
    onToast: (message: string) => void;
    onCtaClick: (ctaType: string, destination: string) => void;
  },
) {
  if (block.kind === 'reserve') {
    return (
      <ReserveButton
        key={index}
        intent={context.intent}
        config={context.config}
        onToast={context.onToast}
        onCtaClick={context.onCtaClick}
      />
    );
  }
  if (block.kind === 'call') return <CallButton key={index} onCtaClick={context.onCtaClick} />;
  if (block.kind === 'page' && block.id) {
    return (
      <PageLinkButton
        key={index}
        path={block.id}
        label={block.label ?? block.id}
        onCtaClick={context.onCtaClick}
      />
    );
  }
  return null;
}

function renderRichBlock(block: Extract<Block, { type: 'marker' }>, index: number) {
  if (block.kind === 'menu' && block.id) {
    const item = resolveMenuSlug(block.id);
    if (!item) return null;
    return <MenuCard key={index} item={item} />;
  }
  if (block.kind === 'hours') return <HoursCard key={index} />;
  if (block.kind === 'map') return <MapCard key={index} />;
  return null;
}

function renderBlocks(
  blocks: Block[],
  context: {
    intent: ReservationIntent;
    config: ReservationConfig;
    onToast: (message: string) => void;
    onCtaClick: (ctaType: string, destination: string) => void;
  },
) {
  const output: React.ReactNode[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    if (block.type === 'text') {
      output.push(
        <p
          key={`text-${index}`}
          className="whitespace-pre-wrap font-body text-body-sm leading-relaxed text-ink"
        >
          {block.text}
        </p>,
      );
      index++;
      continue;
    }

    if (CTA_KINDS.has(block.kind)) {
      const buttons: React.ReactNode[] = [];
      while (
        index < blocks.length &&
        blocks[index].type === 'marker' &&
        CTA_KINDS.has((blocks[index] as Extract<Block, { type: 'marker' }>).kind)
      ) {
        const button = renderCtaButton(
          blocks[index] as Extract<Block, { type: 'marker' }>,
          index,
          context,
        );
        if (button) buttons.push(button);
        index++;
      }
      if (buttons.length > 0) output.push(<CtaRow key={`cta-${index}`}>{buttons}</CtaRow>);
      continue;
    }

    const rich = renderRichBlock(block, index);
    if (rich) output.push(rich);
    index++;
  }

  return output;
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
  onToast: (message: string) => void;
  onCtaClick: (ctaType: string, destination: string) => void;
}) {
  const blocks = useMemo(() => parseResponse(text), [text]);

  if (blocks.length === 0) {
    return (
      <div className="inline-flex gap-1" aria-label="Thinking">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {renderBlocks(blocks, { intent, config, onToast, onCtaClick })}
    </div>
  );
}

export function AskConcierge() {
  const [visible] = useState(true);
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

  const reservationConfig = useMemo<ReservationConfig>(
    () => ({ fallbackUrl: content.brand.reservationUrl }),
    [],
  );

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  }, []);

  const openFromContext = useCallback((context: ConciergeTrackingContext) => {
    setActiveSurface(getSurface(context.surfaceId));
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
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
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

    const next: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMessage.trim() },
    ];

    setMessages([...next, { role: 'assistant', content: '' }]);
    setStreaming(true);

    let accumulated = '';
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next, context: requestContext }),
      });

      if (!response.body) throw new Error('No response body');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice(6).trim();
          if (!payload) continue;

          try {
            const parsed = JSON.parse(payload) as {
              text?: string;
              error?: string;
              tool_use?: { name: string; input: unknown };
            };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              accumulated += parsed.text;
              setMessages([...next, { role: 'assistant', content: accumulated }]);
            }
            if (
              parsed.tool_use?.name === 'update_reservation_intent' &&
              parsed.tool_use.input &&
              typeof parsed.tool_use.input === 'object'
            ) {
              setIntent((previous) =>
                mergeIntent(previous, parsed.tool_use!.input as Partial<ReservationIntent>),
              );
            }
          } catch {
            // Ignore malformed frames and keep streaming the rest.
          }
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setMessages([
        ...next,
        {
          role: 'assistant',
          content: `Sorry, I hit a snag (${message}). Please call us directly. {{call}}`,
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Ask Da Baffone"
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
        className={`fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-pill border border-accent-warm bg-surface/95 p-0 font-display text-[16px] text-accent-warm shadow-xl backdrop-blur transition-all duration-500 hover:bg-accent-warm hover:text-canvas sm:h-auto sm:w-auto sm:px-5 sm:py-3 md:bottom-6 md:right-6 ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <svg
          className="h-5 w-5 sm:hidden"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 18.5v-11A3.5 3.5 0 0 1 8.5 4h7A3.5 3.5 0 0 1 19 7.5v4A3.5 3.5 0 0 1 15.5 15H10l-5 3.5z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-warm" aria-hidden />
          Ask <span className="italic">Da Baffone</span>
        </span>
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-canvas/80 backdrop-blur-sm"
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
          aria-label="Da Baffone concierge"
          className={`absolute bottom-0 left-0 right-0 mx-auto flex h-[min(82vh,680px)] w-full max-w-xl flex-col rounded-t-[24px] border border-divider bg-canvas shadow-2xl transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          } md:bottom-6 md:left-auto md:right-6 md:mx-0 md:w-[440px] md:rounded-card`}
        >
          <div className="flex items-center justify-between border-b border-divider px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" aria-hidden />
              <div className="font-display text-[22px] tracking-wide text-ink">
                Ask <span className="italic">Da Baffone</span>
              </div>
            </div>
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
              className="text-ink-muted hover:text-ink"
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

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
            {messages.length === 0 ? (
              <div className="space-y-3">
                <p className="font-display text-[34px] leading-none text-ink">
                  Welcome to <span className="italic">Da Baffone.</span>
                </p>
                <p className="font-body text-body-sm text-ink-muted">
                  {activeSurface.body}
                </p>
              </div>
            ) : null}
            <div className="mt-4 space-y-5">
              {messages.map((message, index) =>
                message.role === 'user' ? (
                  <div key={index} className="flex justify-end">
                    <div className="max-w-[85%] rounded-card border border-divider bg-surface px-4 py-2.5 font-body text-body-sm text-ink">
                      {message.content}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="max-w-full">
                    <AssistantBubble
                      text={message.content}
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

          {messages.length === 0 ? (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {(activeSurface.prompts.length > 0
                ? activeSurface.prompts
                : SUGGESTED_CHIPS.map((text, index) => ({
                    id: `suggested_${index + 1}`,
                    text,
                  }))
              ).map((chip) => (
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
                  className="rounded-pill border border-divider bg-surface px-3 py-1.5 font-body text-body-sm text-ink-muted hover:border-accent-warm hover:text-accent-warm"
                >
                  {chip.text}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="border-t border-divider bg-surface px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Da Baffone..."
                disabled={streaming}
                className="flex-1 rounded-input bg-canvas px-4 py-2.5 font-body text-body-sm text-ink placeholder:text-ink-quiet focus:outline-none focus:ring-1 focus:ring-accent-warm"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="rounded-pill bg-accent-warm px-4 py-2.5 font-body text-button font-medium text-canvas disabled:opacity-40 hover:brightness-110"
              >
                Send
              </button>
            </div>
            <p className="mt-2 font-body text-[11px] leading-tight text-ink-quiet">
              {CONCIERGE_CONFIG.privacyNotice}
            </p>
          </form>

          {toast ? (
            <div
              role="status"
              aria-live="polite"
              className="pointer-events-none absolute inset-x-4 bottom-[84px] mx-auto max-w-sm rounded-card border border-accent-warm/60 bg-surface px-4 py-2.5 font-body text-body-sm text-ink shadow-lg"
            >
              {toast}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
