'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { content } from '../content.example';

export function AnonReviewCarousel() {
  const { heading, eyebrow, cta, reviews } = content.reviewProof;
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const hoverPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let raf = 0;
    let previous = performance.now();
    pausedUntilRef.current = previous + 5000;
    const speed = 48; // px/sec

    const tick = (now: number) => {
      const dt = Math.min(now - previous, 40) / 1000;
      previous = now;

      if (!hoverPausedRef.current && now > pausedUntilRef.current) {
        track.scrollLeft += speed * dt;
        const midpoint = track.scrollWidth / 2;
        if (track.scrollLeft >= midpoint) track.scrollLeft -= midpoint;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pauseBriefly = () => {
    pausedUntilRef.current = performance.now() + 4000;
  };

  return (
    <section className="relative overflow-hidden bg-canvas-alt py-16 md:py-24">
      <div className="max-w-plate mx-auto px-5 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
          <div>
            <p className="text-eyebrow text-accent mb-3">{eyebrow}</p>
            <h2 className="font-display text-section-h2 font-medium text-ink max-w-[12ch] md:max-w-none">
              {heading}
            </h2>
          </div>
          <Link href={cta.href} className="text-button text-accent hover:text-accent-dark">
            {cta.label} →
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-28 bg-gradient-to-r from-canvas-alt to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-28 bg-gradient-to-l from-canvas-alt to-transparent" />
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:px-10"
          style={{ scrollbarWidth: 'none' }}
          onMouseEnter={() => { hoverPausedRef.current = true; }}
          onMouseLeave={() => { hoverPausedRef.current = false; }}
          onPointerDown={pauseBriefly}
          onTouchStart={pauseBriefly}
          onWheel={pauseBriefly}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <article
              key={`${review.quote}-${index}`}
              className="w-[82vw] snap-start md:w-[440px] shrink-0 rounded-card border border-divider bg-canvas p-6 md:p-7 shadow-sm"
            >
              <div className="text-accent tracking-[0.16em] text-sm" aria-label="5 star review">
                ★★★★★
              </div>
              <p className="mt-5 text-[22px] leading-tight md:text-[26px] font-medium text-ink">
                “{review.quote}”
              </p>
              <p className="mt-6 text-eyebrow text-ink-muted">{review.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
