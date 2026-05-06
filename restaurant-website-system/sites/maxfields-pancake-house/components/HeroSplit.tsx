'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content';
import { theme } from '../theme';

export function HeroSplit() {
  const { eyebrow, headline, subcopy, cta, secondaryCta, tertiaryCta, photos, badges, recovery } = content.hero;

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-10 md:pt-24 pb-14 md:pb-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <div className="text-eyebrow text-accent">{eyebrow}</div>
          <h1 className="font-display text-hero-h1 font-medium text-ink whitespace-pre-line">
            {headline}
          </h1>
          <p className="mt-6 max-w-[46ch] text-body text-ink-muted">{subcopy}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="info-chip">{badge}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={cta.href}
              className="w-full sm:w-auto text-center bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="w-full sm:w-auto text-center text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors"
            >
              {secondaryCta.label}
            </Link>
            <Link
              href={tertiaryCta.href}
              className="w-full sm:w-auto text-center text-button font-medium text-accent hover:text-accent-dark"
            >
              {tertiaryCta.label}
            </Link>
          </div>
          <p className="mt-4 text-body-sm text-ink-muted">
            Public hours conflict across sources, so the call CTA is the fastest truth-safe step before a visit.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[34rem] mx-auto"
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, delay: 0.12, ease: theme.motion.easing }}
        >
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className={`aspect-[3/4] overflow-hidden rounded-card bg-canvas-alt ${i === 0 ? 'md:translate-y-8' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-card border border-divider bg-white/80 p-5 md:p-6">
            <div className="text-eyebrow text-accent">{recovery.eyebrow}</div>
            <h2 className="mt-3 text-[24px] leading-tight font-medium text-ink">{recovery.title}</h2>
            <div className="mt-5 grid gap-3">
              {recovery.items.map((item) => (
                <div key={item.label} className="rounded-[24px] bg-canvas-alt px-4 py-4">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">{item.label}</div>
                  <p className="mt-2 text-body text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-body-sm text-ink-muted">{recovery.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
