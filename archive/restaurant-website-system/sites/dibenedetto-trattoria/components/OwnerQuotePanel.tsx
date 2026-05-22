// OwnerQuotePanel — DiBenedetto-specific improvement #2.
//
// The audit's #2 "why are we rebuilding it" item: chef-owner Vittorio is the
// strongest single asset and the current site never names him. This panel
// surfaces his actual sign-off — "Mille Grazie. Vittorio." — as a
// load-bearing visual moment in italic Sorts Mill Goudy display, with a
// hairline rail under the signature. The phrase is verbatim from his
// Tripadvisor owner replies (Block 2 owner-voice phrase bank).

'use client';

import { motion, useReducedMotion } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function OwnerQuotePanel() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-shell px-4 pt-24 md:px-6">
      <motion.figure
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-3xl rounded-card border border-divider bg-surface/40 px-6 py-12 text-center md:px-12 md:py-16"
      >
        <span
          aria-hidden
          className="absolute left-1/2 top-6 -translate-x-1/2 font-display text-[64px] italic leading-none text-accent-warm/40"
        >
          “
        </span>

        <blockquote className="mt-4 font-display text-[34px] italic leading-tight text-ink md:text-[44px]">
          Mille grazie.
        </blockquote>

        <p className="mt-6 font-body text-body text-ink-muted">
          Thirteen years on Algonquin Road. The chef still cooks. The owner still
          walks the room. The kitchen still bends the menu when you ask.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-accent-warm/60" />

        <figcaption className="mt-5">
          <p className="font-display text-[20px] italic text-ink">
            Vittorio Di Benedetto
          </p>
          <p className="mt-1 font-body text-chip uppercase tracking-[0.16em] text-ink-quiet">
            Chef-Owner · Since 2012
          </p>
        </figcaption>
      </motion.figure>
    </section>
  );
}
