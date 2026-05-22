import { content } from '../content';
import { MenuCategoryCard } from './MenuCategoryCard';
import { ProductPhotoCard } from './ProductPhotoCard';

/**
 * MenuCategoryStack — the template's defining pattern (audit §11, STRONG
 * shared candidate / PROMOTE-NOW). Multi-category priced menu rendered as N
 * blocks, alternating L/R card/photo (zigzag rhythm).
 *
 * Variant axes (future shared): category-count, layout zigzag / photo-top /
 * card-only, price-alignment, with/without category-pill overlay on photo.
 */
export function MenuCategoryStack() {
  const m = content.menu;
  return (
    <section id="menu" className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="text-eyebrow-sm text-ink-muted mb-2">{m.eyebrow}</p>
          <h2 className="font-sans text-section-h2 text-ink">{m.heading}</h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {m.categories.map((cat, i) => {
            const photoFirst = i % 2 === 1; // zigzag: block 2, 4 get photo-left
            return (
              <div
                key={cat.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
              >
                {photoFirst ? (
                  <>
                    <ProductPhotoCard
                      src={cat.photo.src}
                      alt={cat.photo.alt}
                      pillLabel={cat.label}
                      aspect="portrait"
                    />
                    <MenuCategoryCard label={cat.label} items={cat.items} />
                  </>
                ) : (
                  <>
                    <MenuCategoryCard label={cat.label} items={cat.items} />
                    <ProductPhotoCard
                      src={cat.photo.src}
                      alt={cat.photo.alt}
                      pillLabel={cat.label}
                      aspect="portrait"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
