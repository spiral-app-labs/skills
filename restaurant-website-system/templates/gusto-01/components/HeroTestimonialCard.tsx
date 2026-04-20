// HeroTestimonialCard — pull-quote + review body + 4.8★ + review count +
// dual CTA, overlaid bottom-left on hero photography. Moves the conversion
// floor UP into the hero. Signature pattern + strong shared promotion candidate
// (audit §6 / §11).
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarRating } from './StarRating';

type Props = {
  quote: string;
  body?: string;
  rating: number;
  reviewCount: number;
  primaryCta:   { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroTestimonialCard({
  quote,
  body,
  rating,
  reviewCount,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="gusto-overlay-card absolute left-6 bottom-6 right-6 max-w-[480px] rounded-card p-7 md:left-8 md:bottom-8 md:p-9"
    >
      <blockquote className="font-display italic text-hero-quote text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {body && (
        <p className="mt-5 font-body text-body-sm leading-relaxed text-ink-muted">
          {body}
        </p>
      )}

      <div className="mt-6 flex items-center gap-4 border-t border-divider pt-5">
        <StarRating rating={rating} reviewCount={reviewCount} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={primaryCta.href}
          className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-button border border-ink/25 bg-transparent px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
