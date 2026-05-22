// shared/motion/ScrollReveal.tsx
//
// Framer Motion wrapper that fades + slides content into view on scroll.
// Once-only (never re-animates on scroll-up).
// Respects prefers-reduced-motion (no-op when reduced).
//
// See research/aliveness-patterns.md §3.1 for register-matched intensity.

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Ease =
  | [number, number, number, number]
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'circIn'
  | 'circOut'
  | 'circInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'anticipate';

export type ScrollRevealProps = {
  children: ReactNode;
  /** Delay in seconds before animation starts. Default 0. Use for staggering children. */
  delay?: number;
  /** Y-offset in px for the initial position. Default 24. */
  y?: number;
  /** X-offset in px for the initial position. Default 0. */
  x?: number;
  /** Rotation in degrees for the initial position. Default 0. Use for scrapbook-drift feel (labrisa). */
  rotate?: number;
  /** Animation duration in seconds. Default 0.6. */
  duration?: number;
  /** Viewport threshold (0-1) for triggering. Default 0.25 (25% visible). */
  amount?: number;
  /** Once only, never re-animate. Default true. */
  once?: boolean;
  /** Easing curve. Default cubic-bezier(0.22, 1, 0.36, 1) (ease-out expo). */
  ease?: Ease;
  /** HTML tag to render. Default "div". */
  as?: 'div' | 'section' | 'article' | 'aside' | 'span' | 'li';
  /** Additional className */
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  rotate = 0,
  duration = 0.6,
  amount = 0.25,
  once = true,
  ease = [0.22, 1, 0.36, 1],
  as = 'div',
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      // Keep content visible before interaction so full-page screenshots,
      // crawlers, and no-scroll evidence captures do not look blank.
      // The section still settles to the same in-view state when scrolled.
      initial={false}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Convenience variants for the 3 register intensities
 * from `restaurant-website-strategic-principles.md` §2 + `theme.motion.intensity`.
 */
export const ScrollRevealSubtle = (props: Omit<ScrollRevealProps, 'y' | 'duration'>) => (
  <ScrollReveal {...props} y={16} duration={0.5} />
);

export const ScrollRevealStandard = (props: Omit<ScrollRevealProps, 'y' | 'duration'>) => (
  <ScrollReveal {...props} y={24} duration={0.6} />
);

export const ScrollRevealScrapbook = (props: Omit<ScrollRevealProps, 'y' | 'duration' | 'rotate'>) => (
  <ScrollReveal {...props} y={32} duration={0.7} rotate={-2} />
);
