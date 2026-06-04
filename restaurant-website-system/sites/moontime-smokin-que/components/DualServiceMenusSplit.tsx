'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * DualServiceMenusSplit — bramble tri-column adapted for BBQ menu scanning.
 */
export function DualServiceMenusSplit() {
  const m = content.menus;
  return (
    <section id="menus" className="bg-bg-dark py-24 md:py-32 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: theme.motion.easing }}
      >
        <h2 className="text-center font-display text-address text-brass mb-16" style={{ fontWeight: 300 }}>
          {m.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          <div className="text-center md:text-right space-y-3">
            <h3 className="font-display text-section-label text-text-cream" style={{ fontWeight: 300 }}>
              {m.food.label}
            </h3>
            <ul className="space-y-1 text-body text-text-muted-cream">
              {m.food.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={m.food.pdfUrl} className="inline-block text-address text-brass hover:text-text-cream transition-colors">
              Order from Toast
            </Link>
          </div>

          <div className="group relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-card shadow-2xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1">
            <img
              src={m.centerpieceImage}
              alt={m.centerpieceAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-bg-dark/60 via-transparent to-bg-dark/80 p-5">
              <span className="text-center font-display text-xl text-text-cream" style={{ fontWeight: 300 }}>
                {content.brand.name}
              </span>
              <span className="text-center font-display text-3xl text-text-cream" style={{ fontWeight: 300 }}>
                BBQ MENU
              </span>
            </div>
          </div>

          <div className="text-center md:text-left space-y-3">
            <h3 className="font-display text-section-label text-text-cream" style={{ fontWeight: 300 }}>
              {m.drinks.label}
            </h3>
            <ul className="space-y-1 text-body text-text-muted-cream">
              {m.drinks.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={m.drinks.pdfUrl} className="inline-block text-address text-brass hover:text-text-cream transition-colors">
              Order from Toast
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-body text-text-muted-cream">
          {m.sauceNote}
        </p>

        <div className="mt-14 text-center">
          <Link
            href={m.fullMenuCta.href}
            className="inline-block rounded-button bg-sauce-red px-7 py-3.5 text-button text-text-cream transition-colors hover:bg-[#73190f]"
          >
            {m.fullMenuCta.label}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
