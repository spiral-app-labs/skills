'use client';

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
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), theme.layout.slideshow.intervalMs);
    return () => clearInterval(t);
  }, [slides.length]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setHeroOffset(window.scrollY * 0.12);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-bg-dark">
      {/* Cycling images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-x-0 -top-20 -bottom-20"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: theme.layout.slideshow.transitionMs / 1000, ease: 'easeInOut' }}
          style={{ y: heroOffset }}
        >
          <img
            src={slides[i].src}
            alt={slides[i].alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: slides[i].position }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom scrim for wordmark legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(24,17,13,0.86) 0%, rgba(24,17,13,0.36) 58%, rgba(24,17,13,0.08) 100%)',
        }}
      />

      {/* Static wordmark overlay */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-24 md:px-10 md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-address text-text-cream/80">
            {content.hero.localLine}
          </p>
          <h1
            className="font-display text-text-cream text-hero-wordmark text-center leading-none"
            style={{ fontWeight: 300 }}
          >
            {content.brand.wordmark}
          </h1>
          <p className="max-w-3xl text-body text-text-cream/85 md:text-lg md:leading-7">
            {content.hero.proofLine}
          </p>
        </div>
      </div>
    </section>
  );
}
