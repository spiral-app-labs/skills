'use client';

// AnonReviewCarousel — auto-scroll + user-drag-scroll horizontal review marquee.
//
// Rule: NO NAMES, NO ATTRIBUTION. Verbatim quote + stars + source platform only.
//
// Behavior contract (locked across the catalog — see
// ~/skills/restaurant-fork-improvement/SKILL.md Section 1.1):
//   - JS-driven auto-scroll: increments scrollLeft every animation frame at
//     ~60px/sec. Wraps seamlessly via the duplicate-track trick (when
//     scrollLeft passes half the track, jump back by half — invisible jump
//     because the second half of the track is identical to the first).
//   - User can drag/swipe horizontally at any time. On user interaction
//     (touchstart, mousedown, wheel, scroll-by-input), auto-scroll pauses
//     for 4 seconds, then resumes.
//   - Hover-to-pause on desktop (mouseenter/mouseleave).
//   - prefers-reduced-motion: auto-scroll disabled entirely; user can still
//     manually scroll.
//   - Each card: ★★★★★ + verbatim short quote + uppercase platform tag.
//   - Quotes capped at 8–18 words (use ellipsis to trim).
//   - DO NOT render reviewer names, initials, avatars, or dates.

import { useEffect, useRef } from 'react';

// Reviews are kept to 8–18 words each. Use ellipsis to trim mid-thought.
// Locked: see ~/skills/restaurant-fork-improvement/SKILL.md Section 1.1.
const REVIEWS = [
  { quote: "Family, friends, date night… honestly anything.", source: 'Google Review' },
  { quote: "Tons of options, from juicy meats to fresh veggies.", source: 'OpenTable Review' },
  { quote: "Unlimited meat, attentive service. A go-to.", source: 'Yelp Review' },
  { quote: "The Szechuan spicy broth was flavorful.", source: 'Google Review' },
  { quote: "Beef boneless short ribs are the BBQ favorite.", source: 'Google Review' },
  { quote: "Malatang is the hot pot you order.", source: 'Google Review' },
  { quote: "Fresh and plentiful. Outstanding service.", source: 'OpenTable Review' },
  { quote: "First time did not disappoint.", source: 'Google Review' },
  { quote: "Items like fries that kids love.", source: 'Google Review' },
];

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

const PIXELS_PER_SEC = 60;
const PAUSE_AFTER_INTERACTION_MS = 4000;

export function AnonReviewCarousel() {
  // Duplicate so the loop seams visually with no jump.
  const items = [...REVIEWS, ...REVIEWS];
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const userPauseUntilRef = useRef(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const tick = (now: number) => {
      const last = lastFrameRef.current ?? now;
      const dt = Math.min(0.1, (now - last) / 1000);
      lastFrameRef.current = now;
      const isUserPaused = now < userPauseUntilRef.current;
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
    raf = requestAnimationFrame(tick);

    // Pause briefly when the user actively interacts (drag, swipe, wheel).
    // No mouseenter pause — on bot/preview cursors that "hover" indefinitely
    // it locks the carousel; on real desktop the 4s interaction pause is
    // enough breathing room for users who scrolled to read.
    const bumpUserPause = () => { userPauseUntilRef.current = performance.now() + PAUSE_AFTER_INTERACTION_MS; };
    el.addEventListener('touchstart', bumpUserPause, { passive: true });
    el.addEventListener('pointerdown', bumpUserPause);
    el.addEventListener('wheel', bumpUserPause, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('touchstart', bumpUserPause);
      el.removeEventListener('pointerdown', bumpUserPause);
      el.removeEventListener('wheel', bumpUserPause);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex items-center gap-3 pb-10">
          <p className="font-body text-[12px] uppercase tracking-[0.18em] text-accent">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            What Guests Say
          </p>
          <p className="hidden font-body text-[13px] text-text-muted-light md:block">
            Verbatim from public reviews. Anonymized — only the quote + the platform.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades so cards melt in/out of frame */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-dark to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-dark to-transparent md:w-32" />

        <div
          ref={scrollerRef}
          className="no-scrollbar flex overflow-x-auto overscroll-x-contain"
          style={{ scrollbarWidth: 'none' }}
          aria-label="Guest reviews — drag or swipe to browse"
        >
          <ul className="flex w-max items-stretch gap-5 px-6 md:px-10">
            {items.map((r, i) => (
              <li
                key={`${r.source}-${i}`}
                className="flex w-[85vw] shrink-0 flex-col justify-between rounded-3xl border border-divider/40 bg-bg-dark/40 p-6 backdrop-blur-sm md:w-[440px] md:p-8"
              >
                <div>
                  <StarsRow />
                  <p className="mt-5 font-display text-[20px] leading-snug text-text-white md:text-[24px]">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
                <p className="mt-6 font-body text-[11px] uppercase tracking-[0.18em] text-accent">
                  {r.source}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
