'use client';

import { content } from '../content.example';

/**
 * MenuCategoryRail — left category nav + right item rows for /menu page.
 * Audit §3: 2-column layout; dish name + description + right-aligned price.
 */
export function MenuCategoryRail() {
  const { categories, intro } = content.menuPage;

  return (
    <section className="w-full bg-canvas py-24 md:py-32">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <p className="max-w-prose-editorial text-body text-ink-muted mb-20">{intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Sticky category rail */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28 flex md:flex-col gap-6 flex-wrap">
              {categories.map((c) => (
                <a
                  key={c.label}
                  href={`#${c.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="label-eyebrow text-ink-muted hover:text-ink transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Item rows */}
          <div className="md:col-span-9 flex flex-col gap-20">
            {categories.map((c) => (
              <div key={c.label} id={c.label.toLowerCase().replace(/\s+/g, '-')}>
                <h2 className="text-section-h2-sm font-display text-ink mb-10">{c.label}</h2>
                <ul className="flex flex-col gap-8">
                  {c.items.map((it) => (
                    <li key={it.name} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 pb-6 border-b border-hairline">
                      <div className="flex-1">
                        <p className="font-display text-[24px] text-ink mb-2">{it.name}</p>
                        <p className="text-body-sm text-ink-muted">{it.description}</p>
                      </div>
                      <p className="font-display text-[22px] text-ink shrink-0">{it.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
