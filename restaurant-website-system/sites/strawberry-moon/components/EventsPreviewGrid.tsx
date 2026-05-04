type EventItem = { src: string; alt: string; caption?: string };

// EventsPreviewGrid — 3-up photo grid under a lowercase "check what's happening" label.
// Photos carry the intrigue; captions are small/optional.
// PROMOTION CANDIDATE — reusable for any venue with ongoing programming.
export function EventsPreviewGrid({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<EventItem>;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-16 md:py-24">
        <p className="text-body text-ink mb-6 md:mb-10">{label}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <figure key={i} className="w-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              {it.caption && (
                <figcaption className="mt-3 text-micro text-ink/70">{it.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
