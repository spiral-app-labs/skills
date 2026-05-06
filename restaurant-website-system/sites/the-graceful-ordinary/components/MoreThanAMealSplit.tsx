'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * MoreThanAMealSplit — split section: text-left + paired-images-right with star badge.
 * The "we believe fine dining is more than..." manifesto block.
 */
export function MoreThanAMealSplit() {
  const m = content.moreThanAMeal;
  const r = content.brand.rating;
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
        {/* Left: text */}
        <motion.div
          className="space-y-6"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <DH content={m.heading} as="h2" size="section-h1" italicColor={theme.color.accent} />
          {m.body.map((p, i) => (
            <p key={i} className="text-body text-text/75 leading-relaxed max-w-md">{p}</p>
          ))}
          <Link
            href={m.storyCta.href}
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-pill border border-text/40 hover:border-text/80 text-button text-text transition-colors"
          >
            {m.storyCta.label}
          </Link>
        </motion.div>

        <div className="grid gap-3 md:hidden">
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
            <div className="rounded-card border border-border/40 bg-surface p-5">
              <p className="text-eyebrow text-accent">Fox River ordinary</p>
              <p className="mt-3 font-display text-[22px] leading-[28px] tracking-[0.5px] text-text">
                Comfortable enough to feel familiar, thoughtful enough to make an evening memorable.
              </p>
            </div>
            <div className="relative min-h-[190px] overflow-hidden rounded-card border border-border/40">
              <Image src={m.images[0]} alt="" fill sizes="40vw" className="object-cover" />
            </div>
          </div>
          <div className="rounded-card border border-border/40 bg-surface px-4 py-3 flex items-center justify-center gap-2.5">
            <span className="text-accent text-xl leading-none">★</span>
            <div>
              <p className="font-display text-text" style={{ fontSize: '20px', lineHeight: '24px' }}>{r.stars}</p>
              <p className="text-micro text-text/75">{r.count.toLocaleString()} Reviews</p>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-border/40">
            <Image src={m.images[1]} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* Right: paired images + star badge */}
        <motion.div
          className="relative mx-auto hidden w-full max-w-[520px] grid-cols-2 gap-3 md:grid"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.15 }}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-border/40 sm:aspect-[4/5]">
            <Image src={m.images[0]} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-border/40 sm:aspect-square">
              <Image src={m.images[1]} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="rounded-card bg-surface border border-border/40 px-4 py-3 flex items-center justify-center gap-2.5 sm:justify-start">
              <span className="text-accent text-xl leading-none">★</span>
              <div>
                <p className="font-display text-text" style={{ fontSize: '20px', lineHeight: '24px' }}>{r.stars}</p>
                <p className="text-micro text-text-muted">{r.count.toLocaleString()} Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
