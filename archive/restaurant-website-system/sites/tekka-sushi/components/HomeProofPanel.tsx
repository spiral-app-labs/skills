'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

const actions = [
  { label: 'Order Online', href: 'https://www.tekkasushiil.com/' },
  { label: 'Call', href: 'tel:+12248757188' },
  { label: 'Directions', href: 'https://www.google.com/maps/place/Tekka+Sushi/@42.0051768,-88.0067056,17z/' },
];

const proof = [
  { value: '4.8', label: 'Google rating' },
  { value: '370', label: 'Google reviews' },
  { value: '$20–30', label: 'per person' },
];

/**
 * Tekka-specific proof/conversion panel.
 *
 * Qitchen's original home page is intentionally sparse. Tekka is a local
 * sushi spot with order/takeout/delivery demand, so the fork needs one compact
 * trust-and-action layer before customers have to click deeper.
 */
export function HomeProofPanel() {
  return (
    <motion.section
      className="px-4 md:px-6 pb-6 space-y-5"
      initial={{ opacity: 0, y: theme.motion.revealLift }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration,
        ease: theme.motion.easing,
        delay: theme.motion.revealStagger * 5,
      }}
    >
      <div className="rounded-card border border-border/50 bg-surface/55 p-5 space-y-4">
        <p className="text-ui-label text-text-muted">Dine-in • Takeout • Delivery</p>
        <h2 className="text-section-h2 text-text">Fresh rolls, ramen, and easy ordering</h2>
        <p className="text-body text-text-muted">
          Review evidence points to the same strengths customers should see first:
          fresh sushi and sashimi, beautiful presentation, a modern room, and
          friendly service in Elk Grove Village.
        </p>

        <div className="grid grid-cols-3 gap-2">
          {proof.map((item) => (
            <div key={item.label} className="rounded-field border border-border/50 bg-canvas/55 px-3 py-3">
              <div className="font-display text-2xl text-text leading-none">{item.value}</div>
              <div className="mt-1 text-ui-label text-text-muted">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="rounded-pill border border-border/70 bg-surface-hover px-4 py-3 text-center text-ui-label text-text hover:bg-border transition-colors"
            >
              {action.label}
            </Link>
          ))}
        </div>

        <p className="text-body text-text-muted">
          {content.brand.address.line1}, {content.brand.address.line2} • (224) 875-7188
        </p>
      </div>
    </motion.section>
  );
}
