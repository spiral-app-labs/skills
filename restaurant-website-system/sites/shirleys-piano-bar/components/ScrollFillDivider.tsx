'use client';

import { motion, useReducedMotion } from 'framer-motion';

// ScrollFillDivider — 1px horizontal line that fills L→R with an exponential
// ease on first scroll-into-view (NOT scroll-tied — fires once and runs).
// Mirrors Framer source's data-framer-name="Underline" pattern (1×1400px,
// overflow:hidden, opacity 0.3, ink-cream bg). The fill itself is a child
// scaleX(0→1) with transformOrigin:left and an easeOutExpo curve so it reads
// like a shooting-star streak rather than a linear sweep.
//
// Reduced-motion: renders the divider already filled (no animation).

type Props = {
  className?: string;
  /** Track opacity (the underlying line). Default 0.18 (matches inkLow token). */
  trackOpacity?: number;
  /** Fill opacity (the streak that animates in). Default 0.7. */
  fillOpacity?: number;
  /** Fill duration in seconds. Default 1.1 — slow + exponential reads as deliberate. */
  duration?: number;
  /** Delay in seconds. Default 0. */
  delay?: number;
  /** Viewport amount threshold (0–1). Default 0.6 (60% visible before firing). */
  amount?: number;
};

export function ScrollFillDivider({
  className,
  trackOpacity = 0.18,
  fillOpacity = 0.7,
  duration = 1.1,
  delay = 0,
  amount = 0.6,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`relative w-full h-px overflow-hidden ${className ?? ''}`}
      style={{ backgroundColor: `rgba(241, 223, 193, ${trackOpacity})` }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(241, 223, 193, ${fillOpacity})`,
          transformOrigin: 'left center',
          willChange: 'transform',
        }}
        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount }}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo — exponential then settles
        }}
      />
    </div>
  );
}
