'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function CenterDishPhoto() {
  const { feature } = content;

  return (
    <section className="w-full bg-canvas pb-16 md:pb-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <motion.div
          className="relative min-h-[360px] overflow-hidden border border-hairline bg-hairline md:min-h-[520px]"
          initial={{ opacity: 0, scale: 1.01 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1] }}
        >
          <Image
            src={feature.photo}
            alt={feature.alt}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 max-w-xl bg-canvas p-6 md:bottom-8 md:left-8 md:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.16 }}
          >
            <p className="label-eyebrow mb-3 text-accent">{feature.eyebrow}</p>
            <p className="font-display text-[28px] leading-9 text-ink md:text-card-h3">{feature.caption}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
