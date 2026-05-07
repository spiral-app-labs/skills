'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content';
import { theme } from '../theme';
import { HoursTable } from './HoursTable';

export function VisitConfidencePanel() {
  const { eyebrow, heading, intro, cards, hours, footnote } = content.visitConfidence;

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <div className="text-eyebrow text-accent">{eyebrow}</div>
          <h2 className="mt-3 font-display text-section-h2 font-medium text-ink">{heading}</h2>
          <p className="mt-4 max-w-[60ch] text-body text-ink-muted">{intro}</p>
          <div className="mt-8 grid gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-card border border-divider bg-canvas-alt p-5 md:p-6"
                initial={{ opacity: 0, y: theme.motion.revealLift }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: theme.motion.revealDuration,
                  delay: index * theme.motion.revealStagger,
                  ease: theme.motion.easing,
                }}
              >
                <h3 className="text-[22px] leading-tight font-medium text-ink">{card.title}</h3>
                <p className="mt-3 text-body text-ink-muted">{card.body}</p>
                <Link
                  href={card.ctaHref}
                  className="mt-4 inline-flex text-button font-medium text-accent hover:text-accent-dark"
                >
                  {card.ctaLabel}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="rounded-card border border-divider bg-canvas-alt p-6 md:p-7 shadow-[0_18px_50px_rgba(156,90,45,0.06)]"
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: theme.motion.revealDuration, delay: 0.1, ease: theme.motion.easing }}
        >
          <div className="text-eyebrow text-accent">Source comparison</div>
          <h3 className="mt-3 text-[24px] leading-tight font-medium text-ink">Hours are handled transparently</h3>
          <p className="mt-3 text-body text-ink-muted">
            Instead of picking one unverified schedule, the preview keeps both public versions visible and points visitors to the fastest truth-safe next step.
          </p>
          <div className="mt-6">
            <HoursTable hours={hours} />
          </div>
          <p className="mt-5 text-body-sm text-ink-muted">{footnote}</p>
        </motion.aside>
      </div>
    </section>
  );
}
