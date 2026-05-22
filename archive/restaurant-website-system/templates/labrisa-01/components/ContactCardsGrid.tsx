'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';
import { LiveMapEmbed } from './LiveMapEmbed';

/**
 * ContactCardsGrid — 2 Call/Write cards + cocoa Opening Hours band + inset map.
 * Audit §3: card labels at 40px Imbue; hours band at 75px Imbue on cocoa.
 *
 * Aliveness retrofit (2026-04-20): the static Unsplash harbor placeholder
 * is replaced with LiveMapEmbed — the contact page's primary map surface
 * now geolocates to Saint-Tropez (brand.geo) with a Get-Directions CTA.
 */
export function ContactCardsGrid() {
  const { cards, hours } = content.contactPage;

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
          <div className="border border-hairline">
            <LiveMapEmbed
              address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
              lat={content.brand.geo.lat}
              lng={content.brand.geo.lng}
              zoom={15}
              mapLabel={content.brand.name}
              aspectRatio="21/9"
            />
          </div>
          <p className="text-body text-ink-muted text-center mt-6">
            {content.brand.address.line1}, {content.brand.address.line2}
          </p>
        </div>
      </section>
    </>
  );
}
