'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * NewsletterBand — full-bleed cocoa band, cream text + script eyebrow
 * "Rendez-Vous Émails". Audit §4 disambiguated this as NEWSLETTER (not
 * reminder-booking). Form is email-only; uses Inter utility sans for the
 * input (Geist substitute).
 */
export function NewsletterBand() {
  return (
    <section className="w-full bg-canvas-dark py-24 md:py-32">
      <div className="max-w-shell mx-auto px-6 md:px-12 text-center text-ink-on-dark">
        <motion.p
          className="script-caption text-[36px] md:text-[56px] mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          {content.newsletter.eyebrowScript}
        </motion.p>

        <motion.h2
          className="text-section-h2 font-display text-ink-on-dark max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.1 }}
        >
          {content.newsletter.heading}
        </motion.h2>

        <motion.p
          className="text-body text-ink-on-dark/80 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.2 }}
        >
          {content.newsletter.body}
        </motion.p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder={content.newsletter.placeholder}
            className="flex-1 bg-transparent border border-ink-on-dark/40 text-ink-on-dark placeholder:text-ink-on-dark/50 px-5 py-4 text-[15px] focus:outline-none focus:border-ink-on-dark"
          />
          <button
            type="submit"
            className="bg-ink-on-dark text-ink text-button px-6 py-4 hover:opacity-90 transition-opacity"
          >
            {content.newsletter.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
