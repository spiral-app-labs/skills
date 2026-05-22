// NoPriceNamedList — home cocktail listing.
// Name-left (26px) + description-right (16px). NO prices — prices reserved for /menu.
// This two-tier reveal (experiential on home, commercial on menu) is a reusable pattern.
type Item = { name: string; desc: string };

export function NoPriceNamedList({ items }: { items: ReadonlyArray<Item> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <ul className="divide-y divide-ink/10">
            {items.map((it) => (
              <li key={it.name} className="py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-h3">{it.name}</h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="text-body text-ink/75">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
