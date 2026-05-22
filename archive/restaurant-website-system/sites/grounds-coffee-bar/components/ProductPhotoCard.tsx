import Image from 'next/image';

/**
 * ProductPhotoCard — rounded wood-staged product photo with optional
 * category-pill overlay (audit §4). Child of MenuCategoryStack but reusable.
 */

type Props = {
  src: string;
  alt: string;
  pillLabel?: string;
  aspect?: 'square' | 'portrait' | 'landscape';
};

const aspectMap = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
};

export function ProductPhotoCard({ src, alt, pillLabel, aspect = 'portrait' }: Props) {
  return (
    <div className={`group relative w-full ${aspectMap[aspect]} rounded-photo overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {pillLabel ? (
        <span className="absolute top-4 left-4 inline-flex rounded-chip bg-card/90 backdrop-blur-sm px-3 py-1 text-category-label text-ink">
          {pillLabel}
        </span>
      ) : null}
    </div>
  );
}
