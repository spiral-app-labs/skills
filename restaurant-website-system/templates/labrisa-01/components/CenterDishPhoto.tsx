'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * CenterDishPhoto — a single wide hero-secondary photo with a small inset
 * illustration/card layered in front. Audit §3.5 — pause-beat between the
 * vignette strip and the service selector.
 */
export function CenterDishPhoto() {
  const { centerDish } = content;

  return (
    <section className="w-full bg-canvas pb-24 md:pb-32">
      <div className="max-w-shell mx-auto px-6 md:px-12 relative">
        <motion.div
          className="relative w-full aspect-[16/9] overflow-hidden"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.44, 0, 0.56, 1] }}
        >
          <Image
            src={centerDish.photo}
            alt={centerDish.alt}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute right-6 md:right-16 -bottom-6 md:-bottom-10 bg-canvas border border-hairline p-5 md:p-7 max-w-[280px] md:max-w-[340px] shadow-sm"
          initial={{ opacity: 0, y: 16, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1], delay: 0.2 }}
        >
          <p className="label-eyebrow text-ink-muted mb-2">Signature</p>
          <p className="font-display text-body text-ink">{centerDish.caption}</p>
        </motion.div>
      </div>
    </section>
  );
}
