type Photo = { src: string; alt: string };

// ContactInteriorStrip — 4-photo bar-interior strip on /contact.
// Same family as CocktailPhotoRow but with landscape aspect ratios.
export function ContactInteriorStrip({ photos }: { photos: ReadonlyArray<Photo> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
