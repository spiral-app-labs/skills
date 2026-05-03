// AnonReviewCarousel — auto-moving horizontal review marquee.
//
// Rule: NO NAMES, NO ATTRIBUTION. Verbatim quote + stars + source platform only.
// Names invite litigation, name-mining, and "is this review real?" friction.
// The proof is the quote + the platform; the reviewer's identity is never the
// pitch.
//
// Behavior contract (locked across the catalog — see
// ~/skills/restaurant-fork-improvement/SKILL.md Section 1.1):
//   - Continuous left-scroll marquee. NEVER pauses on its own.
//   - Hover-to-pause via CSS group-hover.
//   - Cards duplicated 2× in JSX so the loop seams visually with no jump.
//   - Card width: basis ~85% mobile / 42% tablet / 32% desktop.
//   - Pure CSS keyframes (no framer-motion whileInView — that fails to fire
//     reliably in some preview tooling and on slow mobile).
//   - prefers-reduced-motion: animation is paused entirely.
//   - Each card: ★★★★★ row + verbatim quote + small "Google Review" /
//     "OpenTable Review" / "Yelp Review" platform tag at the bottom.
//   - DO NOT render reviewer names, initials, avatars, or dates.

const REVIEWS = [
  {
    quote: "My first Asian BBQ and hot pot experience — amazing. A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything.",
    source: 'Google Review',
  },
  {
    quote: "The all-you-can-eat buffet had tons of options, from juicy meats to fresh veggies.",
    source: 'OpenTable Review',
  },
  {
    quote: "Great combination of Hot Pot and Korean BBQ — buffet of veggies and sauces, unlimited meat, attentive service.",
    source: 'Yelp Review',
  },
  {
    quote: "First time trying MAAX did not disappoint — ordered the traditional Szechuan spicy broth that was flavorful.",
    source: 'Google Review',
  },
  {
    quote: "The beef boneless short ribs are a favorite when it comes to BBQ, while malatang is recommended for the hot pot. The restaurant even has items like fries that kids love.",
    source: 'Google Review',
  },
  {
    quote: "Fresh and plentiful food and outstanding service make it a go-to recommendation.",
    source: 'OpenTable Review',
  },
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

export function AnonReviewCarousel() {
  // Duplicate so the loop seams visually with no jump.
  const items = [...REVIEWS, ...REVIEWS];

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

      <div className="group relative">
        {/* Edge fades so cards melt in/out of frame */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-dark to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-dark to-transparent md:w-32" />

        <ul
          className="flex w-max items-stretch gap-5 px-6 [animation:maaxreviewmarquee_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none] md:px-10"
          aria-label="Guest reviews — auto-scrolling carousel"
        >
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

      <style jsx>{`
        @keyframes maaxreviewmarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
