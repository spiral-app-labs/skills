'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

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
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative bg-bg-cream py-16 md:py-20 overflow-hidden">
      <div className="flex items-center gap-6 md:gap-10 px-4 md:px-10 overflow-x-auto md:overflow-visible md:justify-center">
        {content.polaroids.map((p, i) => (
          <motion.figure
            key={i}
            className="flex-shrink-0 bg-white"
            style={{
              width: pol.width,
              padding: `${pol.borderWidth}px ${pol.borderWidth}px ${pol.borderBottom}px ${pol.borderWidth}px`,
              transform: `rotate(${p.rotation}deg)`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.92, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: theme.motion.easing, delay: prefersReducedMotion ? 0 : i * 0.08 }}
            whileHover={prefersReducedMotion ? undefined : { rotate: 0, scale: 1.025, transition: { duration: 0.35 } }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: pol.aspect }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
