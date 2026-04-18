'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * ThumbnailNavGrid — qitchen-01's homepage right-column primitive.
 *
 * Vertical stack of photo cards that act as both a visual gallery AND
 * quick-jump nav to other pages. Each card has a small label + arrow icon
 * in its bottom-right.
 *
 * Cards stagger-fade in as the last step of the load-in sequence.
 */
export function ThumbnailNavGrid() {
  const items = content.thumbnailNav;

  return (
    <div className="flex flex-col h-full gap-2 p-2">
      {items.map((item, i) => (
        <motion.div
          key={item.href + i}
          className="md:flex-1 md:min-h-[120px] h-[28vh] md:h-auto"
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: theme.motion.revealDuration,
            ease: theme.motion.easing,
            delay: theme.motion.revealStagger * (3 + i * 0.5),
          }}
        >
          <Link
            href={item.href}
            className="group relative block w-full h-full overflow-hidden rounded-card border border-border/40"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="40vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle bottom scrim for label legibility */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none bg-gradient-to-t from-canvas/80 to-transparent" />
            {/* Label + arrow */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <span className="text-ui-label text-text">{item.label}</span>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-surface/80 border border-border/60 text-text">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8m0 0L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
