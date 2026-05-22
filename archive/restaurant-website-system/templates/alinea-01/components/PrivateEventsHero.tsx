import Image from 'next/image';
import { content } from '../content.example';

/**
 * PrivateEventsHero — cinematic full-bleed photo + italic Garamond quote overlay.
 */
export function PrivateEventsHero() {
  const h = content.privateEvents.hero;
  return (
    <section className="relative w-full h-[60vh] min-h-[460px] bg-text overflow-hidden">
      <Image src={h.photo} alt={h.photoAlt} fill priority className="object-cover opacity-80" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      <div className="relative h-full flex items-end justify-center pb-20 px-6">
        <h1 className="font-display italic text-page-title text-text-strip text-center max-w-3xl leading-tight">
          {h.title}
        </h1>
      </div>
    </section>
  );
}
