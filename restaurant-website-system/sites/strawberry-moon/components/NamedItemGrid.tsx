// NamedItemGrid — menu-page category-grouped list.
// Massive category headers + text rows with right-aligned metadata.

type Item = { name: string; desc: string; meta: string };
type Category = { title: string; items: ReadonlyArray<Item> };

export function NamedItemGrid({ categories }: { categories: ReadonlyArray<Category> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        {categories.map((cat, idx) => (
          <div key={cat.title} className={idx === 0 ? 'pb-16 md:pb-24' : 'py-16 md:py-24'}>
            <h2 className="text-display leading-[1.05] mb-10 md:mb-14">{cat.title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8">
              {cat.items.map((it) => (
                <li key={it.name} className="grid grid-cols-12 gap-4 items-baseline">
                  <div className="col-span-8">
                    <h3 className="text-h3">{it.name}</h3>
                    <p className="text-body text-ink/70 mt-1">{it.desc}</p>
                  </div>
                  <div className="col-span-4 text-right">
                    <span className="text-body text-ink/75">{it.meta}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
