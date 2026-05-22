'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';

/**
 * PageHero — secondary-page hero (Menu / About / Contact).
 *
 * Smaller than home's FullBleedHero. Image fills upper portion of viewport,
 * page title overlaid bottom-left in italic-on-serif format.
 */
export function PageHero({
  image,
  title,
  eyebrow,
}: {
  image: string;
  title: { upright: string; italic: string; layout?: 'inline' | 'stacked' };
  eyebrow?: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.30) 60%, rgba(13,27,42,0.0) 100%)',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        {eyebrow && (
          <motion.p
            className="text-eyebrow mb-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: 0.4 }}
        >
          <DH content={title} as="h1" size="page-md" italicColor={theme.color.accent} />
        </motion.div>
      </div>
    </section>
  );
}
