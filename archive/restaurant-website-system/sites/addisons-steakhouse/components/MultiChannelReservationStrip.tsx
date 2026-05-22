'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * MultiChannelReservationStrip — dual-CTA reservation surface (OpenTable + Call).
 *
 * Acknowledges that older / spontaneous / large-party diners call instead of
 * book online. Most fine-dining sites force OpenTable-only and lose those
 * bookings. This pattern is a strong shared candidate.
 */
export function MultiChannelReservationStrip() {
  const r = content.reservationStrip;
  const h = content.brand.hours;
  const prefersReduced = useReducedMotion();
  return (
    <section className="px-6 md:px-12 py-20 md:py-24 max-w-[1280px] mx-auto">
      <motion.div
        className="relative overflow-hidden rounded-card border border-accent/20 bg-surface px-6 py-14 text-center shadow-[0_22px_90px_-70px_rgba(0,0,0,1)] md:px-12 md:py-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          animate={prefersReduced ? undefined : { opacity: [0.35, 0.75, 0.35], scale: [0.94, 1.08, 0.94] }}
          transition={prefersReduced ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 space-y-6">
          <p className="text-eyebrow">{r.eyebrow}</p>
          <DH content={r.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />

          <div className="space-y-1.5 pt-2">
            {h.filter(h => h.time !== 'Closed').map(h => (
              <p key={h.days} className="text-body text-text-muted">
                {h.days} · {h.time}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
              <Link
                href={r.primaryCta.href}
                className="block px-7 py-3.5 rounded-pill bg-accent hover:bg-accent-hover text-button text-surface transition-colors"
              >
                {r.primaryCta.label}
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
              <Link
                href={r.secondaryCta.href}
                className="block px-7 py-3.5 rounded-pill border border-text/40 hover:border-text/80 text-button text-text transition-colors"
              >
                {r.secondaryCta.label}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
