'use client';
// InlineContactBlock — address + phone + email + hours on home.
// Two-location variant per audit §11 (Milan + Zürich).

import { motion } from 'framer-motion';
import { content } from '../content.example';

export function InlineContactBlock() {
  const { eyebrow, heading, locations } = content.contact;

  return (
    <section id="contact" className="py-20 lg:py-28 px-5 lg:px-12 border-t border-divider">
      <div className="mx-auto max-w-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-eyebrow text-accent mb-3 block">{eyebrow}</span>
          <h2 className="font-display text-section-h2 text-ink">{heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-5"
            >
              <h3 className="font-display text-3xl lg:text-4xl text-ink">{loc.name}</h3>
              <div className="space-y-1 text-body text-ink-muted">
                <p>{loc.address}</p>
                <p>
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                    {loc.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${loc.email}`} className="hover:text-accent transition-colors">
                    {loc.email}
                  </a>
                </p>
              </div>
              <dl className="text-body text-ink-muted space-y-1 pt-3 border-t border-divider">
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6">
                    <dt className="text-ink">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
