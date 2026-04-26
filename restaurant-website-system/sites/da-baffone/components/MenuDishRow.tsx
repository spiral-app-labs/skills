// MenuDishRow — photo thumbnail + name + description + price. Hairline
// divider between rows (via .gusto-dish-row CSS). Editorial restaurant-menu
// treatment, not ecommerce-card.

import Image from 'next/image';

type Props = {
  name: string;
  desc: string;
  price: string;
  photo?: string;
};

export function MenuDishRow({ name, desc, price, photo }: Props) {
  return (
    <article className="gusto-dish-row group flex items-center gap-5 py-5">
      {photo && (
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md md:h-20 md:w-20">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="80px"
            className="object-cover transition duration-500 group-hover:scale-[1.05] group-hover:blur-[1px]"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h4 className="font-body text-[15px] font-medium text-ink transition-colors group-hover:text-accent-warm">
          {name}
        </h4>
        <p className="mt-1 font-body text-body-sm italic text-ink-muted line-clamp-2">
          {desc}
        </p>
      </div>
      <div className="flex-shrink-0 font-body text-[15px] font-medium text-ink">
        {price}
      </div>
    </article>
  );
}
