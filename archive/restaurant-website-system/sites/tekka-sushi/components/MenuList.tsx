'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

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
    <div className="w-full overflow-hidden px-5 md:px-10 py-12 md:py-16 space-y-16">
      {content.menu.sections.map((section, sIdx) => (
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
          <ul className="w-full overflow-hidden space-y-6 sm:space-y-5">
            {section.items.map((item, i) => (
              <li
                key={item.name + i}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
              >
                {/* Thumbnail */}
                <div className="relative shrink-0 w-full h-28 sm:w-20 sm:h-12 rounded-sm overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                {/* Body */}
                <div className="w-full min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h3 className="text-item-name text-text break-words">{item.name}</h3>
                    <span className="text-item-name text-text shrink-0">{item.price}</span>
                  </div>
                  <p className="text-body text-text-muted break-words">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
