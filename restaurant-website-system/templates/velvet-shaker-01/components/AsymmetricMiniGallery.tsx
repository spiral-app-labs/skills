import { CurtainImage } from './CurtainImage';

type Tile = { src: string; alt: string; aspect: 'portrait' | 'landscape' };

// AsymmetricMiniGallery — 2 photos at different horizontal origins, no grid,
// loose gallery-wall feel. Left tile is portrait-offset-up, right tile is
// landscape-offset-down. Each reveals via CurtainImage; the right tile uses a
// delay so the eye reads left → right.
export function AsymmetricMiniGallery({
  left,
  right,
}: {
  left: Tile;
  right: Tile;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Left: portrait, offset down + narrower column */}
          <div className="col-span-5 md:col-span-3 md:col-start-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <CurtainImage src={left.src} alt={left.alt} from="bottom" />
            </div>
          </div>
          {/* Right: landscape, offset up + wider column */}
          <div className="col-span-7 md:col-span-6 md:col-start-6 md:mt-16">
            <div className="relative aspect-[16/10] overflow-hidden">
              <CurtainImage src={right.src} alt={right.alt} from="bottom" delay={0.15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
