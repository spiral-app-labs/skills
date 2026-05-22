'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

const actions = [
  {
    label: 'Order online',
    href: 'https://www.tekkasushiil.com/',
    detail: 'Use Tekka’s public ordering path for takeout and delivery.',
  },
  {
    label: 'Call to reserve',
    href: 'tel:+12248757188',
    detail: 'Reservations and special requests are handled by phone.',
  },
  {
    label: 'Get directions',
    href: 'https://www.google.com/maps/place/Tekka+Sushi/@42.0051768,-88.0067056,17z/',
    detail: '84 Biesterfield Rd, Elk Grove Village, IL 60007.',
  },
];

/**
 * Truthful visit/order panel for Tekka.
 *
 * The base Qitchen template ships a non-functional reservation form. Tekka's
 * owned site says reservations are handled by phone, so this fork replaces the
 * fake form with real handoff actions.
 */
export function ReservationFormPanel() {
  return (
    <motion.div
      className="px-8 md:px-10 py-12 md:py-16 space-y-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration,
        ease: theme.motion.easing,
        delay: theme.motion.revealStagger * 2,
      }}
    >
      <header className="text-center space-y-3">
        <div className="flex items-center justify-center gap-4">
          <span className="block w-8 h-px bg-text-muted/40" />
          <h2 className="text-section-h2 text-text">{content.reservation.headline}</h2>
          <span className="block w-8 h-px bg-text-muted/40" />
        </div>
        <p className="text-body text-text-muted max-w-sm mx-auto">{content.reservation.intro}</p>
      </header>

      <div className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="group rounded-card border border-border/50 bg-surface p-5 hover:bg-surface-hover transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-item-name text-text">{action.label}</h3>
                <p className="mt-1 text-body text-text-muted">{action.detail}</p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 text-text group-hover:border-text/50">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-card border border-border/50 bg-canvas/70 p-5 space-y-2">
        <p className="text-ui-label text-text-muted">Before you visit</p>
        <p className="text-body text-text-muted">
          Hours are mirrored from Tekka’s owned reservation page and public listing evidence.
          Call to confirm holiday hours or last-call timing.
        </p>
      </div>
    </motion.div>
  );
}
