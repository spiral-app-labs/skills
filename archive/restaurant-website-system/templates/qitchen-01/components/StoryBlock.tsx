'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * StoryBlock — about-page right-column story section.
 *
 * Headline + chef/scene image + body copy. Currently a single image
 * (qitchen has a chef carousel with arrows — left as a future variant
 * since carousels need real content to be worth implementing).
 */
export function StoryBlock() {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
    >
      <header className="flex items-center justify-center gap-4">
        <span className="block w-8 h-px bg-text-muted/40" />
        <h2 className="text-section-h2 text-text">{content.about.storyHeadline}</h2>
        <span className="block w-8 h-px bg-text-muted/40" />
      </header>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-square rounded-card overflow-hidden bg-surface">
          <Image
            src={content.about.storyImage}
            alt="Chef at work"
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover"
          />
        </div>
        <p className="text-body text-text-muted leading-relaxed">{content.about.story}</p>
      </div>
    </motion.section>
  );
}
