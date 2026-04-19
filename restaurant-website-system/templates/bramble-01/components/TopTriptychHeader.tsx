'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * TopTriptychHeader — button-center-button top header.
 *
 * LEFT: RESERVE outlined button.
 * CENTER: address in tracked-out small caps.
 * RIGHT: MENU outlined button (scrolls to #menus).
 *
 * Different tone from floating pills — suits single-page / small-site designs.
 */
export function TopTriptychHeader() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 md:h-20 text-text-cream"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: theme.motion.easing }}
    >
      <Link
        href={content.brand.reservationUrl}
        className="px-4 py-2 rounded-button border border-text-cream/60 hover:bg-text-cream/10 text-button text-text-cream transition-colors"
      >
        Reserve
      </Link>

      <p className="hidden sm:block text-address text-text-cream">
        {content.brand.addressShort}
      </p>

      <Link
        href="#menus"
        className="px-4 py-2 rounded-button border border-text-cream/60 hover:bg-text-cream/10 text-button text-text-cream transition-colors flex items-center gap-2"
      >
        Menu
        <span className="flex flex-col gap-0.5">
          <span className="block w-3 h-px bg-text-cream" />
          <span className="block w-3 h-px bg-text-cream" />
        </span>
      </Link>
    </motion.header>
  );
}
