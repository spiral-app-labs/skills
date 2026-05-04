// LocationFinderStrip — horizontal photo tiles with city overlay + NumberedAccordion
// below. Per audit §11 promotion candidate for multi-unit / chain briefs.

import { NumberedAccordion } from './NumberedAccordion';
import { SectionHeading } from './SectionHeading';

type Tile = { title: string; body: string };
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
              key={t.title}
              className="flex aspect-[4/5] flex-col justify-between rounded-card border border-card-border bg-canvas-warm p-4"
            >
              <span className="inline-block w-fit bg-accent text-text-on-brand text-body-sm font-bold px-3 py-1 rounded-pill">
                {t.title}
              </span>
              <p className="mt-4 text-body-sm text-ink-soft">{t.body}</p>
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
