'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content, links } from '../content';

/**
 * MenuList — qitchen-01's menu-page right-column primitive.
 *
 * Tier-grouped list with a small thumbnail per item.
 * Each section: centered title in Forum 32px caps with thin underline divider,
 * followed by item rows: thumbnail | name + description + price.
 *
 * Borderless rows separated by spacing only — no card chrome on items
 * (cohesion-locked per audit §12.4).
 */
export function MenuList() {
  return (
    <div className="px-8 md:px-10 py-12 md:py-16 space-y-16">
      <motion.header
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <div className="flex items-center justify-center gap-4">
          <span className="block w-8 h-px bg-text-muted/40" />
          <h2 className="text-section-h2 text-text">Current range</h2>
          <span className="block w-8 h-px bg-text-muted/40" />
        </div>
        <p className="text-body text-text-muted leading-relaxed text-center">
          {content.menu.intro}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={links.tock}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-pill border border-text/70 bg-text px-4 py-3 text-center text-ui-label text-canvas transition-colors hover:bg-text/90"
          >
            Reserve
          </a>
          <a
            href={links.carryOut}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-pill border border-border/70 bg-surface px-4 py-3 text-center text-ui-label text-text transition-colors hover:bg-surface-hover"
          >
            Carry Out
          </a>
        </div>
      </motion.header>
      {content.menu.sections.map((section) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          {/* Section header — centered with thin divider */}
          <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="block w-8 h-px bg-text-muted/40" />
              <h2 className="text-section-h2 text-text">{section.title}</h2>
              <span className="block w-8 h-px bg-text-muted/40" />
            </div>
          </header>

          {/* Items */}
          <ul className="space-y-5">
            {section.items.map((item, i) => (
              <li
                key={item.name + i}
                className="flex items-center gap-4"
              >
                {/* Thumbnail */}
                <div className="relative shrink-0 w-20 h-12 rounded-sm overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="text-item-name text-text">{item.name}</h3>
                    <span className="text-item-name text-text shrink-0">{item.price}</span>
                  </div>
                  <p className="text-body text-text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
