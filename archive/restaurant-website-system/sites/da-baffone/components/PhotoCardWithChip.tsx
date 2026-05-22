// PhotoCardWithChip — photo tile with a small cream-text chip label top-left.
// Turns a photo into a navigable category tile without heavy chrome.
// Shared promotion candidate (audit §11).

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  chip: string;
  photo: string;
  alt: string;
  href?: string;
  aspect?: 'square' | 'wide' | 'tall';
  className?: string;
};

const aspectClass = {
  square: 'aspect-square',
  wide:   'aspect-[4/3]',
  tall:   'aspect-[3/4]',
};

export function PhotoCardWithChip({
  chip,
  photo,
  alt,
  href,
  aspect = 'wide',
  className = '',
}: Props) {
  const body = (
    <div className={`group relative h-full w-full overflow-hidden rounded-card ${aspectClass[aspect]} ${className}`}>
      <Image
        src={photo}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover transition duration-700 group-hover:scale-[1.05]"
      />
      <span className="gusto-chip absolute left-4 top-4 inline-flex items-center rounded-chip px-3 py-1.5 font-body text-chip uppercase transition duration-500 group-hover:translate-x-1 group-hover:border-ink/25">
        {chip}
      </span>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full w-full">
      {body}
    </Link>
  ) : (
    body
  );
}
