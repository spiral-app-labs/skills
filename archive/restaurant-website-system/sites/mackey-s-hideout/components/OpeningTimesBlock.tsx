'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

/**
 * OpeningTimesBlock — centered day-by-day schedule with BAR/KITCHEN split.
 *
 * Essential for bar-forward venues: shows when each service is open.
 * Two lines per day when applicable.
 */
export function OpeningTimesBlock() {
  return (
    <section className="bg-bg-cream py-16 md:py-20 px-6">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: theme.motion.easing }}
      >
        <h2 className="font-display text-body-h3 text-text-dark" style={{ fontWeight: 300 }}>
          {content.hoursHeading}
        </h2>
        <div className="mt-8 space-y-4">
          {content.hours.map((row) => {
            return (
              <div key={row.day} className="space-y-0.5">
                <p className="text-address text-text-dark">{row.day}</p>
                <p className="text-body text-text-muted">{row.time}</p>
                <p className="text-body-sm text-text-muted">{row.note}</p>
              </div>
            );
          })}
        </div>
        <p className="pt-5 text-body-sm text-text-muted">{content.hoursSourceNote}</p>
      </motion.div>
    </section>
  );
}
