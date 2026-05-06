'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { content } from '../content';
import { theme } from '../theme';

// Repurposed from the template's blog strip into a review-proof block.
export function LatestUpdatesGrid() {
  const { heading, intro, cards } = content.proof;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="mb-8 md:mb-10">
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <p className="mt-4 max-w-[64ch] text-body text-ink-muted">{intro}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.source}
            className="rounded-card border border-divider bg-canvas-alt p-6 md:p-7"
            initial={{ opacity: 0, y: theme.motion.revealLift }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: theme.motion.revealDuration,
              delay: i * theme.motion.revealStagger,
              ease: theme.motion.easing,
            }}
          >
            <div className="text-eyebrow text-accent">
              {card.source}
            </div>
            <h3 className="mt-3 text-[22px] leading-tight font-medium text-ink">
              {card.score}
            </h3>
            <div className="mt-2 text-body-sm text-ink-muted">{card.detail}</div>
            <p className="mt-4 text-body text-ink-muted">{card.body}</p>
            <div className="mt-5 rounded-[24px] bg-white/80 px-4 py-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">How it helps conversion</div>
              <p className="mt-2 text-body text-ink-muted">{card.bridge}</p>
              <Link
                href={card.ctaHref}
                className="mt-4 inline-flex text-button font-medium text-accent hover:text-accent-dark"
              >
                {card.ctaLabel}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
