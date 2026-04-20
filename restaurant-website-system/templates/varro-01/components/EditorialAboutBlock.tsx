'use client';
// EditorialAboutBlock — label + long-form body + wide landscape photo.
// Asymmetric: label-left, body-right (stacks mobile). Per audit §3.

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function EditorialAboutBlock() {
  const { eyebrow, heading, paragraphs, image, imageAlt } = content.about;

  return (
    <section id="about" className="py-24 lg:py-36 px-5 lg:px-12">
      <div className="mx-auto max-w-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-eyebrow text-accent mb-4 block">{eyebrow}</span>
            <h2 className="font-display text-section-h2 text-ink">{heading}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 lg:pt-4"
          >
            <div className="space-y-5 text-body-lg text-ink-muted max-w-prose-editorial">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[21/9] overflow-hidden rounded-card"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
