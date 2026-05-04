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
import { content } from '../content';

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

        <div className="relative z-10 text-center max-w-[900px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-eyebrow font-bold uppercase text-accent"
          >
            {content.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
            className="mt-4 text-hero-h1 font-extrabold text-ink"
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
            transition={{ duration: 0.6, delay: 0.24, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {content.hero.highlightChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-pill border border-divider bg-canvas-warm px-4 py-2 text-body-sm font-semibold text-ink"
              >
                {chip}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {content.hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`inline-flex items-center justify-center h-12 px-6 rounded-pill text-button transition-colors ${
                  cta.style === 'accent'
                    ? 'bg-accent text-text-on-brand hover:bg-accent-hover'
                    : 'bg-ink text-text-on-dark hover:bg-ink/80'
                }`}
              >
                {cta.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 mt-12 md:mt-16 mx-auto max-w-[720px]"
        >
          <div className="rounded-[48px] border border-card-border bg-canvas-warm p-8 shadow-card">
            <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[36px] bg-accent p-8 text-text-on-brand">
                <p className="text-eyebrow font-bold uppercase">{content.hero.proofPanel.eyebrow}</p>
                <ul className="mt-4 space-y-3 text-body">
                  {content.hero.proofPanel.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[36px] bg-ink p-8 text-text-on-dark">
                <p className="text-eyebrow font-bold uppercase text-accent">{content.hero.proofPanel.sideEyebrow}</p>
                <div className="mt-4 space-y-2 text-body-sm">
                  {content.brand.hours.slice(0, 4).map((row) => (
                    <div key={row.days} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0">
                      <span>{row.days}</span>
                      <span className="font-bold">{row.time}</span>
                    </div>
                  ))}
                  <div className="pt-2 text-body-sm opacity-80">{content.hero.proofPanel.sideNote}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
