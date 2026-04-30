'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * MenuTabbedList — tabbed text-led editorial menu.
 * Tab pills horizontally, then per-tab section: name + intro + item rows.
 * Item row: name (display) + description (body-sm muted) + price (right-aligned display).
 */
export function MenuTabbedList() {
  const tabs = content.menu.tabs as readonly string[];
  const [active, setActive] = useState<string>(tabs[0]);

  const section = content.menu.sections[active as keyof typeof content.menu.sections];

  return (
    <section className="px-6 md:px-12 py-16 md:py-20 max-w-[1100px] mx-auto">
      {/* Tab pills */}
      <LayoutGroup>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const selected = active === tab;
            return (
              <motion.button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden px-5 py-2.5 rounded-pill text-button border transition-colors ${
                  selected
                    ? 'border-accent text-surface'
                    : 'border-border/60 text-text-muted hover:text-text hover:border-text/40'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="active-menu-tab"
                    className="absolute inset-0 rounded-pill bg-accent"
                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Active section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: theme.motion.easing }}
        >
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-display text-section-h2 text-text">{active}</h2>
            <p className="text-body-sm text-text-muted">{section.intro}</p>
          </div>

          <motion.ul
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.045 } }, hidden: {} }}
          >
            {section.items.map((item) => (
              <motion.li
                key={item.name}
                className="group border-b border-border/30 pb-5 last:border-0"
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.35, ease: theme.motion.easing }}
              >
                <div className="flex items-baseline gap-4 mb-1.5">
                  <h3 className="font-display text-card-title text-text transition-colors group-hover:text-accent">{item.name}</h3>
                  <span className="flex-1 border-b border-dashed border-border/40 mb-1 transition-colors group-hover:border-accent/60" />
                  <span className="font-display text-card-title text-accent shrink-0">{item.price}</span>
                </div>
                <p className="text-body-sm text-text-muted max-w-2xl">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>

      <p className="mt-12 text-body-sm text-text-subtle text-center max-w-2xl mx-auto rounded-card bg-surface border border-border/30 px-6 py-4">
        {content.menu.disclosure}
      </p>
    </section>
  );
}
