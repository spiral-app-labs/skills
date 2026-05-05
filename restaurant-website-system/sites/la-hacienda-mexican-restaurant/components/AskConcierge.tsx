'use client';

import { useEffect, useRef, useState } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const SUGGESTED_CHIPS = [
  'What should I order tonight?',
  'When are you open?',
  'Can I order pickup?',
];

export function AskConcierge({ restaurantName = 'Bamzi' }: { restaurantName?: string }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) setVisible(true);
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
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  async function send(userMessage: string) {
    if (!userMessage.trim() || streaming) return;
    setInput('');
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMessage.trim() },
    ];
    setMessages(nextMessages);
    setStreaming(true);

    let assistantText = '';
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.body) throw new Error('No response body');
      const reader = res.body.getReader();
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
              done?: boolean;
              error?: string;
            };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.text) {
              // Strip em/en dashes on the way in so they never render.
              assistantText += parsed.text.replace(/\s*[—–]\s*/g, ', ');
              setMessages([
                ...nextMessages,
                { role: 'assistant', content: assistantText },
              ]);
            }
          } catch {
            // ignore malformed frame
          }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: `Sorry, I hit a snag (${msg}). Please call us directly.`,
        },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Trigger pill — bottom-right, reveals after scroll */}
      <button
        type="button"
        aria-label={`Ask ${restaurantName} anything`}
        onClick={() => setOpen(true)}
        className={`fixed bottom-[76px] right-4 z-40 flex items-center gap-2 rounded-pill bg-accent px-4 py-3 text-[12px] font-semibold uppercase text-text-white shadow-lg transition-all duration-500 hover:brightness-110 md:bottom-6 md:right-6 md:px-5 md:text-button ${
          visible && !open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-text-white" aria-hidden />
        Ask {restaurantName}
      </button>

      {/* Backdrop + bottom-sheet */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-bg-dark/60"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-label={`${restaurantName} concierge`}
          className={`absolute bottom-0 left-0 right-0 mx-auto flex h-[min(80vh,640px)] w-full max-w-xl flex-col rounded-t-[24px] bg-bg-cream shadow-2xl transition-transform duration-300 ${
            open ? 'translate-y-0' : 'translate-y-full'
          } md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[420px] md:rounded-card`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="text-eyebrow uppercase tracking-[2px] text-text-dark">
                {restaurantName} Concierge
              </span>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text-dark"
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
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
          >
            {messages.length === 0 && (
              <div className="space-y-4">
                <p className="font-display text-section-h3 leading-tight text-text-dark">
                  Hello, how can I help?
                </p>
                <p className="text-body-sm text-text-muted">
                  Menu favorites, hours, pickup, directions, or quick planning. Ask anything.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-card px-4 py-2.5 text-body-sm ${
                    m.role === 'user'
                      ? 'bg-accent text-text-white'
                      : 'bg-bg-white text-text-dark'
                  }`}
                >
                  {m.content || (
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted"
                        style={{ animationDelay: '300ms' }}
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested chips (only before first user message) */}
          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {SUGGESTED_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className="rounded-pill border border-border-light bg-bg-white px-3 py-1.5 text-body-sm text-text-dark hover:border-accent hover:text-accent"
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
            className="border-t border-border-light bg-bg-white px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask ${restaurantName}…`}
                disabled={streaming}
                className="flex-1 rounded-input bg-bg-cream px-4 py-2.5 text-body-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="rounded-button bg-accent px-4 py-2.5 text-button font-semibold text-text-white disabled:opacity-40 hover:brightness-110"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-tight text-text-muted">
              AI concierge, please call the restaurant for allergies, prices, or time-sensitive pickup details.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
