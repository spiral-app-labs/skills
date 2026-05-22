import Image from 'next/image';
import { content } from '../content.example';

/**
 * GalleryMasonryGrid — full gallery-page photo grid.
 * CSS columns for true masonry feel.
 */
export function GalleryMasonryGrid() {
  const photos = content.galleryPage.photos;
  return (
    <section className="bg-canvas py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="columns-2 md:columns-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid relative">
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'} overflow-hidden`}>
                <Image src={src} alt="" fill sizes="(min-width: 768px) 450px, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
