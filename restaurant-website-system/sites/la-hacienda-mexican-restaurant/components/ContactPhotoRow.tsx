import Image from 'next/image';
import { content } from '../content.example';

/**
 * ContactPhotoRow — 3-photo horizontal row at top of /contact page.
 */
export function ContactPhotoRow() {
  return (
    <section className="hidden md:block bg-bg-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-4">
        {content.contactPage.photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-card overflow-hidden">
            <Image src={src} alt="" fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
