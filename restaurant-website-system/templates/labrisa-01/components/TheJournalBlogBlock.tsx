'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * TheJournalBlogBlock — "The Journal" heading + 3 article cards.
 * Audit §3.7 — editorial content-marketing block, photo-top card layout.
 */
export function TheJournalBlogBlock() {
  return (
    <section id="journal" className="w-full bg-canvas py-24 md:py-32">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="label-eyebrow text-ink-muted mb-4">{content.journal.eyebrow}</p>
            <h2 className="text-section-h2-lg font-display text-ink">{content.journal.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {content.journal.articles.map((a, i) => (
            <motion.article
              key={a.title}
              className="flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={a.photo}
                  alt={a.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="label-eyebrow text-ink-muted mb-3">{a.date}</p>
              <h3 className="font-display text-ink text-[28px] leading-tight mb-3">{a.title}</h3>
              <p className="text-body text-ink-muted">{a.snippet}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
