// DealCardStack — SIGNATURE pattern. 2x2 saturated-color deal cards with photo
// bleed on the right half, bullet inclusions, price + save + Order Now pill.
// Per audit §11 this is the primary reason to recreate pepper. Promotion
// candidate for any saturated-takeout template.

import { SectionHeading } from './SectionHeading';
import { content } from '../content.example';

type DealColor = 'deal-1' | 'deal-2' | 'deal-3' | 'deal-4';

type Deal = {
  name: string;
  inclusions: string[];
  price: string;
  save?: string;
  color: DealColor;
  photo: string;
};

type Props = {
  heading: string;
  subhead?: string;
  items: Deal[];
  id?: string;
};

const colorMap: Record<DealColor, { bg: string; text: string; bullet: string }> = {
  'deal-1': { bg: 'bg-accent-deal-1', text: 'text-white',     bullet: 'before:bg-white' },
  'deal-2': { bg: 'bg-accent-deal-2', text: 'text-ink',       bullet: 'before:bg-ink' },
  'deal-3': { bg: 'bg-accent-deal-3', text: 'text-white',     bullet: 'before:bg-white' },
  'deal-4': { bg: 'bg-accent-deal-4', text: 'text-white',     bullet: 'before:bg-white' },
};

export function DealCardStack({ heading, subhead, items, id }: Props) {
  return (
    <section id={id} className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeading heading={heading} subhead={subhead} />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((d) => {
            const c = colorMap[d.color];
            return (
              <article
                key={d.name}
                className={`relative overflow-hidden rounded-card ${c.bg} ${c.text} min-h-[260px] transition-transform hover:-translate-y-1`}
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="p-6 md:p-8 flex flex-col">
                    <h3 className="text-deal-title font-extrabold">{d.name}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {d.inclusions.map((row, i) => (
                        <li
                          key={i}
                          className={`relative pl-4 text-body-sm font-medium before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full ${c.bullet}`}
                        >
                          {row}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                      <a
                        href={content.nav.cta.href}
                        className="inline-flex items-center justify-center h-10 px-5 rounded-pill bg-ink text-text-on-dark text-button hover:bg-black transition-colors"
                      >
                        Order Now
                      </a>
                      <div className="text-right">
                        <div className="text-price font-extrabold">{d.price}</div>
                        {d.save ? (
                          <div className={`text-body-sm opacity-90`}>{d.save}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.photo}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
