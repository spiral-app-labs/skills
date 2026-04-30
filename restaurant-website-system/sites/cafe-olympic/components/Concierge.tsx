// Concierge — floating AI host for Cafe Olympic.
//
// Streams replies from /api/concierge (the route handler holds the API key).
// Visual register: warm cream canvas, ink text, ochre accent, Cormorant
// display headings — matches the rest of the cafe-olympic fork. Sits
// bottom-right and stacks above the StickyCallButton on mobile.
'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string };

const SUGGESTED_QUESTIONS = [
  'Are you open right now?',
  'What’s the cinnamon roll situation?',
  'Do you take walk-ins?',
  'Is the patio dog-friendly?',
];

const GREETING: Message = {
  role: 'assistant',
  content:
    'Morning — welcome to Cafe Olympic. Ask me about the menu, hours, what’s baking today, or how to find us. I’ll point you the right way.',
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AssistantContent({ content }: { content: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="whitespace-pre-wrap">{content}</span>;
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

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [open, messages]);

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!open ? (
        <motion.button
          key="launcher"
          type="button"
          aria-label="Open Cafe Olympic concierge"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.22, ease }}
          style={{ transformOrigin: 'bottom right' }}
          className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-2 rounded-button border border-chip-border bg-card px-5 py-3 text-button text-ink shadow-lg hover:border-accent transition-colors"
        >
          <span aria-hidden className="font-display text-[22px] leading-none text-accent">CO</span>
          <span>Ask the host</span>
        </motion.button>
      ) : (
        <motion.div
          key="dialog"
          role="dialog"
          aria-label="Cafe Olympic concierge"
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{ duration: 0.28, ease }}
          style={{ transformOrigin: 'bottom right' }}
          className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-50 flex h-[min(80vh,640px)] w-[min(94vw,420px)] flex-col overflow-hidden rounded-card border border-divider bg-canvas shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-divider px-5 py-4">
            <div>
              <p className="text-eyebrow-sm tracking-[0.18em] uppercase text-accent">
                Concierge
              </p>
              <p className="font-display text-[22px] uppercase tracking-tight leading-none text-ink mt-1">
                Cafe Olympic
              </p>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-pill border border-divider text-ink hover:border-ink/50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === 'user'
                      ? 'self-end max-w-[85%] rounded-card bg-cta-bg px-4 py-3 text-body text-cta-text'
                      : 'self-start max-w-[90%] rounded-card border border-divider bg-card px-4 py-3 text-body text-ink'
                  }
                >
                  {m.role === 'assistant' && m.content === '' && loading ? (
                    <span className="inline-flex items-center gap-1.5 text-ink-muted">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent [animation-delay:240ms]" />
                    </span>
                  ) : m.role === 'assistant' ? (
                    <AssistantContent content={m.content} />
                  ) : (
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  )}
                </div>
              ))}
              {error ? (
                <div className="self-start max-w-[90%] rounded-card border border-cta-bg/40 bg-card px-4 py-3 text-body text-cta-bg">
                  {error}
                </div>
              ) : null}
            </div>
          </div>

          {messages.filter((m) => m.role === 'user').length === 0 && !loading ? (
            <div className="flex flex-wrap gap-2 border-t border-divider px-5 py-3">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-pill border border-divider bg-card px-3 py-1.5 text-eyebrow-sm uppercase tracking-wider text-ink-muted hover:border-accent hover:text-ink transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-divider px-4 py-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about the menu, hours, walk-ins…"
              className="flex-1 resize-none rounded-card border border-divider bg-card px-3 py-2 text-body text-ink placeholder:text-ink-muted/60 focus:border-accent focus:outline-none"
              maxLength={1000}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-cta-bg text-cta-text disabled:opacity-40 hover:opacity-90 transition-opacity"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12l14-7-7 14-2-7-5 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="border-t border-divider px-5 py-2 text-eyebrow-sm uppercase tracking-wider text-ink-muted/80">
            AI-generated replies. Call (815) 459-4100 for anything time-sensitive.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
