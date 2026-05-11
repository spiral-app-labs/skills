'use client';

import { useEffect, useRef } from 'react';
import { content } from '../content.example';

const PIXELS_PER_SEC = 60;
const PAUSE_AFTER_INTERACTION_MS = 4000;

function StarsRow() {
  return (
    <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true" className="text-accent">
          <path
            d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

export function AnonReviewCarousel() {
  const items = [...content.reviews.items, ...content.reviews.items];
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const userPauseUntilRef = useRef(0);
  const hoverPausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const tick = (now: number) => {
      const last = lastFrameRef.current ?? now;
      const dt = Math.min(0.1, (now - last) / 1000);
      lastFrameRef.current = now;
      const isUserPaused = now < userPauseUntilRef.current || hoverPausedRef.current;
      if (!isUserPaused) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          let next = el.scrollLeft + PIXELS_PER_SEC * dt;
          if (next >= half) next -= half;
          el.scrollLeft = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const bumpUserPause = () => {
      userPauseUntilRef.current = performance.now() + PAUSE_AFTER_INTERACTION_MS;
    };
    const onMouseEnter = () => {
      hoverPausedRef.current = true;
    };
    const onMouseLeave = () => {
      hoverPausedRef.current = false;
      bumpUserPause();
    };

    raf = requestAnimationFrame(tick);
    el.addEventListener('touchstart', bumpUserPause, { passive: true });
    el.addEventListener('pointerdown', bumpUserPause);
    el.addEventListener('wheel', bumpUserPause, { passive: true });
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('touchstart', bumpUserPause);
      el.removeEventListener('pointerdown', bumpUserPause);
      el.removeEventListener('wheel', bumpUserPause);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-10">
        <div className="max-w-[720px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
            {content.reviews.eyebrow}
          </p>
          <h2 className="mt-4 text-section-h2 font-extrabold text-text-on-dark">
            {content.reviews.heading}
          </h2>
          <p className="mt-4 text-body text-white/72">{content.reviews.subhead}</p>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-dark to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-dark to-transparent md:w-28" />

        <div
          ref={scrollerRef}
          className="no-scrollbar flex overflow-x-auto overscroll-x-contain"
          style={{ scrollbarWidth: 'none' }}
          aria-label="Anonymous Google reviews. Drag or swipe to browse."
        >
          <ul className="flex w-max items-stretch gap-5 px-5 md:px-10">
            {items.map((review, index) => (
              <li
                key={`${review.quote}-${index}`}
                className="flex w-[85vw] shrink-0 flex-col justify-between rounded-card border border-white/10 bg-white/6 p-6 backdrop-blur-sm md:w-[440px] md:p-8"
              >
                <div>
                  <StarsRow />
                  <p className="mt-5 text-[22px] font-extrabold leading-[1.2] text-text-on-dark md:text-[26px]">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  {review.source}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
