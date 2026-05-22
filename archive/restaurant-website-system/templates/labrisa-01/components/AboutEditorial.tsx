'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * AboutEditorial — /about page body: 75px Imbue pull-quote + editorial prose
 * + "Moments by the Saint-Tropez Seaside" photo strip with scrapbook drift.
 */
export function AboutEditorial() {
  const { pullQuote, prose, moments } = content.aboutPage;
  const drifts = [-2, 3, -3];

  return (
    <section className="w-full bg-canvas py-24 md:py-32">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <motion.blockquote
          className="max-w-4xl mx-auto text-section-h2 font-display text-ink text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1] }}
        >
          &ldquo;{pullQuote}&rdquo;
        </motion.blockquote>

        <div className="prose-editorial max-w-prose-editorial mx-auto mb-24 md:mb-32">
          {prose.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <h2 className="text-section-h2 font-display text-ink text-center mb-16">
          {moments.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {moments.photos.map((p, i) => (
            <motion.figure
              key={p.src}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 28, rotate: drifts[i] * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: drifts[i] }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: i * 0.1 }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-hairline">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
              </div>
              <figcaption className="script-caption text-[28px] text-ink mt-5">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
