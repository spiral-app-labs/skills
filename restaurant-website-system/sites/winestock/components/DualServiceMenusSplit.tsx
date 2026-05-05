'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

/**
 * DualServiceMenusSplit — "Food | menu-card-centerpiece | Drinks" tri-column.
 *
 * For dual-concept venues. Equal-billing means both services get the
 * same visual weight — no hierarchy implied.
 */
export function DualServiceMenusSplit() {
  const m = content.menus;
  return (
    <section id="menus" className="bg-bg-dark py-24 md:py-32 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: theme.motion.easing }}
      >
        <h2 className="text-center font-display text-address text-text-cream mb-16" style={{ fontWeight: 300 }}>
          {m.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          {/* LEFT: Food */}
          <div className="text-center md:text-right space-y-3">
            <h3 className="font-display text-section-label text-text-cream" style={{ fontWeight: 300 }}>
              {m.food.label}
            </h3>
            <Link href={m.food.pdfUrl} className="inline-block text-address text-text-cream/70 hover:text-text-cream transition-colors">
              View Menu →
            </Link>
          </div>

          {/* CENTER: menu card image (rendered like a printed card) */}
          <div className="relative aspect-[4/5] max-w-[320px] mx-auto shadow-2xl">
            <Image src={m.centerpieceImage} alt="Menu card" fill sizes="320px" className="object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-b from-black/30 via-transparent to-black/60">
              <span className="text-center font-display text-text-cream text-xl" style={{ fontWeight: 300 }}>{content.brand.wordmark}</span>
              <span className="text-center font-display text-text-cream text-3xl" style={{ fontWeight: 300 }}>LOUNGE</span>
            </div>
          </div>

          {/* RIGHT: Drinks */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="font-display text-section-label text-text-cream" style={{ fontWeight: 300 }}>
              {m.drinks.label}
            </h3>
            <Link href={m.drinks.pdfUrl} className="inline-block text-address text-text-cream/70 hover:text-text-cream transition-colors">
              View Menu →
            </Link>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href={m.fullMenuCta.href}
            className="inline-block px-7 py-3.5 rounded-button border border-text-cream/50 hover:bg-text-cream/10 text-button text-text-cream transition-colors"
          >
            {m.fullMenuCta.label}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
