'use client';
// SubPageHero — lean hero for /menu, /about, /contact real routes.
// Kept minimal since home is the single-page surface (per audit §3).

import { motion } from 'framer-motion';

export function SubPageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-40 pb-20 lg:pt-52 lg:pb-24 px-5 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-page text-center"
      >
        <h1 className="font-display text-hero-display text-ink mb-6">{title}</h1>
        <p className="text-body-lg text-ink-muted max-w-2xl mx-auto">{subtitle}</p>
      </motion.div>
    </section>
  );
}
