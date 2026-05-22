'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

/**
 * InlineInfoSplit — 2-column Gift Cards / Careers style block on dark bg.
 * Reusable for any 2-block inline-info surface (gift cards, careers, events, private dining).
 */
export function InlineInfoSplit() {
  const items = content.infoColumns;
  return (
    <section className="bg-bg-dark px-6 py-20 md:py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:divide-x md:divide-text-cream/20">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className={`text-center space-y-5 ${i === 1 ? 'md:pl-12' : ''}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: theme.motion.easing, delay: i * 0.1 }}
          >
            <h3 className="font-display text-body-h3 text-text-cream" style={{ fontWeight: 300 }}>
              {item.title}
            </h3>
            <p className="text-body-sm text-text-muted-cream max-w-sm mx-auto leading-relaxed">
              {item.body}
            </p>
            <Link
              href={item.cta.href}
              className="inline-block px-6 py-3 rounded-button border border-text-cream/50 hover:bg-text-cream/10 text-button text-text-cream transition-colors"
            >
              {item.cta.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
