// AggregateProofStrip — MAAX-specific improvement #3.
//
// The audit's #4 "why are we rebuilding it" item: 621 Google reviews + 4.7★
// + 41 OpenTable diners + 4.8★ + #2 of 65 Arlington Heights BBQs — all
// invisible on the current site. This strip surfaces the four aggregate
// scores as a horizontal proof bar with animated count-ups, in the same
// orange-accent register as the rest of the bamzi-01 palette.

'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STATS = [
  { value: '4.7', suffix: '★', label: 'Google', sub: '621 reviews' },
  { value: '4.8', suffix: '★', label: 'OpenTable', sub: '41 diners' },
  { value: '#2', suffix: '', label: 'Arlington Heights', sub: 'of 65 BBQs · Restaurantji' },
  { value: '600+', suffix: '', label: 'Verbatim', sub: 'public reviews across platforms' },
];

function CountUp({ to, suffix }: { to: string; suffix: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const numMatch = to.match(/^[\d.]+/);
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const tail = to.slice(numMatch[0].length);
    setDisplay('0' + tail);
    let raf = 0;
    const start = performance.now();
    const dur = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = (target * eased).toFixed(target % 1 === 0 ? 0 : 1);
      setDisplay(v + tail);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReducedMotion, to]);

  return (
    <span className="inline-flex items-baseline tabular-nums">
      {display}
      {suffix && (
        <span className="ml-1 font-display text-[24px] text-accent md:text-[32px]">
          {suffix}
        </span>
      )}
    </span>
  );
}

export function AggregateProofStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex items-center gap-3 pb-6">
          <p className="font-body text-[12px] uppercase tracking-[0.18em] text-accent">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            Earned, Not Said
          </p>
          <p className="hidden font-body text-[13px] text-text-muted-dark md:block">
            Aggregated across the platforms guests actually use.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-divider pt-10 md:grid-cols-4">
          {STATS.map((s) => (
            <li key={s.label}>
              <p className="font-display text-[44px] leading-none text-text-dark md:text-[56px]">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-body text-[14px] font-semibold uppercase tracking-wide text-text-dark">
                {s.label}
              </p>
              <p className="mt-1 font-body text-[12px] text-text-muted-dark">
                {s.sub}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
