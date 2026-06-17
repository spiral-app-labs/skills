'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

export function MailingListBlock() {
  const m = content.mailingList;
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
        <form
          className="flex gap-2 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={m.placeholder}
            className="flex-1 px-4 py-3 rounded-button bg-white border border-text-dark/20 text-body text-text-dark placeholder:text-text-muted focus:outline-none focus:border-text-dark/60 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-button bg-text-dark text-text-cream hover:bg-black text-button transition-colors"
          >
            {m.cta}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
