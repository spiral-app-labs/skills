'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

/**
 * PolaroidStrip — scrapbook guest-photo strip.
 *
 * Horizontal row of polaroid-style photos with thin white borders,
 * slight rotations (±3-8°), partial horizontal bleed both ends.
 * Conveys "real people enjoy this place" warmer than a testimonial grid.
 *
 * Strong future shared candidate.
 */
export function PolaroidStrip() {
  const pol = theme.layout.polaroid;
  return (
    <section className="relative bg-bg-cream py-10 md:py-14 overflow-hidden">
      <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-5 px-5 md:flex md:items-center md:gap-10 md:px-10 md:overflow-visible md:justify-center">
        {content.polaroids.map((p, i) => (
          <motion.figure
            key={i}
            className={`flex-shrink-0 bg-white w-[calc((100vw-3.25rem)/2)] max-w-[168px] md:w-[220px] md:max-w-none lg:w-[260px] ${i > 3 ? 'hidden md:block' : ''}`}
            style={{
              padding: `${pol.borderWidth}px ${pol.borderWidth}px ${pol.borderBottom}px ${pol.borderWidth}px`,
              transform: `rotate(${p.rotation}deg)`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: theme.motion.easing, delay: i * 0.08 }}
            whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.25 } }}
          >
            <div
              className="relative flex w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.42),transparent_28%),linear-gradient(135deg,#4a1716_0%,#7f422d_46%,#172719_100%)] px-4 text-center"
              style={{ aspectRatio: pol.aspect }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(20,20,18,0.12),rgba(20,20,18,0.52))]" />
              <div className="relative space-y-3 text-text-cream">
                <p className="text-[11px] uppercase tracking-[0.22em] text-text-cream/72">Winestock moment</p>
                <p className="font-display text-[clamp(20px,5vw,34px)] leading-[0.95]" style={{ fontWeight: 300 }}>
                  {p.alt}
                </p>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
