// Square food-photo callout that slots into the two-column menu grid at
// author-chosen positions. Intentional placement per audit §12.4 (the
// editorial feel requires irregular, not mechanical, photo intervals).
export function MenuPhotoCallout({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-2">
      <div className="aspect-square overflow-hidden rounded-card bg-canvas-alt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
