import Image from 'next/image';
import { content } from '../content.example';

/**
 * ContactPhotoRow — 3-photo horizontal row at top of /contact page.
 */
export function ContactPhotoRow() {
  return (
    <section className="bg-bg-white px-6 py-8 md:py-12">
      <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-3">
        {content.contactPage.photos.map((src, i) => (
          <div key={i} className="relative aspect-[16/10] rounded-card overflow-hidden md:aspect-[4/3]">
            <Image src={src} alt="" fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
