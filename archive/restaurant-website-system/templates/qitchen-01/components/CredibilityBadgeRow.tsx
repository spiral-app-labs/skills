'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * CredibilityBadgeRow — 3-card credibility row used on About page.
 *
 * Each card: dark-elevated rectangle with N stars on top, award name,
 * descriptor below. Pattern observed in qitchen-01 §6 — strong shared
 * candidate after a 2nd template uses it.
 */
export function CredibilityBadgeRow() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {content.about.badges.map((b, i) => (
        <motion.div
          key={b.name}
          className="flex flex-col items-center gap-1.5 p-4 rounded-card bg-surface border border-border/50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: theme.motion.revealDuration,
            ease: theme.motion.easing,
            delay: i * 0.08,
          }}
        >
          <div className="flex gap-0.5 text-text" aria-label={`${b.stars} stars`}>
            {Array.from({ length: b.stars }).map((_, idx) => (
              <Star key={idx} />
            ))}
          </div>
          <h3 className="text-item-name text-text text-center">{b.name}</h3>
          <p className="text-ui-label text-text-muted">{b.descriptor}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Star() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 0.5l1.7 3.5 3.8.55-2.75 2.7.65 3.8L6 9.25 2.6 11.05l.65-3.8L0.5 4.55l3.8-.55L6 0.5z" />
    </svg>
  );
}
