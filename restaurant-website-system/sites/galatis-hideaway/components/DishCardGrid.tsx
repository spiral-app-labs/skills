// DishCardGrid — 3-up white product cards. Round photo + name + desc + price.
// Signature cheap-ship menu surface for takeout templates. Promotion candidate
// per audit §11.
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

type Dish = {
  name: string;
  desc: string;
  price: string;
  photo: string;
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
  const prefersReducedMotion = useReducedMotion();
  const shape = imageShape === 'round' ? 'rounded-full' : 'rounded-card';
  const padding = cardSize === 'sm' ? 'p-5' : 'p-6';
  const titleSize = cardSize === 'sm' ? 'text-[22px] leading-[28px]' : 'text-card-title';

  return (
    <section id={id} className="bg-canvas">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <SectionHeading heading={heading} subhead={subhead} />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((d, i) => {
            // Alternate tilt direction by column for playful variety.
            const tilt = prefersReducedMotion ? 0 : i % 2 === 0 ? 1.5 : -1.5;
            return (
              <motion.article
                key={d.name}
                whileHover={prefersReducedMotion ? undefined : { y: -6, rotate: tilt }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className={`bg-canvas border border-card-border rounded-card ${padding} shadow-card`}
              >
                <div className="mx-auto w-40 h-40 md:w-48 md:h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.photo}
                    alt={d.name}
                    className={`w-full h-full object-cover ${shape}`}
                  />
                </div>
                <h3 className={`mt-5 text-center font-extrabold text-ink ${titleSize}`}>{d.name}</h3>
                <p className="mt-2 text-center text-body-sm text-ink-soft">{d.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-price font-extrabold text-ink">{d.price}</span>
                  {orderHref ? (
                    <a
                      href={orderHref}
                      className="inline-flex items-center justify-center h-9 px-4 rounded-pill bg-ink text-text-on-dark text-button hover:bg-accent transition-colors"
                    >
                      Order
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
