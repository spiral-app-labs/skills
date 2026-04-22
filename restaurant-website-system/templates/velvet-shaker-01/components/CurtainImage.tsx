'use client';

import { useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

// CurtainImage — image that reveals via translateY/X curtain on first
// scroll-into-view. The parent (passed in by the caller) must be
// `relative overflow-hidden` so the offset image is clipped while hidden.
//
// Implementation note: the OBSERVED wrapper stays at its natural position
// (so IntersectionObserver fires correctly when the parent scrolls into
// view). The visual transform is applied to a CHILD element. If we put the
// transform on the observed element itself, it shifts out of viewport and
// IntersectionObserver never fires — that bug cost a debug round.
//
// Reduced-motion: image renders at final position (no animation).

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Direction the curtain opens FROM. Default 'bottom'. */
  from?: 'bottom' | 'top' | 'left' | 'right';
  /** Reveal duration in seconds. Default 1.05. */
  duration?: number;
  /** Delay in seconds. Default 0. */
  delay?: number;
  /** Viewport amount (0–1). Default 0.05. */
  amount?: number;
  /** Eager-load (above-the-fold). Default false. */
  eager?: boolean;
};

const HIDDEN: Record<NonNullable<Props['from']>, string> = {
  bottom: 'translate3d(0, 101%, 0)',
  top:    'translate3d(0, -101%, 0)',
  left:   'translate3d(-101%, 0, 0)',
  right:  'translate3d(101%, 0, 0)',
};

export function CurtainImage({
  src,
  alt,
  className,
  from = 'bottom',
  duration = 1.05,
  delay = 0,
  amount = 0.05,
  eager = false,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reveal = inView || prefersReducedMotion;

  return (
    <div ref={ref} className={`absolute inset-0 ${className ?? ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: reveal ? 'translate3d(0, 0, 0)' : HIDDEN[from],
          transition: prefersReducedMotion
            ? 'none'
            : `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
