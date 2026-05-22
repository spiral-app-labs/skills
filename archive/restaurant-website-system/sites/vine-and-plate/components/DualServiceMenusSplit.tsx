'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

function MenuList({
  label,
  items,
  align = 'right',
}: {
  label: string;
  items: readonly { name: string; detail: string; price: string }[];
  align?: 'left' | 'right';
}) {
  const textAlign = align === 'right' ? 'md:text-right' : 'md:text-left';

  return (
    <div className={`text-center ${textAlign} space-y-7`}>
      <h3 className="font-display text-section-label text-text-cream" style={{ fontWeight: 300 }}>
        {label}
      </h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex items-baseline justify-center gap-3 md:justify-between">
              <p className="text-address text-text-cream">{item.name}</p>
              <span className="text-address text-text-muted-cream">{item.price}</span>
            </div>
            <p className="text-body-sm text-text-muted-cream leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DualServiceMenusSplit() {
  const m = content.menus;
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="menus" className="bg-bg-dark py-24 md:py-32 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.96, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: theme.motion.easing }}
      >
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
          <p className="text-address text-text-muted-cream">{m.eyebrow}</p>
          <h2 className="font-display text-section-h1 text-text-cream" style={{ fontWeight: 300 }}>
            {m.title}
          </h2>
          <p className="text-body text-text-muted-cream">{m.body}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] gap-12 md:gap-10 items-center">
          <MenuList label={m.food.label} items={m.food.items} align="right" />

          <motion.div
            className="relative aspect-[4/5] w-full max-w-[280px] mx-auto shadow-2xl overflow-hidden rounded-card"
            whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.015 }}
            transition={{ duration: 0.4, ease: theme.motion.easing }}
          >
            <Image src={m.centerpieceImage} alt="A glass of red wine with grapes" fill sizes="280px" className="object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-b from-black/35 via-black/5 to-black/70">
              <span className="text-center font-display text-text-cream text-2xl" style={{ fontWeight: 300 }}>VINE</span>
              <span className="text-center font-display text-text-cream text-4xl" style={{ fontWeight: 300 }}>& PLATE</span>
            </div>
          </motion.div>

          <MenuList label={m.wine.label} items={m.wine.items} align="left" />
        </div>

        <div className="mt-14 flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={m.reserveCta.href}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button inline-block px-7 py-3.5 rounded-button bg-text-cream text-text-dark hover:bg-white text-button"
            >
              {m.reserveCta.label}
            </Link>
            <Link
              href={m.fullMenuCta.href}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button inline-block px-7 py-3.5 rounded-button border border-text-cream/50 hover:bg-text-cream/10 text-button text-text-cream"
            >
              {m.fullMenuCta.label}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {m.quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="vp-link-rail text-address text-text-muted-cream hover:text-text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
