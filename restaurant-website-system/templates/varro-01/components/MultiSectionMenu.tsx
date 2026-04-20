'use client';
// MultiSectionMenu — segmented-control nav + stacked category sections.
// MEATS & FISH / PIZZA / PASTA & RISOTTI / DESSERTS / SIDE DISHES.
// Distinct from qitchen's MenuList (text-led) and 1776's MenuTabbedList
// (pure tabs) — varro uses segmented-control jump-nav + full stacked sections.

import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function MultiSectionMenu() {
  const { sections } = content.menu;
  const [active, setActive] = useState(sections[0].id);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(`menu-section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-20 lg:py-28 px-5 lg:px-12">
      <div className="mx-auto max-w-page">
        {/* Segmented control */}
        <div className="mb-16 lg:mb-20 flex flex-wrap gap-2 justify-center">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`rounded-pill px-5 py-2.5 font-body text-sm uppercase tracking-wide transition-colors ${
                active === s.id
                  ? 'bg-accent text-cta'
                  : 'border border-divider text-ink-muted hover:border-accent hover:text-ink'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Grid of sections — 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              id={`menu-section-${section.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28"
            >
              <h3 className="font-display text-section-h3 text-ink mb-8 pb-4 border-b border-divider">
                {section.label}
              </h3>
              <ul className="space-y-6">
                {section.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="menu-row mb-1">
                      <span className="font-display text-xl uppercase text-ink tracking-tight">
                        {dish.name}
                      </span>
                      <span className="menu-row-fill" />
                      <span className="font-body text-base text-accent">{dish.price}</span>
                    </div>
                    <p className="text-body text-ink-muted max-w-md">{dish.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
