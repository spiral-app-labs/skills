import { EyebrowDotLabel } from './EyebrowDotLabel';
import type { MenuItem } from './MenuListDotLeader';
import { content } from '../content.example';

/**
 * MenuCategoryGrid — 2×2 grid of menu categories on /menu page.
 */
export function MenuCategoryGrid() {
  const cats = content.menuPage.categories;
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-x-14 gap-y-16">
        {cats.map((cat) => (
          <div key={cat.title}>
            <EyebrowDotLabel className="mb-3">{cat.eyebrow}</EyebrowDotLabel>
            <h3 className="font-display text-section-h4 text-text-dark mb-6">{cat.title}</h3>
            <ul className="space-y-5">
              {cat.items.map((it: MenuItem) => (
                <li key={it.name}>
                  <div className="menu-dot-row">
                    <span className="font-display text-menu-item text-text-dark">{it.name}</span>
                    <span className="menu-dot-fill" aria-hidden />
                    <span className="font-body text-price text-text-dark">{it.price}</span>
                  </div>
                  {it.desc && <p className="mt-1 text-body-sm text-text-muted">{it.desc}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
