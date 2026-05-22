// InlineCTAWithPhoto — 2-col closing block. Rotated pizza photo left, newsletter
// form right. Per audit §6 — generic utility; real forks should consider
// replacing with a second order CTA or loyalty hook.

'use client';

import { content } from '../content';

export function InlineCTAWithPhoto() {
  const c = content.closingCTA;
  return (
    <section className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="rounded-[40px] bg-ink p-8 text-text-on-dark shadow-card">
            <p className="text-eyebrow font-bold uppercase text-accent">Easy next step</p>
            <div className="mt-5 space-y-4 text-body">
              <p>Call for tonight, open the official menu, or get directions to Miller Road without hunting.</p>
              <p>Dino’s keeps the experience familiar: pizza formats, pasta dinners, sandwiches, beer, and a direct phone handoff.</p>
              <p className="text-body-sm opacity-80">{c.note}</p>
            </div>
          </div>
          <div>
            <h2 className="text-section-h2 font-extrabold text-ink">{c.heading}</h2>
            <p className="mt-4 text-body text-ink-soft">{c.subhead}</p>
            <div className="mt-6 grid gap-3">
              {c.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-12 items-center justify-between rounded-pill border border-divider px-5 py-3 text-body font-semibold hover:border-accent hover:bg-canvas-warm transition-colors"
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-accent">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
