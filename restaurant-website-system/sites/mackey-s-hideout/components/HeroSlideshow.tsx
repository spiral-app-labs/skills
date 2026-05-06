'use client';

import Image from 'next/image';
import Link from 'next/link';
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
  const hero = content.hero;
  const slides = content.hero.slides;
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), theme.layout.slideshow.intervalMs);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-hidden overflow-y-hidden bg-bg-dark md:h-screen md:min-h-[760px]">
      {/* Cycling images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          className="absolute inset-x-0 top-0 hidden bottom-0 md:block"
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
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Desktop full-bleed scrim keeps poster art visible while protecting copy. */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to bottom, rgba(23,23,23,0.38) 0%, rgba(23,23,23,0.16) 22%, rgba(23,23,23,0.04) 48%, rgba(23,23,23,0.52) 74%, rgba(23,23,23,0.92) 100%)',
        }}
      />

      <div className="pb-10 pt-28 md:hidden">
        <div
          className="min-w-0 box-border overflow-hidden rounded-card border border-text-cream/15 bg-black/35 p-3 shadow-2xl"
          style={{ width: 'calc(100vw - 32px)', maxWidth: '358px', marginLeft: '16px', marginRight: '16px' }}
        >
          <div className="relative aspect-[5/6] w-full max-w-full min-w-0 overflow-hidden rounded-card border border-text-cream/10 bg-black">
            <Image
              src={slides[i].src}
              alt={slides[i].alt}
              fill
              priority={i === 0}
              sizes="(max-width: 767px) calc(100vw - 56px), 100vw"
              className="object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(23,23,23,0.06) 0%, rgba(23,23,23,0.02) 42%, rgba(23,23,23,0.28) 74%, rgba(23,23,23,0.66) 100%)',
              }}
            />
          </div>
          <div className="mt-4 min-w-0 rounded-card border border-text-cream/15 bg-black/72 px-4 py-4 backdrop-blur-[2px]">
            <p className="min-w-0 break-words text-address text-text-cream/82">{hero.eyebrow}</p>
            <h1
              className="mt-3 min-w-0 whitespace-normal break-words font-display text-[clamp(31px,9vw,40px)] leading-[0.96] text-text-cream"
              style={{ fontWeight: 300, overflowWrap: 'anywhere' }}
            >
              {hero.title}
            </h1>
            <p className="mt-3 min-w-0 break-words text-[15px] leading-6 text-text-cream/94">{hero.mobileBody ?? hero.body}</p>
            <div className="mt-4 flex min-w-0 flex-col gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex w-full min-w-0 items-center justify-center rounded-button bg-text-cream px-4 py-3 text-center text-button leading-snug whitespace-normal break-words text-text-dark transition-colors hover:bg-white"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex w-full min-w-0 items-center justify-center rounded-button border border-text-cream/50 px-4 py-3 text-center text-button leading-snug whitespace-normal break-words text-text-cream transition-colors hover:bg-text-cream/10"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Protected desktop content panel keeps Bramble's hero full-bleed without poster-text collisions. */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden md:block">
        <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10 md:px-8 md:pb-12">
          <div className="max-w-2xl rounded-card border border-text-cream/24 bg-black/82 px-5 py-6 shadow-2xl backdrop-blur-[4px] sm:px-6 md:px-8 md:py-8">
            <p className="text-address text-text-cream/82">{hero.eyebrow}</p>
            <h1
              className="mt-3 font-display text-[clamp(48px,10vw,88px)] leading-[0.92] text-text-cream"
              style={{ fontWeight: 300 }}
            >
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-body leading-7 text-text-cream">
              {hero.body}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-button bg-text-cream px-5 py-3 text-button text-text-dark transition-colors hover:bg-white"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-button border border-text-cream/50 px-5 py-3 text-button text-text-cream transition-colors hover:bg-text-cream/10"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
