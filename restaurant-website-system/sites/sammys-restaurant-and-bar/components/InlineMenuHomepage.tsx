import { content } from '../content.example';
import { DenseMenuColumns } from './DenseMenuColumns';

// InlineMenuHomepage — STRUCTURAL ARCHETYPE.
// The home page IS the menu. Orchestrates N consecutive DenseMenuColumns
// sections (Starters / Mains / Sides / Desserts / Drinks). No tease-and-
// route. Menu is the product. See audit §11 (promote-now structural).
export function InlineMenuHomepage() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-canvas">
      <span id="menu-heading" className="sr-only">Menu</span>
      {content.menu.map((section) => (
        <DenseMenuColumns key={section.id} section={section} />
      ))}
    </section>
  );
}
