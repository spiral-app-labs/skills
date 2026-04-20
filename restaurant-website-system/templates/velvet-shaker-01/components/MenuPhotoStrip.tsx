type Photo = { src: string; alt: string };

// MenuPhotoStrip — thin cocktail photo strip under the "Cocktails" display header.
export function MenuPhotoStrip({ photos }: { photos: ReadonlyArray<Photo> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pb-10 md:pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
