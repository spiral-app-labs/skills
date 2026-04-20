'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// FAQAccordion — FIRST IN CATALOG. Promote-now primitive.
// 2-column layout: eyebrow+heading left, accordion rows right.
// Expand-on-click with chevron rotation + height animation.
// Single-expanded mode (clicking a new row collapses the previous).
export function FAQAccordion() {
  const { eyebrow, heading, items } = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-[340px_1fr] gap-10 md:gap-16">
        <div>
          <div className="text-eyebrow text-accent">{eyebrow}</div>
          <h2 className="mt-3 font-display text-section-h2 font-medium text-ink">{heading}</h2>
        </div>

        <div>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="faq-row">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-[18px] font-medium text-ink">{item.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform ${
                      isOpen ? 'bg-accent rotate-45' : 'bg-ink'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: theme.motion.transitionDuration, ease: theme.motion.easing }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-body text-ink-muted max-w-[60ch]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
