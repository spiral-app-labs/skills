'use client';
// FAQAccordion — expandable Q&A rows on dark canvas.
// **PROMOTE-NOW per audit §11** — 2nd template using this pattern
// (plate has light-canvas variant). Formal graduation to shared/.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../content.example';

export function FAQAccordion() {
  const { eyebrow, heading, items } = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-36 px-5 lg:px-12">
      <div className="mx-auto max-w-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-eyebrow text-accent mb-4 block">{eyebrow}</span>
          <h2 className="font-display text-section-h2 text-ink sticky top-28">{heading}</h2>
        </div>

        <ul className="lg:col-span-7">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li
                key={item.q}
                className="border-t border-divider last:border-b"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                >
                  <span className="font-display text-xl lg:text-2xl uppercase text-ink group-hover:text-accent transition-colors tracking-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`text-accent text-2xl leading-none mt-1 transition-transform ${
                      open ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-body-lg text-ink-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
