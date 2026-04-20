// ConfettiHero — centered H1 + hero photo + absolutely-positioned decorative
// emoji/SVG callouts scattered around. Fork-agents may swap emoji for custom
// cuisine-specific SVG cutouts (burger → cheese/pickle/fries; taco → lime/
// cilantro/chili). Motion stays low: subtle hover wiggles only.
//
// SUBSTITUTION NOTE: the source template uses PNG/SVG ingredient cutouts; we
// substitute Unicode food emoji for zero bandwidth cost + cross-platform legibility.
// Documented in source.md per audit §6.

'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';

export function ConfettiHero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10 md:pb-16">
        {/* Confetti ingredients — absolute-positioned */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {content.confetti.map((c, i) => (
            <motion.span
              key={i}
              className="absolute text-[32px] md:text-[48px] select-none"
              style={{ top: c.top, left: c.left, transform: `rotate(${c.rotate}deg)` }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
            >
              {c.emoji}
            </motion.span>
          ))}
        </div>

        {/* Headline */}
        <div className="relative z-10 text-center max-w-[900px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-hero-h1 font-extrabold text-ink"
          >
            {content.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-5 text-body text-ink-soft max-w-[560px] mx-auto"
          >
            {content.hero.subhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href={content.nav.cta.href}
              className="inline-flex items-center justify-center h-12 px-6 rounded-pill bg-accent text-text-on-brand text-button hover:bg-accent-hover transition-colors"
            >
              Order Now
            </a>
            <a
              href="/#menu"
              className="inline-flex items-center justify-center h-12 px-6 rounded-pill bg-ink text-text-on-dark text-button hover:bg-ink/80 transition-colors"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 mt-12 md:mt-16 mx-auto max-w-[720px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={content.hero.photo}
            alt={content.hero.photoAlt}
            className="w-full aspect-square object-cover rounded-full shadow-card"
          />
        </motion.div>
      </div>
    </section>
  );
}
