'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

type ReviewCard = (typeof content.reviewCarousel.reviews)[number];
type ReviewStat = (typeof content.reviewCarousel.stats)[number];

export function ReviewCarousel({
  eyebrow = content.reviewCarousel.eyebrow,
  title = content.reviewCarousel.title,
  stats = content.reviewCarousel.stats,
  themes = content.reviewCarousel.themes,
  reviews = content.reviewCarousel.reviews,
}: {
  eyebrow?: string;
  title?: string;
  stats?: ReviewStat[];
  themes?: string[];
  reviews?: ReviewCard[];
}) {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>();
  const pauseUntilRef = useRef(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion) {
      return;
    }

    const step = (time: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isHoverPaused && time >= pauseUntilRef.current) {
        track.scrollLeft += delta * 0.06;

        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }

      frameRef.current = window.requestAnimationFrame(step);
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      lastTimeRef.current = undefined;
    };
  }, [isHoverPaused, prefersReducedMotion]);

  const pauseTemporarily = () => {
    pauseUntilRef.current = performance.now() + 4000;
  };
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-bg-cream py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <EyebrowDotLabel className="mb-3">{eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{title}</h2>
        </div>
        {!!stats?.length && (
          <div className="mb-6 grid gap-4 text-center md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-card border border-border-light bg-bg-white px-5 py-5 shadow-[0_12px_28px_rgba(33,19,14,0.06)]">
                <div className="font-display text-[34px] leading-none text-text-dark">{stat.value}</div>
                <div className="mt-2 text-eyebrow text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        {!!themes?.length && (
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {themes.map((theme) => (
              <div
                key={theme}
                className="rounded-pill border border-border-light bg-bg-white px-4 py-2 text-eyebrow text-text-dark"
              >
                {theme}
              </div>
            ))}
          </div>
        )}

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-cream to-transparent" />
          <div
            ref={trackRef}
            className="review-carousel-track -mx-6 overflow-x-auto px-6 pb-4"
            style={{ scrollbarWidth: 'none' }}
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
            onFocus={() => setIsHoverPaused(true)}
            onBlur={() => setIsHoverPaused(false)}
            onPointerDown={pauseTemporarily}
            onTouchStart={pauseTemporarily}
            onWheel={pauseTemporarily}
            aria-label="Anonymous guest review highlights"
          >
            <div className="flex w-max snap-x gap-5">
              {duplicatedReviews.map((review, index) => (
                <article
                  key={`${review.quote}-${index}`}
                  className="review-carousel-card flex min-h-[220px] w-[85vw] shrink-0 snap-start flex-col justify-between rounded-card border border-border-light bg-bg-white p-6 shadow-[0_18px_40px_rgba(33,19,14,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(33,19,14,0.14)] md:w-[440px]"
                >
                  <div>
                    <div className="mb-4 text-[18px] tracking-[0.18em] text-accent" aria-label="5 star review">
                      ★★★★★
                    </div>
                    <p className="text-body text-text-dark">&ldquo;{review.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 border-t border-border-light pt-4 text-eyebrow text-accent">
                    {review.platform}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
