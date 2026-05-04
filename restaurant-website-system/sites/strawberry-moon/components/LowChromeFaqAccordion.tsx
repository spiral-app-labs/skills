'use client';

import { useState } from 'react';

type Faq = { q: string; a: string };

// LowChromeFaqAccordion — borderless rows, just thin dividers + rotating chevron.
// PROMOTION CANDIDATE — shares ancestry with plate's FAQAccordion.
export function LowChromeFaqAccordion({
  heading,
  faqs,
}: {
  heading?: string;
  faqs: ReadonlyArray<Faq>;
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-16">
        {heading && <p className="text-micro text-ink mb-6">{heading}</p>}
        <ul className="divide-y divide-ink/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-5 md:py-6 vs-link"
                  aria-expanded={isOpen}
                >
                  <span className="text-h3 md:text-[22px] pr-8">{faq.q}</span>
                  <span
                    className="text-h3 shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >+</span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-10 max-w-prose-editorial">
                    <p className="text-body text-ink">{faq.a}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
