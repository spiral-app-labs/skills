'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// Compact 2-column asymmetric hero.
// Left: H1 @ 80/80 (LH = font-size → tight "statement" feel, locked)
//       + subcopy + terracotta pill CTA + outline secondary.
// Right: 2-photo food split (stacked squares).
// Uses ~60-70vh not 100vh → menu visibility early-fold.
export function PlateHero() {
  const { headline, subcopy, cta, secondaryCta, photos } = content.hero;

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <h1 className="font-display text-hero-h1 font-medium text-ink whitespace-pre-line">
            {headline}
          </h1>
          <p className="mt-6 max-w-[46ch] text-body text-ink-muted">{subcopy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
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
      </div>
    </section>
  );
}
