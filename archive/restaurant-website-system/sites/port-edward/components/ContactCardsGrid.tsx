'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';

export function ContactCardsGrid() {
  const { cards } = content.visitPage;

  return (
    <>
      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-shell px-4 md:px-12">
          <div className="mb-10 max-w-3xl">
            <LiveOpenStatus
              hours={content.brand.hoursConfig}
              variant="pill"
              className="mb-5 font-sans"
            />
            <p className="text-body text-ink-muted">{content.visitPage.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {cards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="border border-hairline bg-canvas p-6 transition-colors hover:border-accent md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
              >
                <p className="label-eyebrow mb-4 text-accent">{card.label}</p>
                <h3 className="mb-3 font-display text-[30px] leading-9 text-ink">{card.primary}</h3>
                <p className="text-body-sm text-ink-muted">{card.secondary}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas-dark py-16 text-ink-on-dark md:py-24">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-12">
          <div>
            <p className="label-eyebrow mb-4 text-brass">Restaurant Hours</p>
            <ul className="divide-y divide-ink-on-dark/15">
              {content.brand.hours.map((hours) => (
                <li key={hours.day} className="flex items-center justify-between gap-5 py-3">
                  <span className="font-display text-[20px]">{hours.day}</span>
                  <span className="text-right font-display text-[18px] text-ink-on-dark/78">{hours.range}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow mb-4 text-brass">Menu Service</p>
            <ul className="divide-y divide-ink-on-dark/15">
              {content.brand.menuServiceHours.map((hours) => (
                <li key={hours.day} className="flex items-center justify-between gap-5 py-3">
                  <span className="font-display text-[20px]">{hours.day}</span>
                  <span className="text-right font-display text-[18px] text-ink-on-dark/78">{hours.range}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-ink-on-dark/20 p-5">
              <p className="label-eyebrow mb-2 text-brass">{content.dockside.eyebrow}</p>
              <p className="text-body-sm text-ink-on-dark/78">{content.dockside.heading}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-shell px-4 md:px-12">
          <div className="overflow-hidden border border-hairline">
            <LiveMapEmbed
              address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
              lat={content.brand.geo.lat}
              lng={content.brand.geo.lng}
              zoom={15}
              mapLabel={content.brand.legalName}
              aspectRatio="21/9"
            />
          </div>
          <p className="mt-5 text-center text-body text-ink-muted">
            {content.brand.address.line1}, {content.brand.address.line2}
          </p>
        </div>
      </section>
    </>
  );
}
