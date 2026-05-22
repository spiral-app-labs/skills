'use client';

import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { content } from '../content';

const ADVANCE_INTERVAL_MS = 5500;
const PAUSE_AFTER_INTERACTION_MS = 9000;

function StarsRow({ rating = 5 }: { rating?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="15"
          height="15"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="text-maize"
        >
          <path
            d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
            fill="currentColor"
            opacity={index < rating ? 1 : 0.22}
          />
        </svg>
      ))}
    </span>
  );
}

export function ReviewCarousel() {
  const reviews = content.reviews;
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibilityRatiosRef = useRef<number[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const cardCount = reviews.items.length;

  const measureStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return { cardWidth: 360, gap: 12 };

    const card = track.querySelector('[data-review-card]');
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 360;
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 12;

    return { cardWidth, gap };
  }, []);

  const advance = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;

      const { cardWidth, gap } = measureStep();
      const step = (cardWidth + gap) * direction;
      const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth';

      if (direction === 1 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
        track.scrollTo({ left: 0, behavior });
        return;
      }

      if (direction === -1 && track.scrollLeft <= 4) {
        track.scrollTo({ left: track.scrollWidth, behavior });
        return;
      }

      track.scrollBy({ left: step, behavior });
    },
    [measureStep, reduce],
  );

  const pauseFor = useCallback((ms: number) => {
    setManualPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    pauseTimeoutRef.current = setTimeout(() => {
      setManualPaused(false);
      pauseTimeoutRef.current = null;
    }, ms);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !inView || hovered || manualPaused) return undefined;

    const id = window.setInterval(() => advance(1), ADVANCE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, hovered, inView, manualPaused, reduce]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const cards = Array.from(track.querySelectorAll('[data-review-card]')) as HTMLElement[];
    visibilityRatiosRef.current = new Array(cards.length).fill(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target as HTMLElement);
          if (index !== -1) visibilityRatiosRef.current[index] = entry.intersectionRatio;
        });

        const nextActive = visibilityRatiosRef.current.reduce(
          (best, ratio, index, ratios) => (ratio > ratios[best] ? index : best),
          0,
        );

        setActiveIndex(nextActive);
      },
      {
        root: track,
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 0.9, 1],
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    },
    [],
  );

  const handleManualAdvance = useCallback(
    (direction: 1 | -1) => {
      advance(direction);
      pauseFor(PAUSE_AFTER_INTERACTION_MS);
    },
    [advance, pauseFor],
  );

  const jumpToReview = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const { cardWidth, gap } = measureStep();
      track.scrollTo({ left: index * (cardWidth + gap), behavior: reduce ? 'auto' : 'smooth' });
      pauseFor(PAUSE_AFTER_INTERACTION_MS);
    },
    [measureStep, pauseFor, reduce],
  );

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="overflow-hidden bg-night py-20 text-paper md:py-28"
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto max-w-page px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-maize">{reviews.eyebrow}</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(34px,8.8vw,68px)] font-semibold leading-[0.98]">
              {reviews.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-md text-base leading-7 text-paper/62 md:text-right">{reviews.aggregate}</p>
            <div className="hidden gap-2 md:flex" aria-label="Review carousel controls">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => handleManualAdvance(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/18 text-paper transition hover:border-maize hover:text-maize focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-night"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => handleManualAdvance(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/18 text-paper transition hover:border-maize hover:text-maize focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-night"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-7 md:-mx-8 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.items.map((review, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={review.text}
                data-review-card
                className={`shrink-0 snap-start basis-[85%] rounded-card border bg-paper/[0.08] p-5 transition-[border-color,box-shadow,opacity,transform] duration-700 ease-out md:basis-[42%] md:p-7 lg:basis-[32%] ${
                  isActive
                    ? 'scale-100 border-maize/45 opacity-100 shadow-[0_24px_70px_rgba(213,167,64,0.16)] animate-review-glow'
                    : 'scale-[0.97] border-paper/12 opacity-60'
                }`}
              >
                <StarsRow rating={review.rating} />
                <blockquote className="mt-5 font-display text-[24px] leading-[1.2] text-paper md:text-[27px]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-paper/12 pt-4">
                  <p className="text-xs font-semibold uppercase text-maize">{review.theme}</p>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="mt-1 flex items-center justify-center gap-2">
          {Array.from({ length: cardCount }).map((_, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to review ${index + 1}`}
                onClick={() => jumpToReview(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-night ${
                  isActive ? 'w-8 bg-maize' : 'w-1.5 bg-paper/30 hover:bg-paper/60'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
