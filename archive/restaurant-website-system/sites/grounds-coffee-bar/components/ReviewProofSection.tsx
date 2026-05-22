'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

export function ReviewProofSection() {
  const r = content.reviews;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const quote = r.quotes[active];

  useEffect(() => {
    if (prefersReducedMotion || paused || r.quotes.length < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % r.quotes.length);
    }, 5600);
    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion, r.quotes.length]);

  return (
    <section id="reviews" className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <div className="flex flex-col gap-5">
            <p className="text-eyebrow-sm text-ink-muted">{r.eyebrow}</p>
            <h2 className="font-sans text-section-h2 text-ink">{r.heading}</h2>
            <p className="text-body-lg text-ink max-w-prose">{r.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 pt-3">
              {r.stats.map((s) => (
                <li
                  key={s.value}
                  className="rounded-photo border border-divider bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,46,36,0.07)]"
                >
                  <p className="text-h3 text-ink">{s.value}</p>
                  <p className="text-item-desc text-ink-muted mt-1">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="flex flex-col gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative min-h-[300px] rounded-card border border-divider bg-card p-6 md:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={quote.name}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col gap-6"
                >
                  <StarRow />
                  <blockquote className="font-sans text-[30px] leading-[1.22] font-medium text-ink max-sm:text-[24px]">
                    "{quote.quote}"
                  </blockquote>
                  <figcaption className="mt-auto">
                    <p className="text-item-name text-ink">{quote.name}</p>
                    <p className="text-eyebrow-sm text-ink-muted mt-1">{quote.detail}</p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2" aria-label="Review carousel controls">
              {r.quotes.map((q, i) => (
                <button
                  key={q.name}
                  type="button"
                  aria-label={`Show review from ${q.name}`}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-pill transition-all duration-300 ${
                    active === i ? 'w-8 bg-cta-bg' : 'w-2.5 bg-divider hover:bg-chip-border'
                  }`}
                />
              ))}
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {r.themes.map((theme) => (
                <li key={theme.title} className="rounded-photo border border-divider bg-card p-5">
                  <p className="text-item-name text-ink">{theme.title}</p>
                  <p className="text-item-desc text-ink-muted mt-2">{theme.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-star" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
