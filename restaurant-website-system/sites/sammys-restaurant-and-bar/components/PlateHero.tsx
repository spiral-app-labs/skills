'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// Sammy's hero — fork of plate-01.
//
// 2026-05-02 polish pass:
//   - Rounded image corners bumped (rounded-image = 24px)
//   - Subtle parallax on hero photo collage (scrollY * 0.18) for "alive" feel
//   - Lift + tilt entrance on the photo collage
//   - Mobile breakpoints retained from earlier mobile fix pass
export function PlateHero() {
  const { wordmark, eyebrow, sub, cta, secondaryCta, photos } = content.hero;
  const reduced = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  const parallax = reduced ? 0 : Math.min(scrollY * 0.18, 80);

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-10 md:pt-20 pb-12 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase text-[11px] md:text-eyebrow tracking-[0.06em] md:tracking-[0.16em] text-accent font-medium mb-4 leading-snug">
            <span>HUNTLEY · 8 AM – 2 AM · EVERY DAY</span>{' '}
            <span className="block md:inline">4.5★ on 500+ Google reviews</span>
          </p>
          <motion.h1
            className="font-display font-medium text-ink leading-[0.95] text-[36px] sm:text-[44px] md:text-hero-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {wordmark}
          </motion.h1>
          <motion.p
            className="mt-5 md:mt-6 max-w-[48ch] text-body text-ink-muted"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {sub}
          </motion.p>
          <motion.div
            className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-all hover:-translate-y-0.5 hover:shadow-lg duration-300 text-center whitespace-nowrap"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors text-center whitespace-nowrap"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop photo collage — parallax + entry */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: `translate3d(0, -${parallax}px, 0)` }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group aspect-[3/4] overflow-hidden rounded-image bg-canvas-alt shadow-sm ${
                i === 0 ? 'translate-y-8' : ''
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </motion.div>

        {/* Mobile single image — rounded + slight scale-on-mount */}
        <motion.div
          className="md:hidden -mx-2 mt-4"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-[260px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
