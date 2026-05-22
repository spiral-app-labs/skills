'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * QuoteOnPhotoOverlay — full-width photo with centered overlaid italic quote.
 * Powerful break section between content blocks.
 */
export function QuoteOnPhotoOverlay({
  image = content.quoteOverlay.image,
  quote = content.quoteOverlay.quote,
  attribution = content.quoteOverlay.attribution,
}: {
  image?: string;
  quote?: string;
  attribution?: string;
} = {}) {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-canvas/55" />
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <blockquote
          className="font-display italic text-text max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.3 }}
        >
          "{quote}"
        </blockquote>
        {attribution && (
          <p className="mt-6 text-eyebrow">{attribution}</p>
        )}
      </motion.div>
    </section>
  );
}
