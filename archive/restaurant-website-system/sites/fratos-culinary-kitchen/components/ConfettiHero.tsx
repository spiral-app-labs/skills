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
              className="absolute hidden select-none text-[30px] opacity-70 sm:block md:text-[42px]"
              style={{ top: c.top, left: c.left, transform: `rotate(${c.rotate}deg)` }}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
            >
              {c.emoji}
            </motion.span>
          ))}
        </div>

        {/* Headline */}
        <div className="relative z-10 text-center max-w-[900px] mx-auto">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {content.hero.proofPills.map((pill) => (
              <span
                key={pill}
                className="max-w-full rounded-pill border border-divider bg-white/90 px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-ink shadow-card sm:px-4 sm:text-[12px] sm:tracking-[0.14em]"
              >
                {pill}
              </span>
            ))}
          </motion.div>
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 text-hero-h1 font-extrabold text-ink"
          >
            {content.hero.headline}
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-5 text-body text-ink-soft max-w-[560px] mx-auto"
          >
            {content.hero.subhead}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={content.nav.cta.href}
              className="inline-flex min-w-[220px] items-center justify-center h-12 px-7 rounded-pill bg-[#FF003C] text-white text-button shadow-[0_16px_40px_rgba(255,0,60,0.25)] hover:bg-[#E00035] transition-colors"
            >
              {content.nav.cta.label}
            </a>
            <a
              href="/#menu"
              className="inline-flex min-w-[180px] items-center justify-center h-12 px-6 rounded-pill border-2 border-[#1A1A1A] bg-white text-ink text-button hover:border-[#FF003C] hover:text-[#FF003C] transition-colors"
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Hero photo */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 mt-12 md:mt-16 mx-auto max-w-[760px]"
        >
          <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-[#2a130d] shadow-[0_28px_80px_rgba(26,26,26,0.18)] sm:rounded-[44px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,203,107,0.14),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(26,26,26,0.12))]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.hero.photo}
              alt={content.hero.photoAlt}
              className="w-full aspect-[1.05/1] object-cover [filter:saturate(1.18)_contrast(1.06)_brightness(1.03)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
