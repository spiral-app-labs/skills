// DishCardGrid — 3-up white product cards. Round photo + name + desc + price.
// Signature cheap-ship menu surface for takeout templates. Promotion candidate
// per audit §11.

import { SectionHeading } from './SectionHeading';

type Dish = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
};

type Props = {
  heading: string;
  subhead?: string;
  dishes: Dish[];
  imageShape?: 'round' | 'square';
  cardSize?: 'md' | 'sm';
  orderHref?: string;
  id?: string;
};

export function DishCardGrid({ heading, subhead, dishes, imageShape = 'round', cardSize = 'md', orderHref, id }: Props) {
  const padding = cardSize === 'sm' ? 'p-5' : 'p-6';
  const titleSize = cardSize === 'sm' ? 'text-[22px] leading-[28px]' : 'text-card-title';
  const badgeShape = imageShape === 'round' ? 'rounded-full' : 'rounded-[28px]';

  return (
    <section id={id} className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeading heading={heading} subhead={subhead} />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((d) => (
            <article
              key={d.name}
              className={`bg-canvas border border-card-border rounded-card ${padding} shadow-card transition-transform hover:-translate-y-1`}
            >
              <div className={`mx-auto flex w-40 h-40 md:w-48 md:h-48 items-center justify-center bg-canvas-warm ${badgeShape}`}>
                <span className="max-w-[10rem] text-center text-[24px] leading-[30px] font-extrabold text-ink">
                  {d.tag || d.name}
                </span>
              </div>
              <h3 className={`mt-5 text-center font-extrabold text-ink ${titleSize}`}>{d.name}</h3>
              <p className="mt-2 text-center text-body-sm text-ink-soft">{d.desc}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-price font-extrabold text-ink">{d.price}</span>
                {orderHref ? (
                  <a
                    href={orderHref}
                    className="inline-flex items-center justify-center h-9 px-4 rounded-pill bg-ink text-text-on-dark text-button hover:bg-accent transition-colors"
                  >
                    Menu
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
