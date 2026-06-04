import { content } from '../content.example';

/**
 * FloralBreak — full-bleed photo break section.
 * Pure aesthetic pause between content blocks.
 * Generic utility — any template can use with any full-bleed photo.
 */
export function FloralBreak() {
  return (
    <section className="relative w-full h-[360px] md:h-[460px] overflow-hidden">
      <img
        src={content.floralBreak.image}
        alt={content.floralBreak.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: content.floralBreak.position }}
      />
    </section>
  );
}
