'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * TopTriptychHeader — button-center-button top header.
 *
 * LEFT: RESERVE outlined button.
 * CENTER: address in tracked-out small caps + LiveOpenStatus dot underneath.
 * RIGHT: MENU outlined button (scrolls to #menus).
 *
 * Different tone from floating pills — suits single-page / small-site designs.
 *
 * Aliveness retrofit (2026-04-20): LiveOpenStatus dot stacked under the address
 * label — hospitality-warm register loves the visible live indicator, and the
 * dot variant stays quiet enough not to fight the triptych symmetry.
 */
export function TopTriptychHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 md:h-20 text-text-cream bg-bg-dark/30 backdrop-blur-[2px]"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: theme.motion.easing }}
    >
      <Link
        href={content.brand.reservationUrl}
        target="_blank"
        rel="noreferrer"
        className="vp-soft-button px-4 py-2 rounded-button border border-text-cream/60 hover:bg-text-cream/10 text-button text-text-cream"
      >
        Reserve
      </Link>

      <div className="hidden sm:flex flex-col items-center gap-1">
        <p className="text-address text-text-cream">
          {content.brand.addressShort}
        </p>
        <LiveOpenStatus
          hours={content.brand.hoursConfig}
          variant="dot"
          className="text-address text-text-cream/80"
        />
      </div>

      <Link
        href={content.brand.menuUrl}
        className="vp-soft-button px-4 py-2 rounded-button border border-text-cream/60 hover:bg-text-cream/10 text-button text-text-cream flex items-center gap-2"
      >
        Menus
        <span className="flex flex-col gap-0.5">
          <span className="block w-3 h-px bg-text-cream" />
          <span className="block w-3 h-px bg-text-cream" />
        </span>
      </Link>
    </motion.header>
  );
}
