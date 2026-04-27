'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// Plate-style hero: centered copy, tight CTAs, then a large image-led panel
// that makes the menu visible immediately after the first viewport.
export function PlateHero() {
  const { eyebrow, headline, subcopy, cta, secondaryCta, utilityCta, highlights, photos } = content.hero;
  const heroPhoto = photos[0];
  const menuTabs = content.menu.map((section) => ({
    label: heroTabLabel(section.id),
    href: `#${section.id}`,
  }));

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-8 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        className="mx-auto max-w-[760px] text-center"
      >
        <div className="text-eyebrow text-accent">{eyebrow}</div>
        <h1 className="mt-3 font-display text-[56px] md:text-[92px] leading-none font-medium text-ink whitespace-pre-line">
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-[58ch] text-body text-ink-muted">{subcopy}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={cta.href}
            className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
          >
            {cta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="text-button font-medium text-accent border border-divider bg-white/60 hover:border-accent px-6 py-3 rounded-button transition-colors"
          >
            {secondaryCta.label}
          </Link>
          <Link
            href={utilityCta.href}
            className="text-button font-medium text-ink-muted hover:text-accent px-2 py-3 transition-colors"
          >
            {utilityCta.label}
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="relative mt-12 md:mt-16"
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, delay: 0.12, ease: theme.motion.easing }}
      >
        <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-card bg-canvas-alt shadow-[0_24px_70px_rgba(30,30,28,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/92 p-1.5 shadow-[0_12px_40px_rgba(30,30,28,0.18)] backdrop-blur md:flex">
          {menuTabs.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[11px] font-bold uppercase leading-none text-ink transition-colors hover:bg-accent hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="mx-auto mt-6 grid max-w-[760px] gap-3 sm:grid-cols-3">
        {highlights.map((label) => (
          <div key={label} className="rounded-card border border-divider bg-white/60 px-4 py-3 text-center text-body-sm text-ink">
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function heroTabLabel(id: string) {
  if (id === 'starters') return 'Starters';
  if (id === 'entrees') return 'Mains';
  if (id === 'specials') return 'Specials';
  if (id === 'vegan-vegetarian') return 'Vegan';
  return 'Desserts';
}
