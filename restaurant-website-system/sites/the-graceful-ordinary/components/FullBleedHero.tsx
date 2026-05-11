'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * FullBleedHero — 1776's home hero archetype.
 *
 * Full-viewport background image + bottom-aligned italic-on-serif title +
 * eyebrow line + dual CTA + tiny address line.
 *
 * Cohesion-critical: dual CTAs (RESERVE + VIEW MENU) are part of the
 * warm-fine-dining register. Don't reduce to single CTA — that pushes the
 * template toward qitchen's ceremonial register and breaks the brand.
 */
export function FullBleedHero() {
  const h = content.hero;
  return (
    <section className="relative min-h-[620px] h-[92vh] md:h-screen md:min-h-[700px] w-full overflow-hidden">
      <Image
        src={h.image}
        alt="Plated dish with wine glasses"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Scrim — darkens bottom 60% for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(5,12,22,0.98) 0%, rgba(5,12,22,0.88) 38%, rgba(13,27,42,0.52) 70%, rgba(13,27,42,0.24) 100%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end pb-28 md:pb-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <motion.p
          className="text-eyebrow mb-4 max-w-[19rem] leading-6 tracking-[0.18em] sm:max-w-none sm:leading-[15px] sm:tracking-[3px]"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: theme.motion.easing, delay: 0.4 }}
        >
          {h.eyebrow}
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.6 }}
        >
          <DH
            content={h.heading}
            as="h1"
            size="page"
            italicColor={theme.color.accent}
            className="!text-text drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <motion.div
          className="mt-8 flex w-full max-w-[22rem] flex-col gap-3 sm:max-w-none sm:flex-row"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.9 }}
        >
          <Link
            href={h.primaryCta.href}
            className="w-full min-w-0 rounded-pill bg-accent px-6 py-3.5 text-center text-button text-surface transition-colors hover:bg-accent-hover sm:w-auto sm:px-7"
          >
            {h.primaryCta.label}
          </Link>
          <Link
            href={h.secondaryCta.href}
            className="w-full min-w-0 rounded-pill border border-text/40 px-6 py-3.5 text-center text-button text-text transition-colors hover:border-text/80 sm:w-auto sm:px-7"
          >
            {h.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.p
          className="mt-10 text-micro text-text/60"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {content.brand.addressFull} · {content.brand.phone}
        </motion.p>
      </div>
    </section>
  );
}
