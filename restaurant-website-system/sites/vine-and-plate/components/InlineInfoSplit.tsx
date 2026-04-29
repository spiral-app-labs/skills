'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * InlineInfoSplit — 2-column Gift Cards / Careers style block on dark bg.
 * Reusable for any 2-block inline-info surface (gift cards, careers, events, private dining).
 */
export function InlineInfoSplit() {
  const items = [content.giftCards, content.careers];
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="bg-bg-dark px-6 py-20 md:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:divide-x md:divide-text-cream/20">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className={`text-center space-y-5 ${i === 1 ? 'md:pl-12' : ''}`}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.96, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: theme.motion.easing, delay: prefersReducedMotion ? 0 : i * 0.1 }}
          >
            <h3 className="font-display text-body-h3 text-text-cream" style={{ fontWeight: 300 }}>
              {item.title}
            </h3>
            <p className="text-body-sm text-text-muted-cream max-w-sm mx-auto leading-relaxed">
              {item.body}
            </p>
            <Link
              href={item.cta.href}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button inline-block px-6 py-3 rounded-button border border-text-cream/50 hover:bg-text-cream/10 text-button text-text-cream"
            >
              {item.cta.label}
            </Link>
            {'secondaryCta' in item ? (
              <Link
                href={item.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="vp-link-rail mx-auto text-address text-text-muted-cream hover:text-text-cream transition-colors"
              >
                {item.secondaryCta.label}
              </Link>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
