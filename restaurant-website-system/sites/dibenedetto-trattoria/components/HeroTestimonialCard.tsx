// HeroTestimonialCard \u2014 wordmark + body + stars + dual CTA, overlaid bottom-
// left on hero photography.
//
// Animation upgrade #1: each child cascades in on a stagger so the card
// lands instead of appearing. ~80\u2013120ms between elements; total
// choreography lands inside ~1.0s. Respects prefers-reduced-motion.
'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { StarRating } from './StarRating';

type Props = {
  quote: string;
  body?: string;
  rating: number;
  reviewCount: number;
  ratingLabel?: string;
  reviewLabel?: string;
  wordmark?: boolean;
  primaryCta:   { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
      // Wait for the photo Ken Burns to settle a beat before the card lands.
      delay: 0.15,
      // Stagger the children inside the card after the card itself appears.
      delayChildren: 0.5,
      staggerChildren: 0.11,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function HeroTestimonialCard({
  quote,
  body,
  rating,
  reviewCount,
  ratingLabel,
  reviewLabel,
  wordmark = false,
  primaryCta,
  secondaryCta,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  // For reduced-motion users: skip stagger, render the card statically.
  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : containerVariants;
  const child = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : childVariants;

  return (
    <div
      className="gusto-overlay-card relative mt-3 max-w-[480px] rounded-card p-6 md:absolute md:mt-0 md:left-8 md:bottom-8 md:right-8 md:p-9"
    >
      <div>
        {wordmark ? (
          <p className="font-display italic text-hero-quote text-ink">
            {quote}
          </p>
        ) : (
          <blockquote className="font-display italic text-hero-quote text-ink">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
      </div>

      {body && (
        <p className="mt-5 font-body text-body leading-relaxed text-ink/90">
          {body}
        </p>
      )}

      <div className="mt-6 flex items-center gap-4 border-t border-divider pt-5">
        <StarRating
          rating={rating}
          reviewCount={reviewCount}
          ratingLabel={ratingLabel}
          reviewLabel={reviewLabel}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={primaryCta.href}
          {...(primaryCta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
        >
          {primaryCta.label}
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            {...(secondaryCta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex items-center justify-center rounded-button border border-ink/25 bg-transparent px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
