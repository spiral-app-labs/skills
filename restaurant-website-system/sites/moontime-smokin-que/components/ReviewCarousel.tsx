'use client';

import { useEffect, useRef } from 'react';
import { content } from '../content.example';

const AUTO_SCROLL_PX_PER_SECOND = 60;
const INTERACTION_PAUSE_MS = 4000;

export function ReviewCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedByHoverRef = useRef(false);
  const pauseUntilRef = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frame = 0;
    let previousTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - previousTime;
      previousTime = now;

      const wrapAt = scroller.scrollWidth / 2;
      const canMove = !pausedByHoverRef.current && now >= pauseUntilRef.current && wrapAt > 0;

      if (canMove) {
        scroller.scrollLeft += (AUTO_SCROLL_PX_PER_SECOND * elapsed) / 1000;
        if (scroller.scrollLeft >= wrapAt) {
          scroller.scrollLeft -= wrapAt;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pauseTemporarily = () => {
    pauseUntilRef.current = performance.now() + INTERACTION_PAUSE_MS;
  };

  const reviews = [...content.reviewsAnon, ...content.reviewsAnon];

  return (
    <section className="relative overflow-hidden bg-bg-cream px-0 py-14 text-text-dark md:py-20" aria-label="Guest review carousel">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-10">
        <p className="text-address text-sauce-red">Highest-rated review proof</p>
        <h2 className="mt-3 font-display text-body-h3 text-text-dark md:text-tagline-h2" style={{ fontWeight: 300 }}>
          What guests keep saying
        </h2>
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg-cream to-bg-cream/0 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg-cream to-bg-cream/0 md:w-24" />
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto px-5 py-2 md:gap-5 md:px-10"
          style={{ scrollbarWidth: 'none' }}
          onMouseEnter={() => {
            pausedByHoverRef.current = true;
          }}
          onMouseLeave={() => {
            pausedByHoverRef.current = false;
          }}
          onPointerDown={pauseTemporarily}
          onTouchStart={pauseTemporarily}
          onWheel={pauseTemporarily}
        >
          {reviews.map((review, index) => (
            <article
              key={`${review.quote}-${index}`}
              className="flex w-[85vw] shrink-0 flex-col justify-between rounded-card border border-brass/35 bg-bg-dark px-5 py-5 text-text-cream shadow-xl shadow-black/10 md:w-[440px] md:px-6 md:py-6"
            >
              <p className="text-lg leading-none text-brass" aria-label="Five out of five stars">
                ★★★★★
              </p>
              <p className="mt-4 text-body text-text-cream md:text-lg md:leading-7">
                &quot;{review.quote}&quot;
              </p>
              <p className="mt-5 text-address text-text-muted-cream">{review.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
