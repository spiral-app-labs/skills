// PressStrip — DiBenedetto-specific improvement #3.
//
// The audit's #4 "why are we rebuilding it" item: 326 aggregated reviews
// and 4.5★ average across platforms — none of it appears on the current
// site. No press hits surfaced via WebSearch (Daily Herald, Crain's,
// Eater all silent for DiBenedetto), so the press strip surfaces
// AGGREGATOR scores instead of press logos. Continuous-scroll marquee
// pattern from restaurant-fork-improvement skill, doubled for seam-free
// loop. Hover-to-pause.

'use client';

const SOURCES = [
  { name: 'Tripadvisor', score: '#7 of 104 in Hoffman Estates', stars: '★★★★½' },
  { name: 'OpenTable', score: '4.6★ · 257 diners', stars: '★★★★★' },
  { name: 'Yelp', score: '4.5★ · 143 reviews', stars: '★★★★½' },
  { name: 'Google', score: '4.5★ · multi-year', stars: '★★★★½' },
  { name: 'Birdeye Aggregate', score: '326 reviews · 4.5★', stars: '★★★★½' },
  { name: 'Restaurantji', score: '4.5★ · 239 reviews', stars: '★★★★½' },
];

export function PressStrip() {
  // Duplicate to seam the loop visually
  const items = [...SOURCES, ...SOURCES];

  return (
    <section className="mx-auto mt-24 max-w-shell overflow-hidden px-0 md:px-6">
      <div className="border-y border-divider bg-canvas/60 py-6">
        <div className="flex items-center justify-between gap-4 px-6 pb-5">
          <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
            Earned, Not Said
          </p>
          <p className="hidden font-body text-body-sm text-ink-quiet md:block">
            Aggregated across the public review platforms guests actually use.
          </p>
        </div>

        <div className="group relative">
          <div
            className="flex w-max items-center gap-10 [animation:dbpressmarquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
            aria-hidden="true"
          >
            {items.map((src, i) => (
              <div
                key={`${src.name}-${i}`}
                className="flex shrink-0 items-center gap-3 px-1"
              >
                <span className="font-display text-[20px] italic text-accent-warm">
                  {src.name}
                </span>
                <span aria-hidden className="text-divider">·</span>
                <span className="font-body text-body-sm text-ink-muted">
                  {src.score}
                </span>
                <span className="font-body text-body-sm text-accent-warm/80">
                  {src.stars}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dbpressmarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
