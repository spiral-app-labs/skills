'use client';

import { useReducedMotion } from 'framer-motion';
import { content } from '../content';
import { GreekKeyDivider } from './GreekKeyDivider';

/**
 * ReviewWall — anonymized Google + Tripadvisor review surface as a horizontal
 * auto-scrolling marquee. Quotes are verbatim; reviewer names are stripped.
 *
 * Marquee technique: render the card row twice inside a flex container, then
 * translate the container left from 0 to -50% over a long linear duration.
 * Because the second copy is identical to the first, the loop point is
 * imperceptible. Pause on hover. Honors prefers-reduced-motion (degrades to
 * a static, manually-scrollable row).
 */
export function ReviewWall() {
  const r = content.reviews;
  const prefersReduced = useReducedMotion();

  // Duplicate the array so the visual loop is seamless. aria-hidden on the
  // duplicate so screen readers only read the canonical set once.
  const items = r.items;

  return (
    <section id="reviews" className="w-full bg-canvas py-16 md:py-24 overflow-hidden">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="text-center flex flex-col items-center gap-4 mb-10 md:mb-14">
          <p className="text-eyebrow-sm text-ink-muted uppercase tracking-[0.18em]">
            {r.eyebrow}
          </p>
          <h2 className="font-display text-section-h2 text-ink leading-tight max-w-3xl">
            {r.heading}
          </h2>
          <GreekKeyDivider className="h-3 w-32 text-accent mt-1" />
          <AggregateBanner stars={r.aggregate.stars} count={r.aggregate.count} source={r.aggregate.source} />
        </div>
      </div>

      {/* Full-bleed marquee viewport with edge-fade masks so cards softly
          enter and exit at both edges. Mask uses a linear-gradient on
          mask-image; supports modern browsers, fails open in older. */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div
          className={`flex w-max gap-5 md:gap-6 ${
            prefersReduced ? '' : 'review-marquee'
          } group`}
          style={{ paddingInline: '1rem' }}
        >
          {items.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {!prefersReduced &&
            items.map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} ariaHidden />
            ))}
        </div>
      </div>

      <style jsx>{`
        .review-marquee {
          animation: review-marquee-scroll 90s linear infinite;
        }
        @media (min-width: 768px) {
          .review-marquee {
            animation-duration: 110s;
          }
        }
        .review-marquee:hover {
          animation-play-state: paused;
        }
        .review-marquee:focus-within {
          animation-play-state: paused;
        }
        @keyframes review-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* -50% pulls the duplicate copy fully into the original's place,
               yielding a seamless loop. Combined with w-max + the duplicate
               render, the cards feel like an infinite ticker. */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

type Review = (typeof content.reviews.items)[number];

function ReviewCard({ review, ariaHidden = false }: { review: Review; ariaHidden?: boolean }) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="shrink-0 w-[300px] md:w-[360px] bg-card rounded-card p-6 border border-divider/50 flex flex-col gap-4"
    >
      <Stars n={review.stars} />
      <p className="text-body text-ink leading-relaxed flex-1">
        <span aria-hidden className="text-accent">“</span>
        {review.text}
        <span aria-hidden className="text-accent">”</span>
      </p>
      <p className="text-eyebrow-sm text-ink-muted uppercase tracking-wider">
        {review.source}
      </p>
    </article>
  );
}

function AggregateBanner({ stars, count, source }: { stars: number; count: number; source: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-chip border border-chip-border bg-card px-5 py-2.5">
      <span className="text-body text-ink font-medium">{source}</span>
      <Stars n={Math.round(stars)} small />
      <span className="text-body text-ink">
        {stars.toFixed(1)} <span className="text-ink-muted">/ {count.toLocaleString()} reviews</span>
      </span>
    </div>
  );
}

function Stars({ n, small = false }: { n: number; small?: boolean }) {
  const size = small ? 12 : 16;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < n ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-star"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
