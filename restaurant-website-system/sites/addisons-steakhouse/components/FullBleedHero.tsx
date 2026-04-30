'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { DH } from './DisplayHeading';
import { LiveOpenStatus } from './LiveOpenStatus';
import { theme } from '../theme';
import { content } from '../content.example';
import type { HoursConfig } from '../lib/hours';

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
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.65], ['0%', '-12%']);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '7%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.46], [1, 0.72]);
  return (
    <section className="relative h-[calc(100svh-140px)] min-h-[640px] w-full overflow-hidden md:h-[calc(100vh-160px)] md:min-h-[700px]">
      <motion.div
        className="absolute inset-0"
        style={prefersReduced ? undefined : { y: imageY }}
      >
        <Image
          src={h.image}
          alt="Sliced steak on a board"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
      </motion.div>
      {/* Scrim — darkens bottom 60% for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.35) 35%, rgba(13,27,42,0.10) 60%, rgba(13,27,42,0.0) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-12 max-w-[1280px] mx-auto"
        style={prefersReduced ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="mb-6 flex w-fit items-center gap-3 rounded-pill border border-accent/35 bg-surface/80 px-4 py-2 text-body-sm text-text backdrop-blur"
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: theme.motion.easing, delay: 0.25 }}
        >
          <LiveOpenStatus
            hours={content.brand.hoursConfig as unknown as HoursConfig}
            variant="text"
          />
          <span className="hidden h-1 w-1 rounded-full bg-accent/50 sm:block" aria-hidden />
          <span className="hidden text-text-muted sm:inline">
            {content.brand.rating.stars.toFixed(1)} stars from local diners
          </span>
        </motion.div>

        <motion.p
          className="text-eyebrow mb-4"
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
            className="!text-text"
          />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.9 }}
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <Link
              href={h.primaryCta.href}
              className="block px-7 py-3.5 rounded-pill bg-accent hover:bg-accent-hover text-button text-surface shadow-[0_18px_44px_-24px_rgba(209,164,81,0.95)] transition-colors"
            >
              {h.primaryCta.label}
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <Link
              href={h.secondaryCta.href}
              className="block px-7 py-3.5 rounded-pill border border-text/40 hover:border-text/80 text-button text-text transition-colors"
            >
              {h.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-10 text-micro text-text/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {content.brand.addressFull} · {content.brand.phone}
        </motion.p>
      </motion.div>
    </section>
  );
}
