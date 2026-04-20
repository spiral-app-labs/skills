import { content } from '../content.example';
import { DishTileCard, type DishTile } from './DishTileCard';

// BestSellingRow — 3-up feature row on /menu. Uses color-tile cards.

export function BestSellingRow() {
  const { menuPage, dishCarousel } = content;
  const dishes = menuPage.bestSelling.ids
    .map((id) => dishCarousel.dishes.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section className="bg-canvas-green py-16 md:py-20">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <h2 className="font-display text-section-h2 text-accent-green mb-8">
          {menuPage.bestSelling.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((d) => (
            <DishTileCard
              key={d.id}
              name={d.name}
              image={d.image}
              tile={d.tile as DishTile}
              price={d.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
