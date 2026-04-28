// ReviewCarousel \u2014 horizontal scroll-snap carousel of verbatim review pull
// quotes from public Google reviews. Replaces the gusto-01 \u201cthemes\u201d section
// pattern with real, attributed reviewer voice.
//
// Behavior:
// - Auto-advances every 5.5s when the section is in view and not paused.
// - Pauses on hover and for 9s after a manual button click.
// - Active (most-visible) card scales to 100% / opacity 100; off-stage cards
//   sit at scale 0.97 / opacity 60 with a 700ms ease-out transition. Subtle
//   so it reads as polish, not motion-heavy.
// - Mobile: native swipe via CSS scroll-snap; auto-advance still runs.
// - Desktop: prev/next buttons override timer for 9s on click.
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { content } from '../content.example';

const ADVANCE_INTERVAL_MS = 5500;
const PAUSE_AFTER_INTERACTION_MS = 9000;

function StarsRow({ rating = 5 }: { rating?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="text-accent-warm"
        >
          <path
            d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
            fill={i < rating ? 'currentColor' : 'currentColor'}
            opacity={i < rating ? 1 : 0.25}
          />
        </svg>
      ))}
    </span>
  );
}

export function ReviewCarousel() {
  const r = content.home.reviews;
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const cardCount = r.items.length;

  const measureStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return { cardWidth: 360, gap: 12 };
    const card = el.querySelector('[data-review-card]');
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 360;
    return { cardWidth, gap: 12 };
  }, []);

  const advance = useCallback(
    (direction: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const { cardWidth, gap } = measureStep();
      const step = (cardWidth + gap) * direction;

      if (direction === 1) {
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        if (atEnd) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
          return;
        }
      } else {
        const atStart = el.scrollLeft <= 4;
        if (atStart) {
          el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
          return;
        }
      }
      el.scrollBy({ left: step, behavior: 'smooth' });
    },
    [measureStep],
  );

  const pauseFor = useCallback((ms: number) => {
    setManualPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setManualPaused(false);
      pauseTimeoutRef.current = null;
    }, ms);
  }, []);

  // Section in-view detection \u2014 don't run timers offscreen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance timer.
  useEffect(() => {
    if (!inView || hovered || manualPaused) return;
    const id = setInterval(() => advance(1), ADVANCE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [inView, hovered, manualPaused, advance]);

  // Active-card detection \u2014 highlight the most-visible card.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('[data-review-card]')) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersectionRatio that crosses 0.6.
        let bestEl: HTMLElement | null = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.6) return;
          if (entry.intersectionRatio > bestRatio) {
            bestEl = entry.target as HTMLElement;
            bestRatio = entry.intersectionRatio;
          }
        });
        if (bestEl) {
          const idx = cards.indexOf(bestEl);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: el, threshold: [0.6, 0.75, 0.9] },
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  // Cleanup pause timeout on unmount.
  useEffect(() => () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  }, []);

  const handleManualAdvance = useCallback(
    (direction: 1 | -1) => {
      advance(direction);
      pauseFor(PAUSE_AFTER_INTERACTION_MS);
    },
    [advance, pauseFor],
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-shell px-4 pt-24 md:px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="md:max-w-xl">
          <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
            {r.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-manifesto text-ink">
            {r.heading}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {r.sourceHref ? (
            <Link
              href={r.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-button text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {r.sourceLabel ?? 'Read all reviews'} &rarr;
            </Link>
          ) : null}
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => handleManualAdvance(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-divider text-ink transition-colors hover:border-ink/50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => handleManualAdvance(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-divider text-ink transition-colors hover:border-ink/50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-6 md:-mx-6 md:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {r.items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <article
              key={idx}
              data-review-card
              className={`snap-start shrink-0 basis-[85%] rounded-card border border-divider bg-surface p-7 md:basis-[42%] lg:basis-[32%] md:p-9 transform-gpu transition-[opacity,transform,border-color] duration-700 ease-out ${
                isActive
                  ? 'opacity-100 scale-100 border-divider'
                  : 'opacity-60 scale-[0.97] border-divider/50'
              }`}
            >
              <StarsRow rating={item.rating ?? 5} />
              <blockquote className="mt-6 font-display text-[24px] leading-[1.25] italic text-ink md:text-[26px]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              {item.theme ? (
                <div className="mt-7 border-t border-divider pt-5">
                  <p className="font-body text-chip uppercase tracking-[0.18em] text-ink-quiet">
                    {item.theme}
                  </p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {/* Progress dots \u2014 reflect activeIndex; clickable to jump */}
      <div className="mt-2 flex items-center justify-center gap-2">
        {Array.from({ length: cardCount }).map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              aria-label={`Go to review ${idx + 1}`}
              onClick={() => {
                const el = trackRef.current;
                if (!el) return;
                const { cardWidth, gap } = measureStep();
                el.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
                pauseFor(PAUSE_AFTER_INTERACTION_MS);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                isActive ? 'w-8 bg-ink' : 'w-1.5 bg-ink/30 hover:bg-ink/55'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
