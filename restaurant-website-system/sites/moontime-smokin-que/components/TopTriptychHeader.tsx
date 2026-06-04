'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

/**
 * TopTriptychHeader — button-center-button top header.
 *
 * LEFT: brand wordmark.
 * CENTER: address in tracked-out small caps + LiveOpenStatus dot underneath.
 * RIGHT: compact menu anchor.
 *
 * Different tone from floating pills — suits single-page / small-site designs.
 *
 * Aliveness retrofit (2026-04-20): LiveOpenStatus dot stacked under the address
 * label — hospitality-warm register loves the visible live indicator, and the
 * dot variant stays quiet enough not to fight the triptych symmetry.
 */
export function TopTriptychHeader() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between px-5 text-text-cream md:h-20 md:px-10"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: theme.motion.easing }}
    >
      <Link
        href="/"
        className="max-w-[52vw] truncate font-display text-2xl leading-none text-text-cream md:text-3xl"
        style={{ fontWeight: 300 }}
      >
        {content.brand.name}
      </Link>

      <div className="hidden flex-col items-center gap-1 lg:flex">
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
        href="#menus"
        className="flex min-h-10 items-center gap-2 rounded-button border border-text-cream/60 px-3 text-button text-text-cream transition-colors hover:bg-text-cream/10 md:hidden"
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
