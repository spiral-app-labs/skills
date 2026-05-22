'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { content } from '../content.example';

type Role = 'user' | 'assistant';
type Message = { role: Role; content: string };

const starterQuestions = [
  'Do I need to call for brunch?',
  'What should I order for seafood dinner?',
  'Is Dockside open?',
  'Can I host a private event?',
];

const greeting: Message = {
  role: 'assistant',
  content:
    'Welcome aboard. Ask about dinner, brunch, Dockside, private rooms, events, or Toast ordering. For reservations, Port Edward still works best by phone.',
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AssistantText({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <span className="whitespace-pre-wrap">{text}</span>;

  return (
    <span className="whitespace-pre-wrap">
      {text.split(/(\s+)/).map((token, index) => (
        <motion.span
          key={`${token}-${index}`}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  );
}

export function AiConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || loading) return;

      const nextMessages: Message[] = [...messages, { role: 'user', content: text }];
      setMessages(nextMessages);
      setInput('');
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/concierge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: nextMessages.slice(1) }),
        });
        const reply = (await response.text()).trim();
        if (!response.ok) throw new Error(reply || 'The concierge is not available right now.');
        setMessages([...nextMessages, { role: 'assistant', content: reply }]);
      } catch {
        setError(`For the fastest answer, call ${content.brand.phone}.`);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages],
  );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      send(input);
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!open ? (
        <motion.button
          key="launcher"
          type="button"
          aria-label="Open Port Edward concierge"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.26, ease }}
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-button border border-brass bg-canvas-dark px-4 py-3 text-button text-ink-on-dark shadow-2xl transition-colors hover:bg-ink"
        >
          <span className="font-display text-[22px] font-black leading-none">PE</span>
          <span>Ask Concierge</span>
        </motion.button>
      ) : (
        <motion.div
          key="dialog"
          role="dialog"
          aria-label="Port Edward concierge"
          initial={{ opacity: 0, y: 18, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.28, ease }}
          className="fixed bottom-3 right-3 z-50 flex h-[min(82vh,650px)] w-[min(94vw,430px)] flex-col overflow-hidden rounded-card border border-hairline bg-canvas shadow-2xl md:bottom-6 md:right-6"
        >
          <div className="flex items-start justify-between gap-4 border-b border-hairline bg-canvas-alt px-5 py-4">
            <div>
              <p className="label-eyebrow text-accent">AI Concierge</p>
              <p className="mt-1 font-display text-[28px] font-black uppercase leading-none text-ink">
                {content.brand.name}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-button border border-hairline px-3 py-2 text-button text-ink transition-colors hover:border-ink"
            >
              Close
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === 'user'
                      ? 'ml-auto max-w-[84%] rounded-card bg-accent px-4 py-3 text-body-sm text-ink-on-dark'
                      : 'mr-auto max-w-[90%] rounded-card border border-hairline bg-canvas-alt px-4 py-3 text-body-sm text-ink'
                  }
                >
                  {message.role === 'assistant' ? (
                    <AssistantText text={message.content} />
                  ) : (
                    <span className="whitespace-pre-wrap">{message.content}</span>
                  )}
                </div>
              ))}

              {loading ? (
                <div className="mr-auto inline-flex items-center gap-2 rounded-card border border-hairline bg-canvas-alt px-4 py-3 text-body-sm text-ink-muted">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent [animation-delay:240ms]" />
                </div>
              ) : null}

              {error ? (
                <div className="mr-auto max-w-[90%] rounded-card border border-accent bg-canvas px-4 py-3 text-body-sm text-accent">
                  {error}
                </div>
              ) : null}
            </div>
          </div>

          {messages.length === 1 && !loading ? (
            <div className="flex flex-wrap gap-2 border-t border-hairline px-4 py-3">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => send(question)}
                  className="rounded-button border border-hairline bg-canvas px-3 py-2 text-left text-[15px] leading-5 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {question}
                </button>
              ))}
            </div>
          ) : null}

          <div className="grid grid-cols-3 border-t border-hairline text-center text-button">
            <a className="border-r border-hairline px-3 py-3 text-ink hover:text-accent" href={content.brand.phoneHref}>
              Call
            </a>
            <a className="border-r border-hairline px-3 py-3 text-ink hover:text-accent" href={content.brand.orderUrl} target="_blank" rel="noopener noreferrer">
              Toast
            </a>
            <a className="px-3 py-3 text-ink hover:text-accent" href="/private-events">
              Events
            </a>
          </div>

          <form onSubmit={submit} className="flex items-end gap-2 border-t border-hairline px-4 py-3">
            <textarea
              ref={inputRef}
              value={input}
              rows={1}
              maxLength={900}
              disabled={loading}
              placeholder="Ask about brunch, Dockside, menu, or private rooms"
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              className="min-h-11 flex-1 resize-none rounded-input border border-hairline bg-canvas-alt px-3 py-2 font-sans text-[15px] leading-5 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="min-h-11 rounded-button bg-accent px-4 py-2 text-button text-ink-on-dark transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Send
            </button>
          </form>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
