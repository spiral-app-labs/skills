'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';

/**
 * TopTriptychHeader — button-center-button top header.
 *
 * LEFT: SHOWS button.
 * CENTER: address in tracked-out small caps.
 * RIGHT: BEER button.
 *
 * Different tone from floating pills — suits single-page / small-site designs.
 *
 */
export function TopTriptychHeader() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-text-cream sm:px-6 md:px-10 md:pt-0"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: theme.motion.easing }}
    >
      <div className="mx-auto flex max-w-fit flex-col items-center gap-2 rounded-card border border-text-cream/15 bg-black/30 px-3 py-2 backdrop-blur-[3px] sm:hidden">
        <div className="flex items-center justify-center gap-2">
          <Link
            href={content.brand.liveMusicUrl}
            className="rounded-button border border-text-cream/60 bg-black/45 px-3 py-2 text-button text-text-cream transition-colors hover:bg-black/60"
          >
            Shows
          </Link>
          <Link
            href={content.brand.beerMenuUrl}
            className="flex items-center gap-2 rounded-button border border-text-cream/60 bg-black/45 px-3 py-2 text-button text-text-cream transition-colors hover:bg-black/60"
          >
            Beer
            <span className="flex flex-col gap-0.5">
              <span className="block h-px w-3 bg-text-cream" />
              <span className="block h-px w-3 bg-text-cream" />
            </span>
          </Link>
        </div>
        <p className="text-address text-center text-text-cream/80">{content.brand.addressShort}</p>
      </div>

      <div className="hidden h-16 items-center justify-between md:h-20 sm:flex">
        <Link
          href={content.brand.liveMusicUrl}
          className="rounded-button border border-text-cream/60 bg-black/35 px-3 py-2 text-button text-text-cream transition-colors hover:bg-black/55 sm:px-4"
        >
          Shows
        </Link>

        <div className="flex flex-col items-center">
          <p className="text-address text-text-cream">{content.brand.addressShort}</p>
        </div>

        <Link
          href={content.brand.beerMenuUrl}
          className="flex items-center gap-2 rounded-button border border-text-cream/60 bg-black/35 px-3 py-2 text-button text-text-cream transition-colors hover:bg-black/55 sm:px-4"
        >
          Beer
          <span className="flex flex-col gap-0.5">
            <span className="block h-px w-3 bg-text-cream" />
            <span className="block h-px w-3 bg-text-cream" />
          </span>
        </Link>
      </div>
    </motion.header>
  );
}
