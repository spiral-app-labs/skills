import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';

/**
 * GalleryPreviewGrid — 6-photo square-ish teaser with a link-out to the full gallery.
 */
export function GalleryPreviewGrid() {
  const g = content.galleryPreview;
  return (
    <section className="bg-canvas py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div />
          <Link href={g.linkHref} className="font-display italic text-section-h3 text-text hover:opacity-70 transition-opacity">
            {g.label} »
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {g.photos.map((p, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 380px, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
