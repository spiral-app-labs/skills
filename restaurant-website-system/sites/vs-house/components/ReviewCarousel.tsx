// ReviewCarousel — horizontal scroll-snap carousel of verbatim Google + cross-platform reviews.
// Per ~/skills/restaurant-fork-improvement/SKILL.md §1.1.
//
// Behavior:
// - Auto-advances every 5.5s when in view + not hovered + not paused.
// - Pauses on hover; pauses 9s after manual prev/next/dot.
// - Active card: opacity 100 + scale 100 + accent border.
// - Inactive cards: opacity 60 + scale 0.97 + muted border.
// - Mobile: swipe via snap-x snap-mandatory. Desktop: chevrons + dots.
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { content } from '../content';

const ADVANCE_MS = 5500;
const PAUSE_MS = 9000;

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex gap-[2px] text-accent" aria-label={`${n} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
            fill="currentColor"
            opacity={i < n ? 1 : 0.25}
          />
        </svg>
      ))}
    </span>
  );
}

export function ReviewCarousel() {
  const reviews = content.reviews;
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return { cardWidth: 360, gap: 16 };
    const card = el.querySelector('[data-review-card]');
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth : 360;
    return { cardWidth, gap: 16 };
  }, []);

  const advance = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const { cardWidth, gap } = measure();
    if (dir === 1) {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) { el.scrollTo({ left: 0, behavior: 'smooth' }); return; }
    } else {
      const atStart = el.scrollLeft <= 4;
      if (atStart) { el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' }); return; }
    }
    el.scrollBy({ left: (cardWidth + gap) * dir, behavior: 'smooth' });
  }, [measure]);

  const pauseFor = useCallback((ms: number) => {
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => {
      setPaused(false);
      pauseTimer.current = null;
    }, ms);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.2 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || hovered || paused) return;
    const id = setInterval(() => advance(1), ADVANCE_MS);
    return () => clearInterval(id);
  }, [inView, hovered, paused, advance]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('[data-review-card]')) as HTMLElement[];
    const o = new IntersectionObserver(
      (entries) => {
        let bestEl: HTMLElement | null = null;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.intersectionRatio < 0.6) continue;
          if (e.intersectionRatio > bestRatio) {
            bestEl = e.target as HTMLElement;
            bestRatio = e.intersectionRatio;
          }
        }
        if (bestEl) {
          const idx = cards.indexOf(bestEl);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: el, threshold: [0.6, 0.75, 0.9] },
    );
    cards.forEach((c) => o.observe(c));
    return () => o.disconnect();
  }, []);

  useEffect(() => () => {
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
  }, []);

  const handle = (dir: 1 | -1) => {
    advance(dir);
    pauseFor(PAUSE_MS);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-bg-cream py-24 lg:py-32 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 mb-10 lg:mb-14 items-end">
          <div className="max-w-[680px]">
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              In their own words
            </p>
            <h2 className="font-display text-section-h2 text-text-dark leading-[1.05] tracking-tight">
              Five stars, said nine ways.
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-text-muted text-bodySm">
              <span><span className="font-display text-text-dark text-[18px]">4.4 ★</span> Google · 1,154</span>
              <span><span className="font-display text-text-dark text-[18px]">4.6 ★</span> OpenTable · 116</span>
              <span><span className="font-display text-text-dark text-[18px]">4.4 ★</span> Restaurantji · 316</span>
              <span><span className="font-display text-text-dark text-[18px]">4.0 ★</span> Yelp · 286</span>
            </div>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => handle(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-text-dark hover:border-accent hover:text-accent transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => handle(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-text-dark hover:border-accent hover:text-accent transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-5 lg:-mx-10 flex snap-x snap-mandatory gap-4 lg:gap-5 overflow-x-auto scroll-smooth px-5 lg:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={idx}
                data-review-card
                className={`snap-start shrink-0 basis-[88%] md:basis-[44%] lg:basis-[32%] bg-bg-white p-7 md:p-9 transform-gpu transition-[opacity,transform,border-color] duration-700 ease-out border ${
                  isActive
                    ? 'opacity-100 scale-100 border-accent/40 shadow-[0_24px_60px_-30px_rgba(200,67,28,0.35)]'
                    : 'opacity-60 scale-[0.97] border-border-light'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars n={r.stars} />
                  <span className="text-eyebrow text-text-muted tracking-widest font-body">{r.source}</span>
                </div>
                <blockquote className="font-display text-[22px] md:text-[24px] leading-[1.3] text-text-dark italic">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <footer className="mt-7 pt-5 border-t border-border-light flex items-center justify-between text-bodySm">
                  <span className="text-text-dark">{r.author}</span>
                  {r.date && <span className="text-text-muted">{r.date}</span>}
                </footer>
              </article>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {reviews.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Review ${idx + 1}`}
                onClick={() => {
                  const el = trackRef.current;
                  if (!el) return;
                  const { cardWidth, gap } = measure();
                  el.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
                  pauseFor(PAUSE_MS);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  isActive ? 'w-8 bg-accent' : 'w-1.5 bg-text-dark/30 hover:bg-text-dark/55'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
