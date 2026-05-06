'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

export function MailingListBlock() {
  const m = content.visitPlan;
  return (
    <section className="bg-bg-cream py-20 px-6">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 16 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {m.actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="px-4 py-3 rounded-button bg-text-dark text-text-cream hover:bg-black text-button transition-colors"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
