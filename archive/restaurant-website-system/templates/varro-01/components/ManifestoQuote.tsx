'use client';
// ManifestoQuote — centered display pull-quote with optional ornament.
// "THE TABLE IS THE CENTER OF LIFE" — philosophical branding moment.
// Shared candidate per audit §11.

import { motion } from 'framer-motion';
import { content } from '../content.example';

export function ManifestoQuote() {
  const { line1, line2, ornament } = content.manifesto;

  return (
    <section className="py-28 lg:py-40 px-5 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9 }}
        className="mx-auto max-w-4xl text-center flex flex-col items-center"
      >
        {ornament && (
          <span
            aria-hidden
            className="text-accent text-2xl mb-8 tracking-[0.4em]"
          >
            ✦
          </span>
        )}
        <blockquote className="font-display text-section-h2 text-ink leading-[0.95]">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
        </blockquote>
      </motion.div>
    </section>
  );
}
