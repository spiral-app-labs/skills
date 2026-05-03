// SisterVenues \u2014 slim cross-link module for the Cucina Bella family of
// restaurants (Algonquin, Galena, Bella's Woodfire). Mirrors the existing
// pattern across the three sites where each surfaces a button to the others.
// Intentionally low visual weight so it doesn't dilute the hero.
//
// Animation #8: rail-and-arrow hover micro-interaction. On hover, the
// venue's name gets an animated underline rail that grows left-to-right,
// the city subtitle brightens, and the arrow extends + slides into a
// pointing motion. Not a full button morph \u2014 the link still reads as text;
// the motion just rewards the cursor hovering.
'use client';

import Link from 'next/link';
import { content } from '../content.example';

export function SisterVenues() {
  const venues = content.brand.sisterVenues ?? [];
  if (venues.length === 0) return null;

  return (
    <section className="mx-auto max-w-shell px-4 pt-24 md:px-6">
      <div className="rounded-card border border-divider bg-surface/40 p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-md">
            <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
              The Family
            </p>
            <h3 className="mt-3 font-display text-[28px] leading-tight text-ink">
              Three kitchens. One Sannicandro recipe book.
            </h3>
            <p className="mt-3 font-body text-body-sm text-ink-muted">
              The Cucina Bella family runs sister restaurants nearby. Same
              family, same red sauce, different rooms.
            </p>
          </div>
          <ul className="flex flex-col gap-3 md:items-end">
            {venues.map((v) => (
              <li key={v.url}>
                <Link
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-3 font-body text-body text-ink transition-colors duration-300 hover:text-accent-warm motion-reduce:transition-none"
                >
                  {/* Name with growing underline rail */}
                  <span className="relative font-display text-[20px] leading-none">
                    {v.name}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent-warm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                  </span>
                  <span className="font-body text-body-sm text-ink-muted transition-colors duration-300 group-hover:text-ink motion-reduce:transition-none">
                    {v.city}
                  </span>
                  {/* Arrow that extends and slides forward */}
                  <span
                    aria-hidden="true"
                    className="relative inline-flex h-[1em] w-[1.2em] items-center text-ink-quiet transition-colors duration-300 group-hover:text-accent-warm motion-reduce:transition-none"
                  >
                    {/* The trailing rail line that grows from 0 to full width */}
                    <span className="absolute left-0 top-1/2 h-px w-full origin-left scale-x-0 -translate-y-1/2 bg-accent-warm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none" />
                    {/* The arrowhead */}
                    <span className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 motion-reduce:transition-none">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
