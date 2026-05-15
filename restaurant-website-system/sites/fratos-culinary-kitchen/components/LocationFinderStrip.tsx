// LocationFinderStrip — horizontal photo tiles with city overlay + NumberedAccordion
// below. Per audit §11 promotion candidate for multi-unit / chain briefs.

import { NumberedAccordion } from './NumberedAccordion';
import { SectionHeading } from './SectionHeading';

type Tile = { city: string; photo: string };
type AccordionRow = { title: string; body: string };

type Props = {
  heading: string;
  subhead?: string;
  tiles: Tile[];
  accordion: AccordionRow[];
  id?: string;
};

export function LocationFinderStrip({ heading, subhead, tiles, accordion, id }: Props) {
  return (
    <section id={id} className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeading heading={heading} subhead={subhead} />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {tiles.map((t) => (
            <div
              key={t.city}
              className="relative aspect-[4/5] rounded-card overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.photo} alt={t.city} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <span className="inline-block bg-accent text-text-on-brand text-body-sm font-bold px-3 py-1 rounded-pill">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <NumberedAccordion rows={accordion} />
        </div>
      </div>
    </section>
  );
}
