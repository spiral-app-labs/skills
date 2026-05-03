'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

// 4-fact trust strip with count-up on numeric labels.
// Per restaurant-fork-improvement skill section 1.3 — surface the rating
// numbers as count-up animations triggered when the block enters viewport.
// Reduced-motion users see final numbers instantly.

function CountUp({ value, duration = 1200, decimals = 0, suffix = '', prefix = '' }: {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) { setN(value); return; }
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(node);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration, reduced]);

  return <span ref={ref}>{prefix}{n.toFixed(decimals)}{suffix}</span>;
}

// Parse a label string into either a count-up number or static text.
// Accepts formats like "4.5 ★", "500+", "$10–$20", "8 AM – 2 AM"
function renderLabel(label: string) {
  // Star rating: "4.5 ★"
  const star = label.match(/^([\d.]+)\s*★$/);
  if (star) return (<><CountUp value={parseFloat(star[1])} decimals={1} /> <span className="text-accent">★</span></>);
  // Just return raw for the non-numeric ones
  return label;
}

export function TrustStrip() {
  const { items } = content.trustStrip;
  return (
    <section className="bg-canvas-alt border-y border-divider">
      <div className="max-w-plate mx-auto px-5 md:px-10 py-7 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {items.map((it, i) => (
            <motion.div
              key={`${it.label}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-section-h3 font-medium text-ink">
                {renderLabel(it.label)}
              </p>
              <p className="mt-1.5 text-body-sm text-ink-muted leading-snug">{it.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
