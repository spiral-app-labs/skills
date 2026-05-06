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
    <section className="relative flex min-h-[640px] w-full items-end overflow-hidden pt-28 pb-20 sm:min-h-[720px] sm:pt-32 sm:pb-24 md:min-h-[700px] md:h-screen md:pt-36 md:pb-24">
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
            'linear-gradient(to top, rgba(5,12,22,0.96) 0%, rgba(5,12,22,0.78) 34%, rgba(13,27,42,0.36) 68%, rgba(13,27,42,0.12) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-5 md:px-12">
        <motion.p
          className="mb-3 max-w-[320px] text-eyebrow sm:mb-4 sm:max-w-none"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: theme.motion.easing, delay: 0.4 }}
        >
          {h.eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.6 }}
        >
          <DH
            content={h.heading}
            as="h1"
            size="page"
            italicColor={theme.color.accent}
            className="max-w-[10ch] !text-text sm:max-w-none"
          />
        </motion.div>

        <motion.div
          className="mt-6 flex max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.9 }}
        >
          <Link
            href={h.primaryCta.href}
            className="rounded-pill bg-accent px-6 py-3.5 text-center text-button text-surface transition-colors hover:bg-accent-hover"
          >
            {h.primaryCta.label}
          </Link>
          <Link
            href={h.secondaryCta.href}
            className="rounded-pill border border-text/40 px-6 py-3.5 text-center text-button text-text transition-colors hover:border-text/80"
          >
            {h.secondaryCta.label}
          </Link>
        </motion.div>

        <motion.p
          className="mt-8 max-w-[340px] text-[11px] uppercase tracking-[1.4px] text-text/70 sm:mt-10 sm:max-w-none sm:text-micro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {content.brand.addressFull} · {content.brand.phone}
        </motion.p>
      </div>
    </section>
  );
}
