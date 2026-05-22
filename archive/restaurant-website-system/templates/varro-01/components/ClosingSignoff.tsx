'use client';
// ClosingSignoff — 4-point sand sparkle + centered two-line display phrase.
// Brand-close moment before footer.

import { motion } from 'framer-motion';
import { content } from '../content.example';

export function ClosingSignoff() {
  const { ornament, line1, line2 } = content.closing;

  return (
    <section className="py-28 lg:py-44 px-5 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="text-center flex flex-col items-center"
      >
        {ornament && (
          <span
            aria-hidden
            className="text-accent text-4xl mb-8"
            style={{ transform: 'rotate(0deg)' }}
          >
            ✦
          </span>
        )}
        <h2 className="font-display text-section-h2 text-ink leading-[0.95]">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
        </h2>
      </motion.div>
    </section>
  );
}
