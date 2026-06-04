'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

export function MailingListBlock() {
  const m = content.cateringCta;
  return (
    <section className="bg-bg-cream py-20 px-6 pb-36 md:pb-20">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-6"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: theme.motion.easing }}
      >
        <div className="space-y-1">
          <h2 className="font-display text-body-h3 text-text-dark" style={{ fontWeight: 300 }}>
            {m.title}
          </h2>
          <p className="text-body text-text-muted">{m.subtitle}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={m.primary.href}
            className="inline-flex min-h-11 items-center rounded-button bg-sauce-red px-6 text-button text-text-cream transition-colors hover:bg-[#73190f]"
          >
            {m.primary.label}
          </a>
          <a
            href={m.secondary.href}
            className="inline-flex min-h-11 items-center rounded-button border border-text-dark/25 px-6 text-button text-text-dark transition-colors hover:border-text-dark/60"
          >
            {m.secondary.label}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
