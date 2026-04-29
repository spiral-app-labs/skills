'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * HeroPhotoCarousel - manual controls plus a soft ambient auto-cycle.
 * Center-dominant layout: active photo is larger/centered, neighbor photos
 * partial-bleed on edges. Chevrons advance by one.
 *
 * Promotion candidate: after bramble's HeroSlideshow, unify as <HeroPhotos
 * mode="slideshow"|"carousel"|"strip"> — see audit §11.
 */

type Photo = { src: string; alt: string };

export function HeroPhotoCarousel({ photos }: { photos: Photo[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx((i) => (i + 1) % photos.length);

  useEffect(() => {
    if (prefersReducedMotion || paused || photos.length < 2) return undefined;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % photos.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, photos.length, prefersReducedMotion]);

  const leftI = (idx - 1 + photos.length) % photos.length;
  const rightI = (idx + 1) % photos.length;

  return (
    <div
      className="relative w-full max-w-page mx-auto px-5 md:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex items-center justify-center gap-3 md:gap-6 h-[360px] md:h-[480px]">
        {/* Left partial */}
        <div className="hidden md:block relative flex-1 h-full rounded-photo overflow-hidden opacity-70">
          <Image
            src={photos[leftI].src}
            alt={photos[leftI].alt}
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
        {/* Center dominant */}
        <div className="relative h-full w-full md:w-[560px] rounded-photo overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={photos[idx].src}
                alt={photos[idx].alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Right partial */}
        <div className="hidden md:block relative flex-1 h-full rounded-photo overflow-hidden opacity-70">
          <Image
            src={photos[rightI].src}
            alt={photos[rightI].alt}
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Chevron controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-pill bg-canvas border border-chip-border flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-card hover:shadow-md"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-pill bg-canvas border border-chip-border flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-card hover:shadow-md"
      >
        <Chevron dir="right" />
      </button>
    </div>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink">
      {dir === 'left' ? (
        <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
