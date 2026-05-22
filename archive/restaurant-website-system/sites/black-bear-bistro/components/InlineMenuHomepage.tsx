import { content } from '../content.example';
import { DenseMenuColumns } from './DenseMenuColumns';

// InlineMenuHomepage — STRUCTURAL ARCHETYPE.
// The home page IS the menu. Orchestrates N consecutive DenseMenuColumns
// sections (Starters / Mains / Sides / Desserts / Drinks). No tease-and-
// route. Menu is the product. See audit §11 (promote-now structural).
export function InlineMenuHomepage() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-canvas pb-14 md:pb-20">
      <div className="max-w-plate mx-auto px-5 md:px-10 pb-4 md:pb-6">
        <div id="menu-heading" className="text-eyebrow text-accent">Our menu</div>
      </div>
      {content.menu.map((section, index) => (
        <DenseMenuColumns key={section.id} section={section} index={index} />
      ))}
    </section>
  );
}
