'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * JournalVignetteStrip — 4 square photos with La Belle Aurore French captions.
 *
 * Audit §6 + §11: scrapbook-drift rotation is the signature motion pattern;
 * each photo drifts between -3° and +5° (motion intensity 3). Captions are
 * script-italic in the script font, cocoa ink on cream.
 */
export function JournalVignetteStrip() {
  const drifts = [-3, 2, -2, 4];

  return (
    <section className="w-full bg-canvas pb-24 md:pb-32">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {content.vignettes.map((v, i) => (
            <motion.figure
              key={v.src}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 28, rotate: drifts[i] * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: drifts[i] }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: i * 0.1 }}
            >
              <div className="relative w-full aspect-square overflow-hidden bg-hairline">
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <figcaption className="script-caption text-[28px] md:text-[36px] text-ink mt-5 text-center">
                {v.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
