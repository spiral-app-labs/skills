// Concierge \u2014 floating AI host for Cucina Bella.
//
// Streams replies from /api/concierge (server-side route holds the API key).
// Visual register matches the site: warm-black canvas, cream ink, italic
// Sorts Mill Goudy display, ochre accent. Sits bottom-right, lifts above the
// MobileCallBar on small screens.
//
// Animation upgrades:
//   #6 Launcher \u2192 dialog morph: both anchor bottom-right; AnimatePresence
//      cross-fades + scales between them. Looks like the bubble grows into
//      the panel and back.
//   #7 Streaming word reveal: each word in the assistant's reply renders as
//      a motion.span keyed by index. New words appear with a 0.35s
//      opacity/y fade as they arrive from the stream \u2014 typewriter feel
//      without forcing per-character timing.
'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string };

const SUGGESTED_QUESTIONS = [
  'What\u2019s on the menu tonight?',
  'Are you open right now?',
  'Do you cater?',
  'Is the kitchen kid-friendly?',
];

const GREETING: Message = {
  role: 'assistant',
  content:
    'Hi \u2014 welcome to Cucina Bella. Ask me about the menu, hours, reservations, or catering. I\u2019ll point you in the right direction.',
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ----- Word-by-word streaming reveal --------------------------------------
function AssistantContent({ content }: { content: string }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <span className="whitespace-pre-wrap">{content}</span>;
  }
  // Split keeping whitespace runs as their own tokens so layout (newlines,
  // spaces) is preserved exactly. Each token gets a stable index key so
  // already-rendered words stay put while new ones fade in.
  const tokens = content.split(/(\s+)/);
  return (
    <span className="whitespace-pre-wrap">
      {tokens.map((tok, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
        >
          {tok}
        </motion.span>
      ))}
    </span>
  );
}

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [open, messages, scrollToBottom]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || loading) return;

      const next: Message[] = [...messages, { role: 'user', content: text }];
      setMessages([...next, { role: 'assistant', content: '' }]);
      setInput('');
      setLoading(true);
      setError(null);

      try {
        const wireMessages = next.filter((m) => m !== GREETING);
        const resp = await fetch('/api/concierge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: wireMessages }),
        });

        if (!resp.ok || !resp.body) {
          const errText = await resp.text().catch(() => '');
          throw new Error(errText || `HTTP ${resp.status}`);
        }

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = '';
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          setMessages([...next, { role: 'assistant', content: assistantText }]);
        }
        const trailing = decoder.decode();
        if (trailing) {
          assistantText += trailing;
          setMessages([...next, { role: 'assistant', content: assistantText }]);
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'Something went wrong.';
        setError(msg);
        setMessages(next);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      send(input);
    },
    [input, send],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send(input);
      }
    },
    [input, send],
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!open ? (
        <motion.button
          key="launcher"
          type="button"
          aria-label="Open Cucina Bella concierge"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.22, ease }}
          style={{ transformOrigin: 'bottom right' }}
          className="fixed bottom-24 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-divider bg-surface/95 px-5 py-3 font-body text-button text-ink shadow-2xl backdrop-blur-card transition-colors hover:border-accent-warm/60 hover:text-accent-warm md:bottom-6 md:right-6"
        >
          <span aria-hidden="true" className="font-display text-[20px] italic leading-none text-accent-warm">
            CB
          </span>
          <span>Ask the host</span>
        </motion.button>
      ) : (
        <motion.div
          key="dialog"
          role="dialog"
          aria-label="Cucina Bella concierge"
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{ duration: 0.28, ease }}
          style={{ transformOrigin: 'bottom right' }}
          className="fixed bottom-20 right-3 z-50 flex h-[min(75vh,640px)] w-[min(94vw,420px)] flex-col overflow-hidden rounded-card border border-divider bg-canvas/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-card md:bottom-6 md:right-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-divider px-5 py-4">
            <div>
              <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
                Concierge
              </p>
              <p className="mt-1 font-display text-[22px] italic leading-none text-ink">
                Cucina Bella
              </p>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-ink transition-colors hover:border-ink/50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-5 py-5 [scrollbar-width:thin]"
          >
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === 'user'
                      ? 'self-end max-w-[85%] rounded-card bg-ink px-4 py-3 font-body text-body-sm text-canvas'
                      : 'self-start max-w-[90%] rounded-card border border-divider bg-surface px-4 py-3 font-body text-body-sm text-ink-muted'
                  }
                >
                  {m.role === 'assistant' && m.content === '' && loading ? (
                    <span className="inline-flex items-center gap-1.5 text-ink-quiet">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-warm" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-warm [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-warm [animation-delay:240ms]" />
                    </span>
                  ) : m.role === 'assistant' ? (
                    <AssistantContent content={m.content} />
                  ) : (
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  )}
                </div>
              ))}
              {error ? (
                <div className="self-start max-w-[90%] rounded-card border border-accent-warm/40 bg-surface px-4 py-3 font-body text-body-sm text-accent-warm">
                  {error}
                </div>
              ) : null}
            </div>
          </div>

          {/* Suggested questions */}
          {messages.filter((m) => m.role === 'user').length === 0 && !loading ? (
            <div className="flex flex-wrap gap-2 border-t border-divider px-5 py-3">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-pill border border-divider bg-surface px-3 py-1.5 font-body text-chip uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-accent-warm/60 hover:text-ink"
                >
                  {q}
                </button>
              ))}
            </div>
          ) : null}

          {/* Composer */}
          <form
            onSubmit={onSubmit}
            className="flex items-end gap-2 border-t border-divider px-4 py-3"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about the menu, hours, reservations\u2026"
              className="flex-1 resize-none rounded-card border border-divider bg-surface px-3 py-2 font-body text-body-sm text-ink placeholder:text-ink-quiet focus:border-accent-warm/60 focus:outline-none"
              maxLength={1000}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-opacity disabled:opacity-40 hover:opacity-90"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12l14-7-7 14-2-7-5-0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="border-t border-divider px-5 py-2 font-body text-stamp uppercase tracking-[0.12em] text-ink-quiet">
            Replies are AI-generated. Confirm anything time-sensitive at (847) 458-2504.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
