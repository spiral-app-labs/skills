'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-12 md:py-20">
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-eyebrow">Seasonal signatures</p>
          <DH content={s.heading} as="h2" size="section-h1" italicColor={theme.color.accent} />
          <p className="max-w-xl text-body text-text/72">
            Hearth-fired plates, a guest-favorite cocktail, and the kinds of weekly-changing dishes people call out after dinner.
          </p>
        </div>
        <Link href={s.fullMenuLink.href} className="text-eyebrow flex items-center gap-2 hover:text-accent-hover transition-colors">
          {s.fullMenuLink.label} →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {s.items.map((item, i) => (
          <motion.article
            key={item.name}
            className="group overflow-hidden rounded-card border border-border/40 bg-surface"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: i * 0.08 }}
          >
            <div className="relative aspect-[4/4.4] w-full overflow-hidden sm:aspect-[4/5]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <TagPill>{item.tag}</TagPill>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none bg-gradient-to-t from-canvas/95 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-5">
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
