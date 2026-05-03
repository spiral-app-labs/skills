// Square food-photo callout that slots into the two-column menu grid at
// author-chosen positions. Intentional placement per audit §12.4 (the
// editorial feel requires irregular, not mechanical, photo intervals).
export function MenuPhotoCallout({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-2 group">
      <div className="aspect-square overflow-hidden rounded-image bg-canvas-alt shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
    </div>
  );
}
