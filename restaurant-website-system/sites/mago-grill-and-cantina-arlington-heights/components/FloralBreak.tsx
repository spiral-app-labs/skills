import Image from 'next/image';
import { content } from '../content';

/**
 * FloralBreak — full-bleed photo break section.
 * Pure aesthetic pause between content blocks.
 * Generic utility — any template can use with any full-bleed photo.
 */
export function FloralBreak() {
  return (
    <section className="relative w-full h-[360px] md:h-[460px] overflow-hidden">
      <Image
        src={content.floralBreak.image}
        alt={content.floralBreak.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
