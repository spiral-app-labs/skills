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
    <section className="bg-bg-cream px-6 py-12 md:py-16">
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-4"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: theme.motion.easing }}
      >
        <h2 className="font-display text-body-h3 text-text-dark" style={{ fontWeight: 300 }}>
          Good food + Good drinks + Good music = GREAT vibes.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {content.hours.map((h) => {
            const row = h as { day: string; time?: string; bar?: string; kitchen?: string };
            return (
              <div key={row.day} className="rounded-card border border-text-dark/12 bg-white/55 p-4 space-y-1">
                <p className="text-address text-text-dark">{row.day}</p>
                {row.time ? (
                  <p className="text-[18px] leading-relaxed text-text-muted">{row.time}</p>
                ) : (
                  <>
                    <p className="text-[18px] leading-relaxed text-text-muted">Bar: {row.bar}</p>
                    <p className="text-[18px] leading-relaxed text-text-muted">Kitchen: {row.kitchen}</p>
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
