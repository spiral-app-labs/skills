'use client';

import { useState } from 'react';
import { content } from '../content';

export function ConciergePanel() {
  const [active, setActive] = useState(0);
  const item = content.concierge.questions[active];

  return (
    <section className="bg-canvas-warm">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-eyebrow font-bold uppercase text-accent">{content.concierge.eyebrow}</p>
            <h2 className="mt-3 text-section-h2 font-extrabold text-ink">{content.concierge.heading}</h2>
            <p className="mt-4 text-body text-ink-soft">{content.concierge.subhead}</p>
            <p className="mt-5 rounded-card border border-card-border bg-canvas px-5 py-4 text-body-sm text-ink-soft">
              {content.concierge.guardrail}
            </p>
          </div>

          <div className="rounded-card border border-card-border bg-canvas p-4 md:p-6 shadow-card">
            <div className="grid gap-2 sm:grid-cols-2">
              {content.concierge.questions.map((q, index) => (
                <button
                  key={q.question}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-[20px] border px-4 py-3 text-left text-body-sm font-bold transition-colors ${
                    active === index
                      ? 'border-accent bg-accent text-text-on-brand'
                      : 'border-divider bg-canvas-warm text-ink hover:border-accent'
                  }`}
                >
                  {q.question}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-[28px] bg-ink p-6 text-text-on-dark">
              <p className="text-eyebrow font-bold uppercase text-accent">Concierge answer</p>
              <h3 className="mt-3 text-[26px] leading-[32px] font-extrabold">{item.question}</h3>
              <p className="mt-4 text-body opacity-90">{item.answer}</p>
              <a
                href={item.ctaHref}
                className="mt-6 inline-flex items-center justify-center h-11 px-5 rounded-pill bg-accent text-text-on-brand text-button hover:bg-accent-hover transition-colors"
              >
                {item.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
