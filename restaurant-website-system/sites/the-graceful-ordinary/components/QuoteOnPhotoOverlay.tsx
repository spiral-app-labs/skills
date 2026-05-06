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
    <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden md:h-[52vh] md:min-h-[400px]">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-canvas/65 md:bg-canvas/55" />
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <blockquote
          className="font-display italic text-text max-w-3xl"
          style={{ fontSize: 'clamp(24px, 8vw, 44px)', lineHeight: 1.25 }}
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
