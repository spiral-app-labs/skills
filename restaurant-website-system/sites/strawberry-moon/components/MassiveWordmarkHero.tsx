import Link from 'next/link';
import { content } from '../content';

export function MassiveWordmarkHero() {
  const b = content.brand;
  const heroImage = content.home.asymmetricGallery.right;

  return (
    <section className="w-full flex">
      <div className="mx-auto max-w-shell px-5 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.66fr)] gap-8 lg:gap-14 pt-8 pb-14 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 items-start">
        <div className="flex flex-col gap-7 md:gap-8">
          <p className="text-nav uppercase tracking-[0.18em] text-ink">
            Wauconda martini lounge · live music · red door on Main
          </p>
          <h1
            className="text-ink leading-[0.9] font-medium m-0 max-w-[10ch]"
            style={{ fontSize: 'clamp(64px, 11.8vw, 168px)', letterSpacing: '-0.035em' }}
          >
            {b.name}
          </h1>
          <div className="max-w-2xl space-y-5">
            <p className="text-[22px] md:text-[30px] leading-[1.08] text-ink">
              {b.tagline}
            </p>
            <p className="text-body md:text-[18px] leading-relaxed text-ink max-w-xl">
              First-come seating, martinis and wine from 4 pm, plus Thursday through Saturday live sets that keep the room warm without turning it into a shout-over-the-band bar.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={b.directionsHref} className="vs-link rounded-full border border-ink bg-ink px-5 py-3 text-[14px] lowercase text-canvas">
              get directions
            </Link>
            <Link href={b.eventsPage} target="_blank" rel="noreferrer" className="vs-link rounded-full border border-ink/25 px-5 py-3 text-[14px] lowercase text-ink">
              see live music
            </Link>
            <a href={b.phoneHref} className="vs-link rounded-full border border-ink/25 px-5 py-3 text-[14px] lowercase text-ink">
              call {b.phone}
            </a>
          </div>
        </div>

        <div className="relative min-h-[330px] overflow-hidden rounded-[34px] border border-ink/10 bg-ink/5 shadow-[0_24px_80px_rgba(35,21,18,0.16)] md:min-h-[500px] lg:mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-canvas">
            <div className="max-w-md rounded-[22px] bg-ink p-4 shadow-[0_18px_60px_rgba(0,0,0,0.36)] md:p-5">
              <p className="text-[13px] uppercase tracking-[0.18em] text-canvas">{b.googleSummary}</p>
              <p className="mt-3 max-w-sm text-[24px] leading-tight md:text-[32px]">
                Cozy two-level lounge energy, not a generic bar page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
