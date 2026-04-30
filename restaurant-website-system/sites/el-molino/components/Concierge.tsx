'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { content } from '../content';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string };

const suggestedQuestions = [
  'Are you open right now?',
  'What should I order first?',
  'Can I bring a group?',
  'What changed with new management?',
];

const greeting: Message = {
  role: 'assistant',
  content:
    "Welcome in. I can help with hours, menu highlights, the renovated room, or what to try first. For anything time-sensitive, I'll point you straight to the restaurant.",
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AssistantContent({ content: text }: { content: string }) {
  const reduce = useReducedMotion();
  const cleanText = text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/^\s*#{1,6}\s+/gm, '')
    .trim();

  if (reduce) {
    return <span className="whitespace-pre-wrap">{cleanText}</span>;
  }

  return (
    <span className="whitespace-pre-wrap">
      {cleanText.split(/(\s+)/).map((token, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  );
}

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const hasUserMessages = messages.some((message) => message.role === 'user');

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open, scrollToBottom]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || loading) return;

      const nextMessages: Message[] = [...messages, { role: 'user', content: text }];
      setMessages([...nextMessages, { role: 'assistant', content: '' }]);
      setInput('');
      setLoading(true);
      setError(null);

      try {
        const wireMessages = nextMessages.filter((message) => message !== greeting);
        const response = await fetch('/api/concierge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: wireMessages }),
        });

        if (!response.ok || !response.body) {
          const textBody = await response.text().catch(() => '');
          throw new Error(textBody || `Concierge request failed (${response.status})`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          assistantText += decoder.decode(value, { stream: true });
          setMessages([...nextMessages, { role: 'assistant', content: assistantText }]);
        }

        const trailing = decoder.decode();
        if (trailing) {
          assistantText += trailing;
          setMessages([...nextMessages, { role: 'assistant', content: assistantText }]);
        }
      } catch (err) {
        setMessages(nextMessages);
        setError(err instanceof Error ? err.message : 'The concierge is having trouble right now.');
      } finally {
        setLoading(false);
      }
    },
    [loading, messages],
  );

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      send(input);
    },
    [input, send],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        send(input);
      }
    },
    [input, send],
  );

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Open El Molino concierge"
        onClick={() => setOpen(true)}
        className="group fixed bottom-24 right-4 z-[60] inline-flex items-center gap-3 rounded-full border border-line bg-paper py-2 pl-2 pr-4 text-left shadow-[0_20px_70px_rgba(18,37,34,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-maize focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-canvas md:bottom-6 md:right-6"
      >
        <span
          aria-hidden="true"
          className="grid h-11 w-11 place-items-center rounded-full bg-night font-display text-[23px] font-semibold leading-none text-maize transition group-hover:bg-mahogany"
        >
          EM
        </span>
        <span className="grid gap-0.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-chile">El Molino</span>
          <span className="text-sm font-semibold text-ink">Ask the host</span>
        </span>
      </button>
    );
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[55] bg-night/50 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease }}
        onClick={() => setOpen(false)}
      />
      <motion.div
          role="dialog"
          aria-label="El Molino concierge"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
          style={{ transformOrigin: 'bottom right' }}
          className="fixed inset-x-3 bottom-[88px] z-[70] mx-auto flex h-[min(68dvh,570px)] max-w-[440px] flex-col overflow-hidden rounded-card border border-maize/35 bg-paper shadow-[0_32px_100px_rgba(18,37,34,0.42)] md:inset-x-auto md:bottom-6 md:right-6 md:h-[min(76vh,640px)] md:w-[430px]"
        >
          <div className="relative overflow-hidden border-b border-maize/25 bg-night px-4 py-4 text-paper">
            <div className="absolute inset-x-0 top-0 h-px bg-maize/60" />
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-card border border-maize/35 bg-paper/9 font-display text-[26px] font-semibold text-maize">
                  EM
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-maize">El Molino host</p>
                  <p className="mt-1 font-display text-[30px] font-semibold leading-none text-paper">
                    Ask about tonight
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/18 bg-paper/8 text-paper transition hover:border-maize hover:text-maize focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-night"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-paper/14 bg-paper/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-paper/72">
                {content.brand.tagline}
              </span>
              <span className="rounded-full border border-maize/25 bg-maize/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-maize">
                New management
              </span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F7EFE4] px-4 py-4 [scrollbar-width:thin]">
            <div className="flex flex-col gap-3.5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === 'user'
                      ? 'self-end max-w-[82%] rounded-card bg-mahogany px-4 py-3 text-sm leading-6 text-paper shadow-[0_10px_26px_rgba(90,45,33,0.18)]'
                      : 'self-start max-w-[90%] rounded-card border border-line bg-paper px-4 py-3 text-sm leading-6 text-muted shadow-[0_10px_30px_rgba(36,27,23,0.08)]'
                  }
                >
                  {message.role === 'assistant' && message.content === '' && loading ? (
                    <span className="inline-flex items-center gap-1.5 text-muted">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-maize" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-maize [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-maize [animation-delay:240ms]" />
                    </span>
                  ) : message.role === 'assistant' ? (
                    <AssistantContent content={message.content} />
                  ) : (
                    <span className="whitespace-pre-wrap">{message.content}</span>
                  )}
                </div>
              ))}
              {error ? (
                <div className="self-start max-w-[90%] rounded-card border border-chile/40 bg-paper px-4 py-3 text-sm leading-6 text-chile">
                  {error}
                </div>
              ) : null}
            </div>
          </div>

          {!hasUserMessages && !loading ? (
            <div className="border-t border-line bg-paper px-4 py-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Good starting points
              </p>
              <div className="grid grid-cols-2 gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => send(question)}
                  className="rounded-card border border-line bg-canvas px-3 py-2 text-left text-xs font-semibold leading-4 text-ink transition hover:border-maize hover:bg-paper focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2"
                >
                  {question}
                </button>
              ))}
              </div>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="flex items-end gap-2 border-t border-line bg-paper px-4 py-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about hours, food, groups..."
              className="min-h-11 flex-1 resize-none rounded-card border border-line bg-canvas px-3 py-2 text-sm leading-6 text-ink placeholder:text-muted focus:border-maize focus:bg-paper focus:outline-none"
              maxLength={1000}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-night text-maize transition hover:bg-mahogany disabled:opacity-40"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12l14-7-7 14-2-7-5-0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="border-t border-line bg-paper px-4 py-2.5 text-[11px] leading-5 text-muted">
            For exact timing, reservations, or groups, call {content.brand.phone}.
          </p>
      </motion.div>
    </>
  );
}
