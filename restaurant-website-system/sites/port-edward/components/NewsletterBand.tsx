'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';

export function NewsletterBand() {
  return (
    <section className="w-full bg-canvas-dark py-16 text-ink-on-dark md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.p
              className="script-caption mb-3 text-[40px] leading-none text-brass md:text-[56px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
            >
              {content.newsletter.eyebrowScript}
            </motion.p>
            <motion.h2
              className="max-w-3xl font-display text-[42px] leading-[46px] text-ink-on-dark md:text-section-h2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.08 }}
            >
              {content.newsletter.heading}
            </motion.h2>
            <motion.p
              className="mt-5 max-w-2xl text-body text-ink-on-dark/78"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.16 }}
            >
              {content.newsletter.body}
            </motion.p>
          </div>

          <motion.div
            className="grid gap-3 md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.22 }}
          >
            <a
              href={content.brand.emailSignupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ink-on-dark px-5 py-4 text-button text-ink transition-opacity hover:opacity-90"
            >
              {content.newsletter.cta}
            </a>
            <a
              href={content.brand.giftCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-ink-on-dark/45 px-5 py-4 text-button text-ink-on-dark transition-colors hover:bg-ink-on-dark hover:text-ink"
            >
              Gift Cards
            </a>
            <a
              href={content.brand.loyaltyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-ink-on-dark/45 px-5 py-4 text-button text-ink-on-dark transition-colors hover:bg-ink-on-dark hover:text-ink"
            >
              Loyalty Rewards
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
