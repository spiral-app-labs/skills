'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { TagPill } from './TagPill';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * FeaturedCardGrid — Signature Selections section on home.
 * 3-up horizontal grid with photo + tag-pill + dish name + description.
 */
export function FeaturedCardGrid() {
  const s = content.signatureSelections;
  const prefersReduced = useReducedMotion();
  return (
    <section className="px-6 md:px-12 py-20 md:py-24 max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between mb-10">
        <DH content={s.heading} as="h2" size="section-h1" italicColor={theme.color.accent} />
        <Link href={s.fullMenuLink.href} className="text-eyebrow flex items-center gap-2 hover:text-accent-hover transition-colors">
          {s.fullMenuLink.label} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {s.items.map((item, i) => (
          <motion.article
            key={item.name}
            className="group rounded-card overflow-hidden bg-surface border border-border/40 shadow-[0_20px_80px_-60px_rgba(0,0,0,0.95)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={prefersReduced ? undefined : { y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
            whileTap={prefersReduced ? undefined : { scale: 0.99 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: i * 0.12 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />
              <div className="absolute top-3 left-3">
                <TagPill>{item.tag}</TagPill>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none bg-gradient-to-t from-canvas/95 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 space-y-1.5">
                <h3 className="font-display text-card-title text-text">{item.name}</h3>
                <p className="text-body-sm text-text-muted">{item.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
