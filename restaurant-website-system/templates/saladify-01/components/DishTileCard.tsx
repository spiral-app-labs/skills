import Link from 'next/link';
import type { CSSProperties } from 'react';

// DishTileCard — color-bg square tile + floating-dish-photo + name + price + `+` icon.
// Audit §11 — PROMOTE after 2nd consumer (pepper/future bowl templates).

export type DishTile = 'pink' | 'blue' | 'lime' | 'orange' | 'teal';

const tileBg: Record<DishTile, string> = {
  pink:   'bg-tile-pink',
  blue:   'bg-tile-blue',
  lime:   'bg-tile-lime',
  orange: 'bg-tile-orange',
  teal:   'bg-tile-teal',
};

interface Props {
  name: string;
  image: string;
  tile: DishTile;
  price?: number;
  ingredients?: string;
  href?: string;
  variant?: 'stacked' | 'horizontal';
  style?: CSSProperties;
}

export function DishTileCard({ name, image, tile, price, ingredients, href = '#', variant = 'stacked', style }: Props) {
  if (variant === 'horizontal') {
    return (
      <div style={style} className="flex items-center gap-5 group">
        <div className={`${tileBg[tile]} rounded-tile aspect-square w-28 md:w-32 grid place-items-center overflow-hidden shrink-0`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={name} className="w-[88%] h-[88%] object-cover rounded-full transition-transform group-hover:scale-105" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-2xl text-accent-brown leading-tight">{name}</h3>
          {ingredients && <p className="text-body-sm text-text-muted mt-1 line-clamp-2">{ingredients}</p>}
          {price !== undefined && <p className="mt-2 font-body text-price text-accent-brown">${price.toFixed(2)}</p>}
        </div>
      </div>
    );
  }
  return (
    <Link href={href} style={style} className="block group">
      <div className={`${tileBg[tile]} rounded-tile aspect-square grid place-items-center overflow-hidden relative`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-[82%] h-[82%] object-cover rounded-full transition-transform group-hover:scale-105" />
        <button
          type="button"
          aria-label={`Add ${name}`}
          className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-accent-green text-canvas-green grid place-items-center text-2xl leading-none shadow-lg hover:bg-accent-brown transition-colors"
        >
          +
        </button>
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-display text-dish-name text-accent-brown">{name}</h3>
        {price !== undefined && <p className="mt-1 font-body text-price text-accent-brown">${price.toFixed(2)}</p>}
      </div>
    </Link>
  );
}
