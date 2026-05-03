'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

export function AboutHero() {
  const { headline, subcopy, photos } = content.about.hero;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        className="max-w-plate-narrow"
      >
        <h1 className="font-display text-hero-h1 font-medium text-ink whitespace-pre-line">
          {headline}
        </h1>
        <p className="mt-6 max-w-[58ch] text-body text-ink-muted">{subcopy}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-14">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            className="group aspect-[5/4] overflow-hidden rounded-image bg-canvas-alt shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
