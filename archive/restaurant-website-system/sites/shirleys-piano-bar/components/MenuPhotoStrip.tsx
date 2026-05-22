import { CurtainImage } from './CurtainImage';

type Photo = { src: string; alt: string };

// MenuPhotoStrip — thin cocktail photo strip under the "Cocktails" display header.
// Curtain reveal with stagger so each tile peels in.
export function MenuPhotoStrip({ photos }: { photos: ReadonlyArray<Photo> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pb-10 md:pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <CurtainImage src={p.src} alt={p.alt} from="top" delay={i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
