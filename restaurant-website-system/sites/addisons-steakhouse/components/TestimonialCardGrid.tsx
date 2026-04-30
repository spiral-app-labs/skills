'use client';

import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * TestimonialCardGrid — 4-up testimonial cards with platform attribution.
 * Improvement on the 1776 original: includes platform name (Google / OpenTable / Yelp)
 * which the audit §7 noted as a missing credibility lift.
 */
export function TestimonialCardGrid() {
  const v = content.voicesOfExperience;
  return (
    <section className="bg-surface px-6 md:px-12 py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p className="text-eyebrow">{v.eyebrow}</p>
          <DH content={v.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {v.testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className="rounded-card bg-surface-alt border border-border/30 p-6 space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: i * 0.06 }}
            >
              <blockquote className="text-body text-text/90 leading-relaxed font-display italic" style={{ fontSize: '17px' }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center justify-between">
                <span className="text-body-sm text-text-muted">— {t.attribution}</span>
                <span className="text-micro text-accent/70">{t.platform}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
