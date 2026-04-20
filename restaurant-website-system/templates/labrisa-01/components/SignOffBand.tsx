'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

/**
 * SignOffBand — closing full-bleed food photo + "À Bientôt by the Riviera"
 * 150px Imbue headline in cream overlaid on warm dark photography.
 * Audit §3.9 — brand sign-off before footer.
 */
export function SignOffBand() {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
      <Image
        src={content.signOff.photo}
        alt={content.signOff.photoAlt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: 'brightness(0.65) sepia(0.1)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
        <motion.h2
          className="text-hero-h1 font-display text-ink-on-dark max-w-5xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.44, 0, 0.56, 1] }}
        >
          {content.signOff.h1}
        </motion.h2>
      </div>
    </section>
  );
}
