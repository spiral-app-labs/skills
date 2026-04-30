'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

export function ReviewWall() {
  const r = content.reviews;
  const prefersReduced = useReducedMotion();
  const items = r.items;

  return (
    <section className="w-full bg-surface py-20 md:py-24">
      <div className="mx-auto mb-10 flex max-w-[1100px] flex-col items-center gap-4 px-6 text-center md:mb-14 md:px-12">
        <p className="text-eyebrow">{r.eyebrow}</p>
        <DH
          content={{ upright: 'Guests Already', italic: 'Feel It' }}
          as="h2"
          size="section-h1"
          align="center"
          italicColor={theme.color.accent}
        />
        <p className="max-w-2xl text-body text-text-muted">{r.heading}</p>
        <AggregateBanner
          stars={r.aggregate.stars}
          count={r.aggregate.count}
          source={r.aggregate.source}
          shouldFloat={!prefersReduced}
        />
      </div>

      <motion.div
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-4"
        initial={prefersReduced ? false : { opacity: 0 }}
        whileInView={prefersReduced ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: theme.motion.easing }}
      >
        {items.map((review, i) => (
          <ReviewCard
            key={`${review.source}-${i}`}
            review={review}
            index={i}
            shouldAnimate={!prefersReduced}
          />
        ))}
      </motion.div>
    </section>
  );
}

type Review = (typeof content.reviews.items)[number];

function ReviewCard({
  review,
  index,
  shouldAnimate,
}: {
  review: Review;
  index: number;
  shouldAnimate: boolean;
}) {
  return (
    <motion.article
      initial={shouldAnimate ? { opacity: 0, y: 22 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      whileHover={shouldAnimate ? { y: -6, rotate: index % 2 === 0 ? -0.35 : 0.35 } : undefined}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, delay: shouldAnimate ? index * 0.07 : 0 }}
      className="flex h-full min-h-[235px] flex-col gap-4 rounded-card border border-border/50 bg-canvas p-6 shadow-[0_18px_60px_-42px_rgba(0,0,0,0.9)]"
    >
      <Stars n={review.stars} />
      <p className="flex-1 font-display text-[21px] italic leading-snug text-text">
        <span aria-hidden className="text-accent">“</span>
        {review.text}
        <span aria-hidden className="text-accent">”</span>
      </p>
      <p className="text-eyebrow text-text-muted">{review.source}</p>
    </motion.article>
  );
}

function AggregateBanner({
  stars,
  count,
  source,
  shouldFloat,
}: {
  stars: number;
  count: number;
  source: string;
  shouldFloat: boolean;
}) {
  return (
    <motion.div
      animate={shouldFloat ? { y: [0, -4, 0] } : undefined}
      transition={shouldFloat ? { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className="inline-flex flex-wrap items-center justify-center gap-3 rounded-pill border border-accent/40 bg-canvas px-5 py-2.5"
    >
      <span className="text-body-sm text-text">{source}</span>
      <Stars n={Math.round(stars)} small />
      <span className="text-body-sm text-text">
        {stars.toFixed(1)} <span className="text-text-muted">/ {count.toLocaleString()} reviews</span>
      </span>
    </motion.div>
  );
}

function Stars({ n, small = false }: { n: number; small?: boolean }) {
  const size = small ? 12 : 16;
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < n ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
