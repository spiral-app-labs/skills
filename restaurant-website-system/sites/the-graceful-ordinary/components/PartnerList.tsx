'use client';

import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * PartnerList — local-partners attribution grid.
 * For farm-to-table restaurants where producer attribution matters.
 */
export function PartnerList() {
  const p = content.about.partners;
  return (
    <section className="bg-surface px-6 md:px-12 py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10 space-y-3">
          <p className="text-eyebrow">{p.eyebrow}</p>
          <DH content={p.heading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {p.list.map((partner) => (
            <motion.div
              key={partner.name}
              className="rounded-card bg-surface-alt border border-border/40 p-5"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: theme.motion.easing }}
            >
              <h3 className="font-display text-card-title text-text mb-1">{partner.name}</h3>
              <p className="text-body-sm text-text-muted">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
