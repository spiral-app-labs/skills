'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function SignOffBand() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden">
      <Image
        src={content.signOff.photo}
        alt={content.signOff.photoAlt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: 'brightness(0.72) saturate(0.9)' }}
      />
      <div className="absolute inset-0 bg-ink/35" />
      <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-4 text-center md:px-12">
        <motion.p
          className="label-eyebrow mb-5 text-ink-on-dark/75"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
        >
          Founder phrase worth preserving
        </motion.p>
        <motion.h2
          className="max-w-5xl font-display text-[50px] leading-[56px] text-ink-on-dark md:text-hero-h1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1], delay: 0.08 }}
        >
          {content.signOff.h1}
        </motion.h2>
      </div>
    </section>
  );
}
