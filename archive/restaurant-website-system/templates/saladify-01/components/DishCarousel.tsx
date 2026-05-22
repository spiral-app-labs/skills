'use client';

import { useRef } from 'react';
import { content } from '../content.example';
import { DishTileCard, type DishTile } from './DishTileCard';

// DishCarousel — 4-up horizontal-scroll dish row with paging arrows.
// Overflow bleed signals "more than fits." Sits directly below hero.
// Audit §11 — PROMOTE after 2nd consumer.

export function DishCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const page = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-section-h2 text-accent-brown max-w-xl">
            Fresh Favorites, Always In Rotation
          </h2>
          <div className="hidden md:flex gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => page(-1)}
              className="h-11 w-11 rounded-full border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-canvas-green transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => page(1)}
              className="h-11 w-11 rounded-full border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-canvas-green transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="dish-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 md:-mx-10 px-6 md:px-10 pb-2"
        >
          {content.dishCarousel.dishes.map((d) => (
            <div
              key={d.id}
              className="snap-start shrink-0 w-[72%] sm:w-[46%] md:w-[31%] lg:w-[23%]"
            >
              <DishTileCard name={d.name} image={d.image} tile={d.tile as DishTile} price={d.price} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
