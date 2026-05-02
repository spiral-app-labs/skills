'use client';

import { content } from '../content.example';

// Trust-strip: 4 facts side-by-side. The audit's external-trust block found
// no press hits for Sammy's, so we lean on rating-count math + the unusual
// 8 AM – 2 AM hours as the moat. No fabricated claims.

export function TrustStrip() {
  const { items } = content.trustStrip;
  return (
    <section className="bg-canvas-alt border-y border-divider">
      <div className="max-w-plate mx-auto px-5 md:px-10 py-7 md:py-9">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {items.map((it, i) => (
            <div key={`${it.label}-${i}`}>
              <p className="font-display text-section-h3 font-medium text-ink">{it.label}</p>
              <p className="mt-1 text-body-sm text-ink-muted">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
