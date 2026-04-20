type Thumb = { src: string; alt: string };

// BrandStoryParagraph — centered long-form copy with 2–3 floated side thumbnails.
// Editorial-magazine opener rhythm.
export function BrandStoryParagraph({
  paragraph,
  thumbnails,
}: {
  paragraph: string;
  thumbnails: ReadonlyArray<Thumb>;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p className="text-body md:text-[18px] leading-relaxed text-ink">{paragraph}</p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-9 grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4">
            {thumbnails.slice(0, 3).map((t, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.src} alt={t.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
