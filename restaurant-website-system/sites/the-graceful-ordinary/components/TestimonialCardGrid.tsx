'use client';

import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * Anonymous Google review carousel.
 * Improvement-pass contract: scrollLeft marquee + manual drag/swipe friendly,
 * no names/dates/avatars, short quotes only, reduced-motion safe.
 */
export function TestimonialCardGrid() {
  const v = content.voicesOfExperience;
  const reviews = v.testimonials.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-surface px-5 py-14 md:px-12 md:py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-12">
          <p className="text-eyebrow">{v.eyebrow}</p>
          <DH content={v.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />
          <p className="text-body text-text/72">
            Recent guest language around the food, cocktails, rooms, and the pace of dinner.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((t, i) => (
            <figure
              key={`${t.quote}-${i}`}
              className="flex min-h-[220px] flex-col justify-between rounded-card border border-border/30 bg-surface-alt p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:min-h-[240px] md:p-7"
            >
              <div className="space-y-4 md:space-y-5">
                <div className="tracking-[0.18em] text-accent" aria-label="5 star review">★★★★★</div>
                <blockquote className="font-display text-[22px] italic leading-[1.45] text-text/92 md:text-[24px]">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="pt-6 text-micro uppercase tracking-[0.18em] text-accent/70">
                {t.platform}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
