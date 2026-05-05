import Image from 'next/image';
import { content } from '../content.example';

/**
 * TimelessFooterSection — ramen-bowl photo with dark headline below.
 * Transitions from content into the dark ContactStripFooter.
 */
export function TimelessFooterSection() {
  const f = content.timelessFooter;
  return (
    <section className="bg-bg-dark relative">
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image src={f.image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark" />
      </div>
    </section>
  );
}
