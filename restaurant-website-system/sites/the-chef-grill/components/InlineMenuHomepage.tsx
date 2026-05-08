import { content } from '../content.example';
import { DenseMenuColumns } from './DenseMenuColumns';

// InlineMenuHomepage — STRUCTURAL ARCHETYPE.
// The home page IS the menu. Orchestrates N consecutive DenseMenuColumns
// sections (Starters / Mains / Sides / Desserts / Drinks). No tease-and-
// route. Menu is the product. See audit §11 (promote-now structural).
export function InlineMenuHomepage() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="scroll-mt-24 bg-canvas">
      <div className="max-w-plate mx-auto px-5 md:px-10 pt-8 md:pt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-y border-divider py-5">
          <div>
            <p className="text-eyebrow text-accent mb-2">Menu shortcut</p>
            <h2 id="menu-heading" className="font-display text-section-h3 font-medium text-ink">
              Jump straight to what guests ask for
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pb-1 md:max-w-[58%] md:flex-nowrap md:overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {content.menu.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-full border border-divider bg-canvas-alt px-4 py-2 text-body-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
              >
                {section.title.replace(' & Mixed Grills', '').replace(', Soups & Turkish Comfort', '').replace(', Ayran & Turkish Tea', '')}
              </a>
            ))}
          </div>
        </div>
      </div>
      {content.menu.map((section) => (
        <DenseMenuColumns key={section.id} section={section} />
      ))}
    </section>
  );
}
