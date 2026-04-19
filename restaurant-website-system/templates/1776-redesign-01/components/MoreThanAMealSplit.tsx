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
    <section className="px-6 md:px-12 py-20 md:py-24 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <DH content={m.heading} as="h2" size="section-h1" italicColor={theme.color.accent} />
          {m.body.map((p, i) => (
            <p key={i} className="text-body text-text-muted leading-relaxed max-w-md">{p}</p>
          ))}
          <Link
            href={m.storyCta.href}
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-pill border border-text/40 hover:border-text/80 text-button text-text transition-colors"
          >
            {m.storyCta.label}
          </Link>
        </motion.div>

        {/* Right: paired images + star badge */}
        <motion.div
          className="relative grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.15 }}
        >
          <div className="relative aspect-[4/5] rounded-card overflow-hidden">
            <Image src={m.images[0]} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="space-y-3">
            <div className="relative aspect-square rounded-card overflow-hidden">
              <Image src={m.images[1]} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="rounded-card bg-surface border border-border/40 px-4 py-3 flex items-center gap-2.5">
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
