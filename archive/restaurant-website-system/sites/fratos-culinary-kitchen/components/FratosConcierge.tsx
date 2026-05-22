'use client';

import { useState } from 'react';
import { content } from '../content.example';

const questions = content.concierge.questions;

type Question = (typeof questions)[number];

export function FratosConcierge() {
  const [active, setActive] = useState<Question>(questions[0]);

  return (
    <section id="concierge" className="bg-[#1A1A1A] py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-content gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#FFC947]">
            {content.concierge.eyebrow}
          </p>
          <h2 className="mt-4 text-[38px] font-extrabold leading-[0.95] tracking-[-0.04em] md:text-[64px]">
            {content.concierge.heading}
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-7 text-white/72">
            {content.concierge.subhead}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {content.concierge.primaryActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="inline-flex min-h-12 items-center justify-center rounded-pill bg-[#FF003C] px-5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_16px_36px_rgba(255,0,60,0.24)] transition-colors hover:bg-[#E00035]"
              >
                {action.label}
              </a>
            ))}
          </div>

          <p className="mt-4 max-w-[520px] text-[12px] leading-5 text-white/50">
            {content.concierge.safetyNote}
          </p>
        </div>

        <div className="rounded-[32px] border border-white/12 bg-white p-4 text-ink shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-6">
          <div className="flex items-center justify-between gap-3 border-b border-divider pb-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FF003C]">
                Site helper
              </p>
              <h3 className="mt-1 text-[22px] font-extrabold">Ask a safe Frato&apos;s question</h3>
            </div>
            <span className="rounded-full bg-[#FFF2CC] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#6B4500]">
              Verified facts
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {questions.map((question) => (
              <button
                key={question.label}
                type="button"
                onClick={() => setActive(question)}
                className={`min-h-11 rounded-pill border px-4 text-[12px] font-extrabold uppercase tracking-[0.08em] transition-colors ${
                  active.label === question.label
                    ? 'border-[#FF003C] bg-[#FF003C] text-white'
                    : 'border-card-border bg-white text-ink hover:border-[#FF003C] hover:text-[#FF003C]'
                }`}
              >
                {question.label}
              </button>
            ))}
          </div>

          <div aria-live="polite" className="mt-5 rounded-[24px] bg-[#FFF8E8] p-5">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#B76000]">
              Guest asks
            </p>
            <p className="mt-2 text-[18px] font-extrabold leading-6 text-ink">{active.prompt}</p>
            <p className="mt-5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#FF003C]">
              Helper answer
            </p>
            <p className="mt-2 text-[16px] leading-7 text-ink-soft">{active.answer}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {active.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="inline-flex min-h-10 items-center justify-center rounded-pill bg-ink px-4 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#FF003C]"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
