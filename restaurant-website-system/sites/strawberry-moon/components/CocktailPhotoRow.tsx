import { CurtainImage } from './CurtainImage';

type Photo = { src: string; alt: string };

// CocktailPhotoRow — full-width 3–4-photo row of tight product shots.
// Acts as the true visual hero on the home page (the h1 above punts the moment).
// Each tile uses CurtainImage for a bottom-up reveal with staggered delay
// (mirrors the Framer source's whileInView pattern observed in DOM inspection).
export function CocktailPhotoRow({ photos }: { photos: ReadonlyArray<Photo> }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden bg-canvas">
              <CurtainImage src={p.src} alt={p.alt} from="top" delay={i * 0.08} eager={i < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
