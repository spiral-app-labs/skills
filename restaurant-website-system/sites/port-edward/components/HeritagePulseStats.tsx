'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 62, suffix: '+', label: 'years on the Fox River' },
  { value: 150, suffix: '', label: 'guests across private rooms' },
  { value: 6, suffix: '', label: 'ways to plan a visit' },
  { value: 1, suffix: '', label: 'beloved riverfront landmark' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || reducedMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const totalFrames = 42;
    let animationFrame = 0;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [inView, reducedMotion, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function HeritagePulseStats() {
  return (
    <section className="border-y border-hairline bg-ink text-ink-on-dark">
      <div className="relative overflow-hidden border-b border-ink-on-dark/15 py-3">
        <div className="river-current flex w-max gap-8 whitespace-nowrap text-[14px] leading-5 text-ink-on-dark/70">
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex gap-8">
              <span>Fox River seafood since 1964</span>
              <span>Sunday champagne brunch</span>
              <span>Dockside returns Memorial Day weekend</span>
              <span>Call-first reservations</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-shell grid-cols-2 gap-px bg-ink-on-dark/15 px-4 md:grid-cols-4 md:px-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-ink px-4 py-6 md:px-6 md:py-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="font-display text-[42px] leading-none text-ink-on-dark md:text-[58px]">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-body-sm text-ink-on-dark/68">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
