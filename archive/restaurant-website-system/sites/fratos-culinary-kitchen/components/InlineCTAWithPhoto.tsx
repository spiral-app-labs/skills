// InlineCTAWithPhoto — 2-col closing block. Rotated pizza photo left, newsletter
// form right. Per audit §6 — generic utility; real forks should consider
// replacing with a second order CTA or loyalty hook.

'use client';

import { content } from '../content.example';

export function InlineCTAWithPhoto() {
  const c = content.closingCTA;
  return (
    <section className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.photo}
              alt={c.photoAlt}
              className="w-full aspect-square object-cover rounded-full shadow-card"
              style={{ transform: 'rotate(-6deg)' }}
            />
          </div>
          <div>
            <h2 className="text-section-h2 font-extrabold text-ink">{c.heading}</h2>
            <p className="mt-4 text-body text-ink-soft">{c.subhead}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={c.primaryCta.href}
                className="inline-flex items-center justify-center h-12 px-6 rounded-pill bg-accent text-text-on-brand text-button hover:bg-accent-hover transition-colors"
              >
                {c.primaryCta.label}
              </a>
              <a
                href={c.secondaryCta.href}
                className="inline-flex items-center justify-center h-12 px-6 rounded-pill bg-ink text-text-on-dark text-button hover:bg-ink/80 transition-colors"
              >
                {c.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
