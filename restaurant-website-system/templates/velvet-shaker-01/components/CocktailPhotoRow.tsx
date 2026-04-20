type Photo = { src: string; alt: string };

// CocktailPhotoRow — full-width 3–4-photo row of tight product shots.
// Acts as the true visual hero on the home page (the h1 above punts the moment).
export function CocktailPhotoRow({ photos }: { photos: ReadonlyArray<Photo> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10">
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
