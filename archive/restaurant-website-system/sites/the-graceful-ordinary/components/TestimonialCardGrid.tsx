'use client';

import { useEffect, useRef } from 'react';
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
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const hoverPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let frame = 0;
    let last = performance.now();
    const speed = 60; // px / second

    const tick = (now: number) => {
      const delta = Math.min(now - last, 48);
      last = now;

      if (!hoverPausedRef.current && now > pausedUntilRef.current) {
        track.scrollLeft += (speed * delta) / 1000;
        const half = track.scrollWidth / 2;
        if (half > 0 && track.scrollLeft >= half) track.scrollLeft -= half;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pauseBriefly = () => {
    pausedUntilRef.current = performance.now() + 4000;
  };

  const reviews = [...v.testimonials, ...v.testimonials];
  const mobileVisibleCount = 4;

  return (
    <section className="relative overflow-hidden bg-surface px-5 py-14 md:px-12 md:py-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p className="text-eyebrow">{v.eyebrow}</p>
          <DH content={v.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex flex-col gap-4 overflow-visible pr-0 md:flex-row md:overflow-x-auto md:scroll-smooth md:pr-8"
            style={{ scrollbarWidth: 'none' }}
            onMouseEnter={() => { hoverPausedRef.current = true; }}
            onMouseLeave={() => { hoverPausedRef.current = false; }}
            onPointerDown={pauseBriefly}
            onTouchStart={pauseBriefly}
            onWheel={pauseBriefly}
          >
            {reviews.map((t, i) => (
              <figure
                key={`${t.quote}-${i}`}
                className={`w-full shrink-0 rounded-card border border-border/30 bg-surface-alt p-5 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:w-[440px] md:p-7 md:space-y-5 ${i >= mobileVisibleCount ? 'hidden md:block' : ''}`}
              >
                <div className="tracking-[0.18em] text-accent" aria-label="5 star review">★★★★★</div>
                <blockquote className="text-body text-text/90 leading-relaxed font-display italic" style={{ fontSize: '18px' }}>
                  “{t.quote}”
                </blockquote>
                <figcaption className="text-micro text-accent/70 uppercase tracking-[0.18em]">
                  {t.platform}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-14 bg-gradient-to-r from-surface to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-14 bg-gradient-to-l from-surface to-transparent md:block" />
        </div>
      </div>
    </section>
  );
}
