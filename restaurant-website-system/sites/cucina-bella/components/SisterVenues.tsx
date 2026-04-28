// SisterVenues \u2014 slim cross-link module for the Cucina Bella family of
// restaurants (Algonquin, Galena, Bella's Woodfire). Mirrors the existing
// pattern across the three sites where each surfaces a button to the others.
// Intentionally low visual weight so it doesn't dilute the hero.

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
                  className="group inline-flex items-baseline gap-3 font-body text-body text-ink transition-colors hover:text-accent-warm"
                >
                  <span className="font-display text-[20px] leading-none">
                    {v.name}
                  </span>
                  <span className="font-body text-body-sm text-ink-muted">
                    {v.city}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-body text-body-sm text-ink-quiet transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
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
