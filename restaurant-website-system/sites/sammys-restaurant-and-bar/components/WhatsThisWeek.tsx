'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';

// "What's on at Sammy's" — staggered reveal + hover-lift + rounded cards.
// Surfaces the standing dates regulars build their week around (per audit
// Block 2 secret-sauce signal 9 + Block 3 Principle 5.5).

export function WhatsThisWeek() {
  const { eyebrow, heading, sub, items } = content.whatsOn;

  return (
    <section
      id="whats-on"
      className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24 border-t border-divider"
    >
      <motion.div
        className="max-w-[68ch] mb-10 md:mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-eyebrow uppercase tracking-[0.16em] text-accent font-medium mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <p className="mt-4 text-body text-ink-muted">{sub}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.day + it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-card bg-canvas-alt p-6 border border-divider hover:-translate-y-1.5 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
          >
            <p className="text-eyebrow uppercase tracking-[0.16em] text-accent font-medium">
              {it.day}
            </p>
            <h3 className="mt-3 font-display text-section-h3 font-medium text-ink">
              {it.title}
            </h3>
            <p className="mt-2 text-body-sm text-ink-muted leading-snug">{it.body}</p>
            <p className="mt-4 text-body-sm font-medium text-ink">{it.time}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
