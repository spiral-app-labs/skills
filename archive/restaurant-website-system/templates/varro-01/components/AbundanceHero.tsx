'use client';
// AbundanceHero — massive display headline + 3-photo horizontal strip.
// Signature move. Signals multi-discipline craft + table generosity.
// Counterpart to FullBleedHero / PageHeroSplit.
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus text-variant sits under the
// headline as a small live line — "Open now · closes in 2h 4m" is visible when
// the customer is deciding to scroll down to the inline reservation form.

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

export function AbundanceHero() {
  const { eyebrow, headline, photos } = content.hero;

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 px-5 lg:px-12">
      <div className="mx-auto max-w-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-eyebrow text-ink-muted mb-6">{eyebrow}</span>
          <h1 className="font-display text-hero-display text-ink max-w-5xl">
            {headline}
          </h1>
          <LiveOpenStatus
            hours={content.brand.hoursConfig}
            variant="text"
            className="mt-6 text-eyebrow text-ink-muted"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative aspect-[4/5] overflow-hidden rounded-card ${
                i === 1 ? 'md:translate-y-6' : ''
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
