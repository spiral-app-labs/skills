'use client';

import { useEffect, useRef, useState } from 'react';

// CurtainImage — image reveal via canvas-colored OVERLAY that slides out of
// frame on first scroll-into-view. The image itself never moves; only the
// overlay translates. This mirrors the Framer source's actual technique
// (data-framer-name="Overlay" elements on /menu, background-color set to
// canvas, transform: translate3d(0, ±101%, 0) at final state).
//
// Direction semantics from `from` prop:
//   - from='top'    → overlay slides DOWN, image is exposed from the TOP first (top-down reveal — the natural "curtain dropping" feel)
//   - from='bottom' → overlay slides UP, image is exposed from the BOTTOM first
//   - from='left'   → overlay slides RIGHT, image exposed from LEFT first
//   - from='right'  → overlay slides LEFT, image exposed from RIGHT first
//
// Caller must wrap this in a `relative overflow-hidden` parent of fixed
// dimensions (the existing pattern: `relative aspect-[3/4] overflow-hidden`).

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Direction the curtain peels FROM. Default 'top' (top-down reveal). */
  from?: 'top' | 'bottom' | 'left' | 'right';
  /** Reveal duration in seconds. Default 1.05. */
  duration?: number;
  /** Delay in seconds — useful for stagger across rows. Default 0. */
  delay?: number;
  /** Viewport amount (0–1). Default 0.05. */
  amount?: number;
  /** Eager-load (above-the-fold). Default false. */
  eager?: boolean;
};

// Where the overlay translates TO when revealing. The overlay starts at
// translate3d(0,0,0) covering the image and ends at the value below.
const OVERLAY_OUT: Record<NonNullable<Props['from']>, string> = {
  top:    'translate3d(0, 101%, 0)',   // overlay slides DOWN — image exposed from top
  bottom: 'translate3d(0, -101%, 0)',  // overlay slides UP — image exposed from bottom
  left:   'translate3d(101%, 0, 0)',   // overlay slides RIGHT — image exposed from left
  right:  'translate3d(-101%, 0, 0)',  // overlay slides LEFT — image exposed from right
};

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export function CurtainImage({
  src,
  alt,
  className,
  from = 'top',
  duration = 1.05,
  delay = 0,
  amount = 0.05,
  eager = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setReduced(true);
      setReveal(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setReveal(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: amount },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [amount]);

  return (
    <div ref={ref} className={`absolute inset-0 ${className ?? ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-canvas pointer-events-none"
        style={{
          transform: reveal ? OVERLAY_OUT[from] : 'translate3d(0, 0, 0)',
          transition: reduced
            ? 'none'
            : `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
