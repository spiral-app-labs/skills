'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * BrandIllustrationLockup — hand-drawn "Bienvenue!" + sailboat SVG.
 *
 * Audit §6 + §11: first catalog template with illustrated brand iconography.
 * Inline SVG (not stocked) — forks swap their own monochrome cocoa line-work
 * for a different locus motif (anchor / olive branch / lighthouse / etc.).
 *
 * The sailboat below is authored as an inline SVG: hull (curved line), mast
 * (vertical line), two sails (triangular fills with `currentColor` = ink),
 * and a few waterline squiggles. Keeps simple — scales with viewport.
 */
export function BrandIllustrationLockup() {
  const { bienvenue } = content;

  return (
    <section className="w-full bg-canvas py-24 md:py-32">
      <div className="max-w-shell mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Circular dish photo */}
        <motion.div
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-12 border border-hairline"
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          <Image
            src={bienvenue.dishPhoto}
            alt={bienvenue.dishAlt}
            fill
            sizes="(min-width: 768px) 224px, 160px"
            className="object-cover"
          />
        </motion.div>

        <motion.p
          className="max-w-prose-editorial text-body text-ink mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
        >
          {bienvenue.body}
        </motion.p>

        {/* Sailboat SVG — inline, currentColor = ink. Forks can swap the path. */}
        <motion.svg
          viewBox="0 0 180 140"
          className="w-32 md:w-40 text-ink mb-6"
          initial={{ opacity: 0, y: 8, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1], delay: 0.1 }}
          aria-hidden="true"
        >
          {/* Mast */}
          <line x1="90" y1="10" x2="90" y2="95" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          {/* Main sail — larger triangle */}
          <path d="M 90 14 L 90 90 L 148 90 Z" fill="currentColor" opacity="0.88" />
          {/* Jib sail — smaller triangle */}
          <path d="M 90 26 L 90 90 L 52 90 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Hull — gentle curve */}
          <path d="M 38 94 Q 90 128 146 94" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 46 96 Q 90 116 140 96" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
          {/* Waterline squiggles */}
          <path d="M 14 118 Q 24 114 34 118 T 54 118" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
          <path d="M 130 122 Q 140 118 150 122 T 168 122" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
          <path d="M 60 128 Q 80 124 100 128 T 140 128" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          {/* Tiny pennant flag at mast top */}
          <path d="M 90 10 L 104 14 L 90 18 Z" fill="currentColor" opacity="0.8" />
        </motion.svg>

        <motion.h2
          className="script-caption text-ink text-[72px] md:text-[100px] leading-none"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.2 }}
        >
          {bienvenue.script}
        </motion.h2>
      </div>
    </section>
  );
}
