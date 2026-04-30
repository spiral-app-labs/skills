'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function JournalVignetteStrip() {
  const drifts = [-1.5, 1, -1, 1.5];

  return (
    <section className="w-full bg-canvas pb-16 md:pb-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-eyebrow mb-3 text-accent">Secret sauce</p>
            <h2 className="font-display text-[42px] leading-[46px] text-ink md:text-section-h2">
              Fox River heritage, not resort polish
            </h2>
          </div>
          <p className="max-w-md text-body-sm text-ink-muted">
            The visual system should show the actual institution: river, Dockside, brunch, rooms, and staff warmth.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {content.vignettes.map((v, i) => (
            <motion.figure
              key={v.src}
              className="flex flex-col"
              initial={{ opacity: 0, y: 28, rotate: drifts[i] * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: drifts[i] }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-hairline">
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="script-caption mt-4 text-[28px] leading-8 text-ink">
                {v.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
