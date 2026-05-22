'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * ServiceTypeSelector — 3-up "Main Reservation / Dine at Home / Private Dining".
 *
 * Audit §6 + §11: PROMOTE-NOW primitive. First catalog template to treat
 * service type as the primary selector (not party-size/time). Unlocks the
 * entire multi-revenue-stream venue register.
 *
 * Cream cards on cream canvas — tone-on-tone with hairline border, outline
 * button per card. Route each card to its own flow (modal or page) in prod.
 */
export function ServiceTypeSelector() {
  return (
    <section id="reserve" className="w-full bg-canvas pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <div className="max-w-prose-editorial mb-16 md:mb-20">
          <p className="label-eyebrow text-ink-muted mb-4">{content.services.eyebrow}</p>
          <h2 className="text-section-h2-lg font-display text-ink">{content.services.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.services.items.map((s, i) => (
            <motion.article
              key={s.id}
              className="flex flex-col border border-hairline bg-canvas hover:bg-hairline/30 transition-colors"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={s.photo}
                  alt={s.label}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5">
                <h3 className="text-card-h3 font-display text-ink">{s.label}</h3>
                <p className="text-body text-ink-muted">{s.body}</p>
                <Link
                  href={s.href}
                  className="mt-2 self-start border border-ink text-ink text-button px-5 py-3 hover:bg-ink hover:text-ink-on-dark transition-colors"
                >
                  {s.cta}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
