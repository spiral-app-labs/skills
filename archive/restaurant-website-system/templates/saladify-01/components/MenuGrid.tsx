'use client';

import { useState } from 'react';
import { content } from '../content.example';
import { DishTileCard, type DishTile } from './DishTileCard';
import { PillTabFilter } from './PillTabFilter';

// MenuGrid — 2-column DishTileCard grid with pill-tab category filter.
// Audit §3 /menu section. Template-specific layout; uses DishTileCard shared.

export function MenuGrid() {
  const { menuPage } = content;
  const categories = menuPage.allItems.categories;
  const [active, setActive] = useState<string>(categories[0]);
  const items = menuPage.allItems.items.filter((i) => i.category === active);

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h2 className="font-display text-section-h2 text-accent-brown">{menuPage.allItems.heading}</h2>
          <PillTabFilter categories={categories} active={active} onChange={setActive} />
        </div>

        {items.length === 0 ? (
          <p className="text-body text-text-muted py-12 text-center">No items in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {items.map((d) => (
              <DishTileCard
                key={d.name}
                name={d.name}
                image={d.image}
                tile={d.tile as DishTile}
                price={d.price}
                ingredients={d.ingredients}
                variant="horizontal"
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="#order"
            className="inline-flex items-center rounded-button bg-accent-orange px-10 py-4 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
          >
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
