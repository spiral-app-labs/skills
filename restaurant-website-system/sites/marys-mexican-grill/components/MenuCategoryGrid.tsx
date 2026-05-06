import { EyebrowDotLabel } from './EyebrowDotLabel';
import type { MenuItem } from './MenuListDotLeader';
import { content } from '../content.example';

/**
 * MenuCategoryGrid — 2×2 grid of menu categories on /menu page.
 */
export function MenuCategoryGrid() {
  const cats = content.menuPage.categories;
  return (
    <section className="bg-bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-x-14 gap-y-12 md:grid-cols-2 md:gap-y-16">
        {cats.map((cat) => (
          <div key={cat.title}>
            <EyebrowDotLabel className="mb-3">{cat.eyebrow}</EyebrowDotLabel>
            <h3 className="mb-5 font-display text-section-h4 text-text-dark md:mb-6">{cat.title}</h3>
            <ul className="space-y-4 md:space-y-5">
              {cat.items.map((it: MenuItem) => (
                <li key={it.name}>
                  <div className="menu-dot-row flex-col items-start gap-1.5 md:flex-row md:items-baseline md:gap-2">
                    <span className="font-display text-[24px] leading-tight text-text-dark md:text-menu-item">{it.name}</span>
                    <span className="menu-dot-fill hidden md:block" aria-hidden />
                    <span className="rounded-pill bg-bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[1px] text-text-muted md:bg-transparent md:px-0 md:py-0 md:text-price md:font-body md:normal-case md:tracking-normal md:text-text-dark">
                      {it.price}
                    </span>
                  </div>
                  {it.desc && <p className="mt-1 max-w-[32rem] text-body-sm text-text-muted">{it.desc}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
