'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * MultiChannelReservationStrip — dual-CTA reservation surface (Reservation + Call).
 *
 * Acknowledges that older / spontaneous / large-party diners call instead of
 * book online. Most fine-dining sites force provider-only and lose those
 * bookings. This pattern is a strong shared candidate.
 */
export function MultiChannelReservationStrip() {
  const r = content.reservationStrip;
  const h = content.brand.hours;
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-12 md:py-20">
      <motion.div
        className="rounded-[28px] border border-border/40 bg-surface px-5 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.18)] space-y-6 md:px-10"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <p className="text-eyebrow">{r.eyebrow}</p>
        <DH content={r.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />

        <div className="space-y-1.5 pt-2">
          {h.filter(h => h.time !== 'Closed').map(h => (
            <p key={h.days} className="text-body-sm md:text-body text-text/75">
              {h.days} · {h.time}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href={r.primaryCta.href}
            className="px-7 py-3.5 rounded-pill bg-accent hover:bg-accent-hover text-button text-canvas transition-colors"
          >
            {r.primaryCta.label}
          </Link>
          <Link
            href={r.secondaryCta.href}
            className="px-7 py-3.5 rounded-pill border border-text/40 hover:border-text/80 text-button text-text transition-colors"
          >
            {r.secondaryCta.label}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
