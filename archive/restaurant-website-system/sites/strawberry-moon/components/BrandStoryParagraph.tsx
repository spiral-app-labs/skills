import { CurtainImage } from './CurtainImage';
import { StickyColumn } from './StickyColumn';

type Thumb = { src: string; alt: string };

// BrandStoryParagraph — centered long-form copy with 2–3 floated side
// thumbnails. Editorial-magazine opener rhythm. The thumbnail column is
// sticky on desktop so it pins while the paragraph scrolls past (mirrors
// Framer source's "Widget Wrap" sticky containers). On mobile the row stays
// inline. Each thumbnail uses a curtain reveal with stagger.
export function BrandStoryParagraph({
  paragraph,
  thumbnails,
}: {
  paragraph: string;
  thumbnails: ReadonlyArray<Thumb>;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-12 gap-5 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p className="text-body md:text-[18px] leading-[1.78] text-ink/92">{paragraph}</p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-9">
            <StickyColumn top={96} className="grid grid-cols-3 md:grid-cols-1 gap-3 md:gap-4">
              {thumbnails.slice(0, 3).map((t, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-canvas">
                  <CurtainImage src={t.src} alt={t.alt} from="top" delay={i * 0.1} />
                </div>
              ))}
            </StickyColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
