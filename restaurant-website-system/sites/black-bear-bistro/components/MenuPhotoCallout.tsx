// Square food-photo callout that slots into the two-column menu grid at
// author-chosen positions. Intentional placement per audit §12.4 (the
// editorial feel requires irregular, not mechanical, photo intervals).
export function MenuPhotoCallout({
  src,
  alt,
  label,
  className = '',
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-card bg-canvas-alt shadow-[0_18px_50px_rgba(30,30,28,0.08)] ${className || 'aspect-square'}`}>
      {label && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-accent-soft px-3 py-1.5 text-[10px] font-bold uppercase leading-none text-ink">
          {label}
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="eager" decoding="async" className="h-full w-full object-cover" />
    </div>
  );
}
