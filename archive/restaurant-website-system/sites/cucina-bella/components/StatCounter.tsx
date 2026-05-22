// StatCounter \u2014 animates a numeric value from 0 to its target when scrolled
// into view. Parses non-numeric prefix/suffix from the input string so
// values like "4.5\u2605", "428", and "#2 of 121" all work transparently.
//
// Animation #4: numbers feel earned. The counter runs once per page load
// (once: true), tied to the IntersectionObserver via framer-motion's
// useInView. Total animation duration ~1.4s with ease-out, so the largest
// number (428) sweeps fast and the smallest (4.5) settles slow.
//
// Respects prefers-reduced-motion: skips animation, renders the final value.
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type Props = {
  /** Final value to display, e.g. "4.5\u2605", "428", "#2 of 121". */
  value: string;
  /** Animation duration in ms. Default 1400. */
  durationMs?: number;
  /** Optional className for the wrapper span. */
  className?: string;
};

// Parse a value string into prefix + numeric core + suffix.
// "4.5\u2605"   \u2192 { prefix: '', number: 4.5, suffix: '\u2605' }
// "428"     \u2192 { prefix: '', number: 428, suffix: '' }
// "#2 of 121" \u2192 { prefix: '#', number: 2, suffix: ' of 121' }
function parseValue(raw: string): {
  prefix: string;
  number: number | null;
  suffix: string;
  decimals: number;
} {
  const match = raw.match(/^([^\d]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: raw, number: null, suffix: '', decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return {
    prefix,
    number: parseFloat(numStr),
    suffix,
    decimals,
  };
}

function formatNumber(n: number, decimals: number): string {
  return decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
}

// ease-out-cubic
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function StatCounter({ value, durationMs = 1400, className }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { prefix, number, suffix, decimals } = parseValue(value);

  const [display, setDisplay] = useState<number>(
    prefersReducedMotion || number == null ? number ?? 0 : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion || number == null || !inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      setDisplay(number * easeOutCubic(progress));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(number);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, durationMs, prefersReducedMotion]);

  if (number == null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(display, decimals)}
      {suffix}
    </span>
  );
}
