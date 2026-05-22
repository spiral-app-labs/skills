'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const SUGGESTED_CHIPS = [
  'What should I order first?',
  'Is the food halal?',
  'How do I order or visit?',
];

export function AskConcierge({ restaurantName }: { restaurantName: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [nearVisitSection, setNearVisitSection] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.3);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const visitSection = document.getElementById('book');
    if (!visitSection) {
      setNearVisitSection(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setNearVisitSection(entry.isIntersecting),
      { rootMargin: '0px 0px -35% 0px', threshold: 0.05 },
    );
    observer.observe(visitSection);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  async function send(userMessage: string) {
    const trimmed = userMessage.trim();
    if (!trimmed || streaming) return;

    setInput('');
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);
    setStreaming(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      const answer = data.text ?? data.error ?? 'Please call The Chef Grill directly and the team will help.';
      setMessages([...nextMessages, { role: 'assistant', content: answer.replace(/\s*[—–]\s*/g, ', ') }]);
    } catch {
      setMessages([
        ...nextMessages,
        { role: 'assistant', content: 'Sorry, I hit a snag. Please call (312) 313-8900 and the restaurant can help directly.' },
      ]);
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={`Ask ${restaurantName} concierge`}
        onClick={() => setOpen(true)}
        className={`fixed bottom-32 right-4 z-40 hidden rounded-full bg-accent px-5 py-3 text-button font-semibold text-white shadow-xl transition-all duration-500 md:block md:bottom-6 md:right-6 ${
          visible && !open && pathname !== '/contact' && !nearVisitSection ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        Ask {restaurantName}
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Close concierge backdrop"
          className="absolute inset-0 h-full w-full bg-ink/45"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-label={`${restaurantName} concierge`}
          className={`absolute bottom-0 left-0 right-0 mx-auto flex h-[min(82vh,640px)] w-full max-w-xl flex-col rounded-t-[24px] bg-canvas shadow-2xl transition-transform duration-300 md:bottom-6 md:right-6 md:left-auto md:mx-0 md:w-[430px] md:rounded-card ${
            open ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-divider px-5 py-4">
            <div>
              <p className="text-eyebrow text-accent">Restaurant concierge</p>
              <p className="font-display text-[22px] font-medium text-ink">Ask {restaurantName}</p>
            </div>
            <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink">
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="font-display text-section-h3 font-medium text-ink">Need a quick steer?</p>
                <p className="text-body-sm text-ink-muted">
                  I can help with menu highlights, halal positioning, order links, phone, directions, and visit guidance.
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[86%] rounded-card px-4 py-3 text-body-sm ${
                    message.role === 'user' ? 'bg-accent text-white' : 'bg-canvas-alt text-ink'
                  }`}
                >
                  {message.content || (
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" style={{ animationDelay: '150ms' }} />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-muted" style={{ animationDelay: '300ms' }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {SUGGESTED_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => send(chip)}
                  className="rounded-full border border-divider bg-canvas-alt px-3 py-2 text-body-sm text-ink hover:border-accent hover:text-accent"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="border-t border-divider bg-canvas-alt px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about menu, halal, order, directions…"
                disabled={streaming}
                className="min-w-0 flex-1 rounded-button bg-canvas px-4 py-3 text-body-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="rounded-button bg-accent px-4 py-3 text-button font-semibold text-white disabled:opacity-40"
              >
                Send
              </button>
            </div>
            <p className="mt-2 text-[12px] leading-snug text-ink-muted">
              Digital guide only. Call the restaurant to confirm allergens, hours, reservations, or order changes.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
