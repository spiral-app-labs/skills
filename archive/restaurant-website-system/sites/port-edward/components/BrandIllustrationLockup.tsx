'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function BrandIllustrationLockup() {
  const { welcome } = content;

  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:px-12">
        <motion.div
          className="relative min-h-[360px] overflow-hidden border border-hairline bg-hairline md:col-span-5 md:min-h-[520px]"
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          <Image
            src={welcome.photo}
            alt={welcome.photoAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="md:col-span-7 md:pl-8">
          <motion.p
            className="script-caption mb-2 text-[42px] leading-none text-accent md:text-[58px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          >
            {welcome.script}
          </motion.p>
          <motion.h2
            className="mb-7 max-w-3xl font-display text-[42px] leading-[46px] text-ink md:text-section-h2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.06 }}
          >
            The room is the reason people remember the meal.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-body text-ink-muted"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.12 }}
          >
            {welcome.body}
          </motion.p>

          <motion.svg
            viewBox="0 0 260 130"
            className="mt-10 w-full max-w-[360px] text-river"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: 0.18 }}
            aria-hidden="true"
          >
            <path d="M28 94c38 18 78 18 120 0 28-12 55-14 84-2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M66 70h74l-10 24H78L66 70Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <path d="M102 70V22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M102 25l44 45h-44V25Z" fill="currentColor" opacity="0.18" />
            <path d="M188 34v58" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M168 34h40l-7 58h-26l-7-58Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <path d="M188 16v36M170 34h36M176 22l24 24M200 22l-24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M42 112c18-8 36-8 54 0s36 8 54 0 36-8 54 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
