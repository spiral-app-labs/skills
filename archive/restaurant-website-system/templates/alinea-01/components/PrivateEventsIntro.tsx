import Image from 'next/image';
import { content } from '../content.example';

/**
 * PrivateEventsIntro — left prose + right photo intro for /private-events.
 */
export function PrivateEventsIntro() {
  const i = content.privateEvents.intro;
  return (
    <section className="bg-canvas py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="prose-editorial max-w-prose-editorial">
          <p>{i.body}</p>
          <p>{i.body2}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={i.image} alt={i.imageAlt} fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
