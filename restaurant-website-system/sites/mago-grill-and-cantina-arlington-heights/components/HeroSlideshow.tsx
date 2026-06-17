'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

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
    <section className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-bg-dark">
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
            style={{ objectPosition: slides[i].objectPosition }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrims for wordmark, proof, and action legibility. */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/70 via-bg-dark/25 to-transparent" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(23,23,23,0.8) 0%, rgba(23,23,23,0.2) 60%, rgba(23,23,23,0.0) 100%)',
        }}
      />

      <div className="absolute left-6 right-6 top-24 md:left-10 md:right-auto md:top-28 md:max-w-xl">
        <div className="space-y-4 text-text-cream">
          <p className="text-address text-text-muted-cream">{content.hero.eyebrow}</p>
          <p className="max-w-lg font-display text-[24px] uppercase leading-tight md:text-tagline-h2" style={{ fontWeight: 300 }}>
            <span className="md:hidden">
              <span className="block">Tableside guacamole,</span>
              <span className="block">margaritas, moles, and</span>
              <span className="block">200-plus tequilas.</span>
            </span>
            <span className="hidden md:inline">{content.hero.line}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="max-w-full rounded-button border border-text-cream/35 bg-bg-dark/35 px-3 py-1.5 text-address break-words">
              {content.hero.proof}
            </span>
            <span className="max-w-full rounded-button border border-text-cream/35 bg-bg-dark/35 px-3 py-1.5 text-address break-words">
              <span className="md:hidden">Downtown Arlington Heights</span>
              <span className="hidden md:inline">{content.hero.location}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 space-y-5 md:bottom-10 md:left-10 md:right-10">
        <h1 className="font-display text-hero-wordmark leading-none text-text-cream" style={{ fontWeight: 300 }}>
          {content.brand.wordmark}
        </h1>
        <div className="hidden flex-wrap gap-3 md:flex">
          <a
            href={content.brand.reservationUrl}
            className="rounded-button bg-text-cream px-5 py-3 text-button text-text-dark transition-colors hover:bg-white"
          >
            Reserve
          </a>
          <a
            href={content.brand.orderUrl}
            className="rounded-button border border-text-cream/55 px-5 py-3 text-button text-text-cream transition-colors hover:bg-text-cream/10"
          >
            Order Online
          </a>
          <a
            href={content.brand.groupDiningUrl}
            className="rounded-button border border-text-cream/55 px-5 py-3 text-button text-text-cream transition-colors hover:bg-text-cream/10"
          >
            Group Dining
          </a>
        </div>
      </div>
    </section>
  );
}
