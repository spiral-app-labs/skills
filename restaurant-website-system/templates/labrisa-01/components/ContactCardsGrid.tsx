'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * ContactCardsGrid — 2 Call/Write cards + cocoa Opening Hours band + inset map.
 * Audit §3: card labels at 40px Imbue; hours band at 75px Imbue on cocoa.
 */
export function ContactCardsGrid() {
  const { cards, hours, map } = content.contactPage;

  return (
    <>
      <section className="w-full bg-canvas py-24 md:py-32">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {cards.map((c, i) => (
              <motion.article
                key={c.label}
                className="border border-hairline p-10 md:p-14"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
              >
                <p className="label-eyebrow text-ink-muted mb-6">{c.label}</p>
                <h3 className="text-card-h3 font-display text-ink mb-3">{c.primary}</h3>
                <p className="text-body text-ink-muted">{c.secondary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas-dark py-24 md:py-32">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <h2 className="text-section-h2 font-display text-ink-on-dark mb-12 text-center">
            {hours.heading}
          </h2>
          <ul className="max-w-xl mx-auto divide-y divide-ink-on-dark/15">
            {content.brand.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-4 text-ink-on-dark">
                <span className="font-display text-[20px]">{h.day}</span>
                <span className="font-display text-[18px] text-ink-on-dark/80">{h.range}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-canvas py-24 md:py-32">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="relative w-full aspect-[21/9] overflow-hidden border border-hairline">
            <Image src={map.src} alt={map.alt} fill sizes="100vw" className="object-cover" style={{ filter: 'sepia(0.15) saturate(0.9)' }} />
          </div>
          <p className="text-body text-ink-muted text-center mt-6">
            {content.brand.address.line1}, {content.brand.address.line2}
          </p>
        </div>
      </section>
    </>
  );
}
