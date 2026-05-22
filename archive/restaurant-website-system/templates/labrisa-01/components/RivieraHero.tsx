'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * RivieraHero — 150px Imbue H1 + warm-graded chef-hands photo + upper-right
 * intro card with CTA. Audit §4: H1 is 150px weight 400 with -1.5px
 * letter-spacing; responsive ramp 150 → 96 → 72 → 56 (via `text-hero-h1` token).
 *
 * Aliveness retrofit (2026-04-20): LiveOpenStatus text-variant sits quietly
 * above the intro card body — ceremonial-discipline register gets only the
 * label, no dot/pill chroma. H1 dimensions untouched.
 */
export function RivieraHero() {
  const { hero } = content;

  return (
    <section className="relative w-full bg-canvas">
      <div className="max-w-shell mx-auto px-6 md:px-12 pt-10 pb-24 md:pt-16 md:pb-32">
        <motion.p
          className="label-eyebrow text-ink-muted mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        >
          {hero.eyebrow}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <motion.h1
            className="col-span-1 md:col-span-8 text-hero-h1 font-display text-ink"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.05 }}
          >
            {hero.h1}
          </motion.h1>

          <motion.div
            className="col-span-1 md:col-span-4 md:pl-6 md:border-l md:border-hairline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.2 }}
          >
            <LiveOpenStatus
              hours={content.brand.hoursConfig}
              variant="text"
              className="label-eyebrow text-ink-muted mb-4"
            />
            <p className="text-body text-ink mb-6 max-w-sm">{hero.intro}</p>
            <Link
              href={hero.cta.href}
              className="inline-flex items-center border border-ink text-ink text-button px-5 py-3 hover:bg-ink hover:text-ink-on-dark transition-colors"
            >
              {hero.cta.label}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src={hero.photo}
          alt={hero.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'sepia(0.08) saturate(1.05)' }}
        />
      </div>
    </section>
  );
}
