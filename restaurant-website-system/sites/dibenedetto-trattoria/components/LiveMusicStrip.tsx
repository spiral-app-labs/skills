// LiveMusicStrip — DiBenedetto-specific improvement #1.
//
// The audit's #5 "why are we rebuilding it" item: live music + dancing on
// Wed / Fri / Sat is the load-bearing differentiator that's buried in nav
// on the current site. This strip surfaces the next 3 music nights with
// computed dates and a "Reserve for [day]" CTA per night.
//
// Behavior contract:
//   - On render, computes the next Wednesday, Friday, and Saturday from
//     today (America/Chicago).
//   - Each card shows day name, date (e.g. "Friday, May 9"), live-music
//     label, and a "Reserve" button that deep-links to the SpotHopper widget.
//   - Highlights the soonest night with the accent-warm rail.
//   - Reduced motion: skips the staggered reveal.

'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

type MusicNight = {
  weekday: 'Wednesday' | 'Friday' | 'Saturday';
  date: Date;
};

function nextMusicNights(): MusicNight[] {
  const targets: MusicNight['weekday'][] = ['Wednesday', 'Friday', 'Saturday'];
  const dayIndex = { Wednesday: 3, Friday: 5, Saturday: 6 };
  const now = new Date();
  // Anchor to start of today
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return targets
    .map((weekday) => {
      const target = dayIndex[weekday];
      const diff = (target - today.getDay() + 7) % 7;
      const date = new Date(today);
      date.setDate(today.getDate() + (diff === 0 ? 7 : diff));
      return { weekday, date };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function LiveMusicStrip() {
  const prefersReducedMotion = useReducedMotion();
  const nights = nextMusicNights();
  const reservationUrl = content.brand.reservationUrl;

  return (
    <section className="mx-auto max-w-shell px-4 pt-24 md:px-6">
      <div className="rounded-card border border-divider bg-surface/40 p-6 md:p-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
              This Week — Live Music + Dancing
            </p>
            <h3 className="mt-3 font-display text-[32px] leading-tight text-ink md:text-[40px]">
              A singer in the corner. Three nights a week.
            </h3>
            <p className="mt-3 max-w-prose font-body text-body-sm text-ink-muted">
              Music nights book up early. Pick a night and reserve the table you
              want.
            </p>
          </div>
        </div>

        <ul className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3">
          {nights.map((night, i) => (
            <motion.li
              key={night.weekday}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-card border bg-canvas p-5 transition-colors duration-300 hover:border-accent-warm/60 ${
                  i === 0 ? 'border-accent-warm/50' : 'border-divider'
                }`}
              >
                <p className="font-body text-chip uppercase tracking-[0.16em] text-accent-warm">
                  {i === 0 ? 'Soonest' : 'Live Music'}
                </p>
                <p className="mt-2 font-display text-[28px] leading-none text-ink">
                  {night.weekday}
                </p>
                <p className="mt-1 font-body text-body-sm text-ink-muted">
                  {formatDate(night.date)}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 font-body text-button text-ink transition-colors duration-300 group-hover:text-accent-warm">
                  Reserve for {night.weekday.slice(0, 3)}.
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>

        <p className="mt-6 font-body text-body-sm text-ink-quiet">
          Walk-ins welcome at the bar. For the dining room on a music night,
          reserving early is the move.
        </p>
      </div>
    </section>
  );
}
