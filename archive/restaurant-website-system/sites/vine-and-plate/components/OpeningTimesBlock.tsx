'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * OpeningTimesBlock — centered day-by-day schedule with BAR/KITCHEN split.
 *
 * Essential for bar-forward venues: shows when each service is open.
 * Two lines per day when applicable.
 */
export function OpeningTimesBlock() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bg-cream py-16 md:py-20 px-6">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-4"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.96, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: theme.motion.easing }}
      >
        <h2 className="font-display text-body-h3 text-text-dark" style={{ fontWeight: 300 }}>
          Open for lunch, dinner, wine nights, and the easy bottle to bring home.
        </h2>
        <div className="mt-8 space-y-4">
          {content.hours.map((h) => {
            const row = h as { day: string; time?: string; room?: string; kitchen?: string };
            return (
              <div key={row.day} className="space-y-0.5">
                <p className="text-address text-text-dark">{row.day}</p>
                {row.time ? (
                  <p className="text-body text-text-muted">{row.time}</p>
                ) : (
                  <>
                    <p className="text-body text-text-muted">Dining room: {row.room}</p>
                    <p className="text-body text-text-muted">Kitchen: {row.kitchen}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
