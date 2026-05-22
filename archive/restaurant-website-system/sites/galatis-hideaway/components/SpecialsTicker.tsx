// SpecialsTicker — single-row marquee of nightly specials.
// Wraps the unused `animate-marquee-x` keyframe defined in tailwind.config.ts.
// Renders the items twice in a row so the -50% translate loops seamlessly.
// Pause on hover; respect prefers-reduced-motion (renders static comma list).
'use client';

import { useReducedMotion } from 'framer-motion';

const items = [
  'MON · ½-price pizza',
  'TUE · $3 tacos',
  'WED · ½-price wines',
  'THU · $10 burger night',
  'FRI · fish & chips',
  'SAT · chicken vesuvio',
  'SUN · stuffed shells',
  'EVERY NIGHT · drink specials',
];

export function SpecialsTicker() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section
        aria-label="Nightly specials"
        className="bg-accent text-text-on-brand border-y border-black/10"
      >
        <div className="max-w-content mx-auto px-5 md:px-10 py-3 text-body-sm font-extrabold tracking-wide text-center">
          {items.join(' · ')}
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Nightly specials"
      className="bg-accent text-text-on-brand border-y border-black/10 overflow-hidden group"
    >
      <div
        className="flex w-max animate-marquee-x [animation-play-state:running] group-hover:[animation-play-state:paused] py-3"
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-8 pr-8 text-body-sm font-extrabold tracking-wide whitespace-nowrap"
          >
            {items.map((label, i) => (
              <li key={i} className="flex items-center gap-8">
                <span>{label}</span>
                <span aria-hidden className="opacity-50">★</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
