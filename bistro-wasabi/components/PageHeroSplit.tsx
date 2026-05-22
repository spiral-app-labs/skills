'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import type { ReactNode } from 'react';

/**
 * PageHeroSplit — qitchen-01's signature primitive.
 *
 * Two-column layout used on every page:
 *   LEFT  (60%): full-bleed image with overlaid display title at bottom-left.
 *   RIGHT (40%): page-specific content.
 *
 * On scrollable pages (menu), pass `stickyImage` to anchor the left column
 * while the right column scrolls — preserves the identity-image as a constant.
 *
 * On mobile (<768px), the layout stacks: image+title on top (60vh), content below.
 *
 * The display title fades up on load — part of the staged reveal sequence.
 */
export function PageHeroSplit({
  image,
  imageAlt,
  title,
  stickyImage = false,
  children,
}: {
  image: string;
  imageAlt: string;
  title: string;
  stickyImage?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="md:flex md:min-h-screen">
      {/* LEFT — image with overlaid title */}
      <div
        className={`md:w-[60%] h-[46svh] min-h-[360px] md:h-screen ${
          stickyImage ? 'md:sticky md:top-0' : ''
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />

          {/* Bottom scrim for title legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,11,10,0.18) 0%, rgba(10,11,10,0.0) 34%, rgba(10,11,10,0.88) 100%)',
            }}
          />

          {/* Page title — animated fade-up */}
          <motion.h1
            className="absolute bottom-7 md:bottom-12 left-6 md:left-10 max-w-[86vw] font-display text-text"
            style={{
              fontSize: 'clamp(48px, 9vw, 112px)',
              lineHeight: 0.85,
            }}
            initial={{ opacity: 0, y: theme.motion.revealLift }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: theme.motion.revealDuration,
              ease: theme.motion.easing,
              delay: theme.motion.revealStagger * 2,
            }}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* RIGHT — content */}
      <div className="md:w-[40%] md:h-screen md:overflow-y-auto bg-canvas">
        {children}
      </div>
    </div>
  );
}
