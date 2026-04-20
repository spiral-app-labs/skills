/**
 * MenuCategoryCard — cream card with category label pill + priced item rows
 * (name · description · price). Child of MenuCategoryStack.
 */

type Item = { name: string; desc?: string; price: string };

type Props = {
  label: string;
  items: Item[];
};

export function MenuCategoryCard({ label, items }: Props) {
  return (
    <div className="bg-card rounded-card p-6 md:p-8 border border-divider/50">
      <span className="inline-flex rounded-chip bg-canvas px-3 py-1 text-category-label text-ink border border-divider mb-6">
        {label}
      </span>
      <ul className="flex flex-col gap-5">
        {items.map((it) => (
          <li key={it.name} className="flex items-baseline gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-item-name text-ink">{it.name}</span>
                <span className="text-price text-ink whitespace-nowrap">{it.price}</span>
              </div>
              {it.desc ? (
                <p className="text-item-desc text-ink-muted mt-1">{it.desc}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
