'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// Sammy's hero — fork of plate-01.
//
// Mobile fixes (audit-driven, 2026-05-02):
//   - h1 size on mobile drops from 48px → 36px so "Sammy's Restaurant & Bar"
//     fits on 2 lines on iPhone 13 (was wrapping to 3-4).
//   - eyebrow tracking reduced on mobile (0.16em → 0.06em) so the dot-
//     separated string fits on 2 clean lines instead of breaking "ON" from
//     "500+".
//   - eyebrow split into 2 spans so the line break lands at the natural
//     "EVERY DAY · " boundary, not mid-clause.
//   - hero photos hide on mobile (was a tight 2-col grid below the CTAs
//     that pushed the whole flow off the fold). Photos return at md+.
export function PlateHero() {
  const { wordmark, eyebrow, sub, cta, secondaryCta, photos } = content.hero;

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-10 md:pt-20 pb-12 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <p className="uppercase text-[11px] md:text-eyebrow tracking-[0.06em] md:tracking-[0.16em] text-accent font-medium mb-4 leading-snug">
            <span>HUNTLEY · 8 AM – 2 AM · EVERY DAY</span>{' '}
            <span className="block md:inline">4.5★ on 500+ Google reviews</span>
          </p>
          <h1 className="font-display font-medium text-ink leading-[0.95] text-[36px] sm:text-[44px] md:text-hero-h1">
            {wordmark}
          </h1>
          <p className="mt-5 md:mt-6 max-w-[52ch] text-body text-ink-muted">{sub}</p>
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors text-center whitespace-nowrap"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors text-center whitespace-nowrap"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, delay: 0.12, ease: theme.motion.easing }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className={`aspect-[3/4] overflow-hidden rounded-card bg-canvas-alt ${i === 0 ? 'translate-y-8' : ''}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Mobile-only single-image strip below CTAs — keeps photo presence
            without crowding the fold. */}
        <motion.div
          className="md:hidden -mx-5 mt-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, delay: 0.15, ease: theme.motion.easing }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-[260px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
