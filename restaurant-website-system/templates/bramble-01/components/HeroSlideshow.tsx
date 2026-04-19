'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * HeroSlideshow — bramble's signature primitive.
 *
 * Cycling full-viewport hero images with STATIC wordmark overlay.
 * The wordmark persists across every frame — identity-constant,
 * content-rotating. Brilliant for multi-concept venues.
 *
 * Strong future shared candidate — evaluate after 4th template uses this pattern.
 */
export function HeroSlideshow() {
  const slides = content.hero.slides;
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), theme.layout.slideshow.intervalMs);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-bg-dark">
      {/* Cycling images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: theme.layout.slideshow.transitionMs / 1000, ease: 'easeInOut' }}
        >
          <Image
            src={slides[i].src}
            alt={slides[i].alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom scrim for wordmark legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(23,23,23,0.8) 0%, rgba(23,23,23,0.2) 60%, rgba(23,23,23,0.0) 100%)',
        }}
      />

      {/* Static wordmark overlay */}
      <div className="absolute inset-x-0 bottom-0 pb-8 md:pb-10 px-6 flex items-end justify-center">
        <h1
          className="font-display text-text-cream text-hero-wordmark text-center leading-none"
          style={{ fontWeight: 300 }}
        >
          {content.brand.wordmark}
        </h1>
      </div>
    </section>
  );
}
