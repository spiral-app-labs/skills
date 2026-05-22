import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';

export type MenuItem = { name: string; desc?: string; price: string };

/**
 * MenuListDotLeader — 2-column featured-menu block with dotted-leader prices.
 * Strong shared candidate. Used on home and menu pages.
 */
export function MenuListDotLeader({
  eyebrow,
  items,
  side = 'left',
  image,
  imageAlt = '',
  title,
}: {
  eyebrow: string;
  items: MenuItem[];
  side?: 'left' | 'right';
  image?: string;
  imageAlt?: string;
  title?: string;
}) {
  const list = (
    <div>
      <EyebrowDotLabel className="mb-4">{eyebrow}</EyebrowDotLabel>
      {title && <h3 className="font-display text-section-h3 text-text-dark mb-6">{title}</h3>}
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name}>
            <div className="menu-dot-row">
              <span className="font-display text-menu-item text-text-dark">{it.name}</span>
              <span className="menu-dot-fill" aria-hidden />
              <span className="font-body text-price text-text-dark">{it.price}</span>
            </div>
            {it.desc && <p className="mt-1 text-body-sm text-text-muted">{it.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
  const img = image ? (
    <div className="relative hidden aspect-[4/3] rounded-card overflow-hidden bg-bg-dark md:block md:aspect-[4/5]">
      <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 500px, 100vw" className="object-contain" />
    </div>
  ) : null;

  return (
    <section className="bg-bg-cream py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {side === 'left' ? (
          <>
            {list}
            {img}
          </>
        ) : (
          <>
            {img}
            {list}
          </>
        )}
      </div>
    </section>
  );
}
