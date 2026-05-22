import { content } from '../content.example';

// PhotoStripFooter — 6-up edge-to-edge dish photography strip above footer.
// Gallery-without-a-page pattern. Audit §11 — hold until 2nd consumer.

export function PhotoStripFooter() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
      {content.photoStrip.map((src, i) => (
        <div key={i} className="aspect-square overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
}
