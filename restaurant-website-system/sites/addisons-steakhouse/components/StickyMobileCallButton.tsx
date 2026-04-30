'use client';

import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { content } from '../content.example';

export function StickyMobileCallButton() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [240, 360], [0, 1]);
  const y = useTransform(scrollY, [240, 360], [18, 0]);

  return (
    <motion.div
      className="fixed bottom-5 left-5 z-40 md:hidden"
      style={prefersReduced ? undefined : { opacity, y }}
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
    >
      <Link
        href={content.reservationStrip.primaryCta.href}
        className="inline-flex min-h-12 items-center justify-center rounded-pill border border-accent bg-surface/95 px-5 text-button text-accent shadow-2xl backdrop-blur transition-colors hover:bg-accent hover:text-surface"
      >
        Call
      </Link>
    </motion.div>
  );
}
