'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';
import { HoursTable } from './HoursTable';

// Closing "Come grab a bite at Plate" block.
// 2-column: photo-left / copy + CTAs + hours-table-right.
export function ContactCtaClosing() {
  const { heading, subcopy, cta, secondaryCta, photo, hours } = content.closing;
  return (
    <section id="book" className="max-w-plate mx-auto px-5 md:px-10 py-20 md:py-28">
      <motion.div
        className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <div className="aspect-[4/5] overflow-hidden rounded-card bg-canvas-alt">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="font-display text-section-h2 font-medium text-ink whitespace-pre-line">
            {heading}
          </h2>
          <p className="mt-4 max-w-[46ch] text-body text-ink-muted">{subcopy}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <div className="mt-10 max-w-[360px]">
            <h3 className="text-eyebrow text-ink-muted mb-2">Hours</h3>
            <HoursTable hours={hours} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
