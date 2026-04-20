'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  h1: string;
  photo: string;
  photoAlt: string;
  eyebrow?: string;
  overlay?: boolean;
};

/**
 * PageHero — 150px Imbue H1 page-opener used on /menu, /about, /contact.
 * Audit §4: 150px is the scale discipline locked across every entry page.
 * Variant: cream bg with photo below, OR photo with H1 overlaid in cream.
 */
export function PageHero({ h1, photo, photoAlt, eyebrow, overlay = true }: Props) {
  if (!overlay) {
    return (
      <section className="w-full bg-canvas">
        <div className="max-w-shell mx-auto px-6 md:px-12 pt-10 pb-20 md:pt-16 md:pb-24">
          {eyebrow && <p className="label-eyebrow text-ink-muted mb-6">{eyebrow}</p>}
          <motion.h1
            className="text-hero-h1 font-display text-ink"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1] }}
          >
            {h1}
          </motion.h1>
        </div>
        <div className="relative w-full aspect-[21/9]">
          <Image src={photo} alt={photoAlt} fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[85vh] min-h-[640px] overflow-hidden">
      <Image
        src={photo}
        alt={photoAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ filter: 'brightness(0.7) sepia(0.08)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
        {eyebrow && (
          <motion.p
            className="label-eyebrow text-ink-on-dark/80 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className="text-hero-h1 font-display text-ink-on-dark max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1], delay: 0.1 }}
        >
          {h1}
        </motion.h1>
      </div>
    </section>
  );
}
