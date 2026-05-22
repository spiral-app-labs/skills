// StatCounter — animates a numeric value from 0 to its target on scroll-into-view.
// Parses prefix/number/suffix so values like "1,107+", "Since 1992", "#1 Italian",
// "5 Rooms" all work. Commas in the source number are preserved in the output.
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type Props = {
  value: string;
  durationMs?: number;
  className?: string;
};

function parseValue(raw: string): {
  prefix: string;
  number: number | null;
  suffix: string;
  decimals: number;
  hasCommas: boolean;
} {
  const match = raw.match(/^([^\d-]*)(-?\d{1,3}(?:,\d{3})+(?:\.\d+)?|-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: raw, number: null, suffix: '', decimals: 0, hasCommas: false };
  }
  const [, prefix, numStr, suffix] = match;
  const hasCommas = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;
  return {
    prefix,
    number: parseFloat(cleanNumStr),
    suffix,
    decimals,
    hasCommas,
  };
}

function formatNumber(n: number, decimals: number, withCommas: boolean): string {
  const rounded = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  if (!withCommas) return rounded;
  const [intPart, fracPart] = rounded.split('.');
  const intWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fracPart != null ? `${intWithCommas}.${fracPart}` : intWithCommas;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function StatCounter({ value, durationMs = 1400, className }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { prefix, number, suffix, decimals, hasCommas } = parseValue(value);

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
      {formatNumber(display, decimals, hasCommas)}
      {suffix}
    </span>
  );
}
