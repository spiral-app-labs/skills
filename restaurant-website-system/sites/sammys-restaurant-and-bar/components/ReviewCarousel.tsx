'use client';

import { useEffect, useRef, useState } from 'react';
import { content } from '../content.example';

// Horizontal scroll-snap carousel of verbatim Google reviews.
// Per restaurant-fork-improvement skill section 1.1 — the signature
// pattern for the v2 polish pass.
//
// Behavior contract:
//   - Auto-advances every 5.5s when in viewport, not hovered, not paused.
//   - Pauses on hover; pauses 9s after manual prev/next.
//   - Active card opacity-100 scale-100; inactive cards opacity-60 scale-97.
//   - Mobile: native swipe via snap-x snap-mandatory.
//   - Card width: basis-[85%] md:basis-[42%] lg:basis-[32%].

const STAR = (filled: boolean) => (filled ? '★' : '☆');

export function ReviewCarousel() {
  const { eyebrow, heading, sub, items } = content.reviews;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  // IntersectionObserver — only auto-advance when section visible
  useEffect(() => {
    const node = trackRef.current?.parentElement;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Track the most-visible card → activeIdx
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-review-card]'));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = cards.indexOf(visible[0].target as HTMLElement);
          if (idx >= 0) setActiveIdx(idx);
        }
      },
      { root: track, threshold: [0.4, 0.6, 0.8, 1] }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!inView || hovered || paused) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-review-card]'));
      const next = (activeIdx + 1) % cards.length;
      cards[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, 5500);
    return () => clearInterval(id);
  }, [inView, hovered, paused, activeIdx]);

  const goTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-review-card]'));
    cards[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setPaused(true);
    setTimeout(() => setPaused(false), 9000);
  };

  return (
    <section
      id="reviews"
      className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24 border-t border-divider"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-[68ch] mb-10 md:mb-14">
        <p className="text-eyebrow uppercase tracking-[0.16em] text-accent font-medium mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <p className="mt-4 text-body text-ink-muted">{sub}</p>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 md:-mx-10 px-5 md:px-10 scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {items.map((r, i) => (
          <article
            key={r.name + i}
            data-review-card
            className={`flex-none basis-[85%] md:basis-[42%] lg:basis-[32%] snap-start rounded-card bg-canvas-alt border border-divider p-6 md:p-7 transition-all duration-700 ease-out ${
              i === activeIdx ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.97]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-accent text-base tracking-wide" aria-label={`${r.rating} stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s}>{STAR(s < r.rating)}</span>
                ))}
              </span>
              <span className="text-body-sm text-ink-muted">{r.date}</span>
            </div>
            <p className="text-body text-ink leading-snug min-h-[8rem]">"{r.text}"</p>
            <div className="mt-5 pt-4 border-t border-divider flex items-center justify-between">
              <p className="text-body-sm font-medium text-ink">— {r.name}</p>
              {r.recommendedDish && (
                <p className="text-[11px] uppercase tracking-wide text-ink-muted text-right max-w-[60%] truncate">
                  Recs: {r.recommendedDish.split(',')[0]}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === activeIdx ? 'bg-accent w-6' : 'bg-divider w-2 hover:bg-ink-muted'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
