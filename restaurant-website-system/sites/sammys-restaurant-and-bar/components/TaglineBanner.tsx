'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// Mid-page tagline banner. Pattern is reusable; the "bold flavours / local
// ingredients / crafted with love" source copy is weak (audit §6) — encourage
// forks to swap. Small photo collage + 3 trust icons beside.
export function TaglineBanner() {
  const { heading, collage, trustIcons } = content.tagline;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center"
      >
        <div>
          <h2 className="font-display text-section-h2 font-medium text-ink whitespace-pre-line">
            {heading}
          </h2>
          <div className="mt-5 flex items-center gap-4 text-body-sm text-ink-muted">
            {trustIcons.map((label) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:w-[360px]">
          {collage.map((p, i) => (
            <motion.div
              key={i}
              className={`group aspect-square overflow-hidden rounded-image bg-canvas-alt shadow-sm ${i === 1 ? 'translate-y-4' : ''}`}
              initial={{ opacity: 0, scale: 0.95, rotate: i === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
