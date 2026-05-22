'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
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
  const [docVisible, setDocVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !docVisible) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), theme.layout.slideshow.intervalMs);
    return () => clearInterval(t);
  }, [docVisible, prefersReducedMotion, slides.length]);

  useEffect(() => {
    const onVisibility = () => setDocVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    setDocVisible(!document.hidden);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const container: Variants = prefersReducedMotion
    ? { visible: { opacity: 1, y: 0 } }
    : {
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.35,
            ease: theme.motion.easing,
            delayChildren: 0.2,
            staggerChildren: 0.13,
          },
        },
      };

  const child: Variants = prefersReducedMotion
    ? { visible: { opacity: 1, y: 0 } }
    : {
        visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: theme.motion.easing } },
      };

  return (
    <section className="relative w-full h-[94vh] min-h-[640px] overflow-hidden overflow-x-hidden bg-bg-dark">
      {/* Cycling images */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: theme.layout.slideshow.transitionMs / 1000, ease: 'easeInOut' }}
        >
          <div className={`relative h-full w-full ${!prefersReducedMotion && docVisible ? 'animate-vp-ken-burns' : ''}`}>
            <Image
              src={slides[i].src}
              alt={slides[i].alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
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
      <motion.div
        className="absolute inset-x-0 bottom-0 pb-8 md:pb-10 px-6 flex flex-col items-center justify-end gap-6"
        initial={false}
        animate="visible"
        variants={container}
      >
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <motion.p variants={child} className="text-address text-text-cream/85">{content.brand.tagline}</motion.p>
          <motion.div variants={child} className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={content.brand.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button px-5 py-3 rounded-button bg-text-cream text-text-dark hover:bg-white text-button"
            >
              Reserve
            </a>
            <a
              href={content.brand.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button px-5 py-3 rounded-button border border-text-cream/60 text-text-cream hover:bg-text-cream/10 text-button"
            >
              Order on Toast
            </a>
            <a
              href={content.brand.menuUrl}
              className="vp-soft-button px-5 py-3 rounded-button border border-text-cream/40 text-text-cream hover:bg-text-cream/10 text-button"
            >
              View Menus
            </a>
          </motion.div>
          <motion.p
            variants={child}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-text-cream/70"
          >
            {content.proof.map((item, idx) => (
              <span key={item} className="flex items-center gap-x-3">
                {idx > 0 && <span aria-hidden className="text-text-cream/40">·</span>}
                <span>{item}</span>
              </span>
            ))}
          </motion.p>
        </div>
        <motion.h1
          variants={child}
          className="font-display text-text-cream text-hero-wordmark text-center leading-none"
          style={{ fontWeight: 300 }}
        >
          {content.brand.wordmark}
        </motion.h1>
      </motion.div>
    </section>
  );
}
