import Link from 'next/link';

type Photo = { src: string; alt: string };

// CantFindBlock — /menu closer: "Can't find your drink?" heading (42px h2) +
// 2-photo side + link. Live mixology invitation.
export function CantFindBlock({
  heading,
  body,
  linkLabel,
  linkHref,
  photos,
}: {
  heading: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  photos: ReadonlyArray<Photo>;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-display-mid">{heading}</h2>
            <p className="text-body text-ink mt-6 max-w-md">{body}</p>
            <Link href={linkHref} className="vs-link inline-block mt-6 text-body underline underline-offset-4 decoration-ink/40">
              {linkLabel}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {photos.slice(0, 2).map((p, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
