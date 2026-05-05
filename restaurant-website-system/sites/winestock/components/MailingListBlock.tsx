'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

export function MailingListBlock() {
  const m = content.mailingList;
  return (
    <section className="bg-bg-cream py-20 px-6">
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
        <div className="grid gap-3 text-left">
          {content.contactActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group rounded-card border border-text-dark/15 bg-white/70 p-4 transition-colors hover:bg-white"
            >
              <span className="flex items-center justify-between gap-4 text-button text-text-dark">
                {action.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="mt-2 block text-body-sm text-text-muted">{action.note}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
