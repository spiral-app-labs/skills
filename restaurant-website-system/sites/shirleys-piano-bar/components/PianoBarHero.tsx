import Link from 'next/link';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

export function PianoBarHero() {
  const h = content.home;
  const b = content.brand;

  return (
    <section className="relative min-h-[calc(100vh-74px)] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={h.heroImage.src}
        alt={h.heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.68]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,9,12,0.94)_0%,rgba(18,9,12,0.72)_42%,rgba(18,9,12,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-74px)] max-w-shell flex-col px-5 pb-10 pt-12 md:px-10 md:pb-14">
        <div className="max-w-5xl">
          <p className="text-body text-ink/78">{h.heroEyebrow}</p>
          <h1
            className="mt-5 max-w-5xl font-medium leading-[0.92] text-ink"
            style={{ fontSize: 'clamp(54px, 12vw, 180px)', letterSpacing: '-0.012em' }}
          >
            {h.heroH1}
          </h1>
        </div>

        <div className="mt-auto grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-md text-body leading-relaxed text-ink/86">{h.heroSub}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              {h.heroCtas.map((cta, index) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    index === 0
                      ? 'bg-btn-bg px-5 py-3 text-body text-btn-ink transition-opacity hover:opacity-90'
                      : 'vs-link px-0 py-3 text-body underline decoration-ink/40 underline-offset-4'
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="border-y border-ink/22 py-5">
              <div className="text-micro text-ink/62">tonight</div>
              <h2 className="mt-2 text-h3">{content.home.events.items[0].title}</h2>
              <p className="mt-2 text-body text-ink/74">{content.home.events.items[0].date} · {content.home.events.items[0].time}</p>
              <div className="mt-4 text-body text-ink/70">
                <LiveOpenStatus
                  hours={{
                    timezone: b.hoursConfig.timezone,
                    ranges: [...b.hoursConfig.ranges],
                    closures: [...b.hoursConfig.closures],
                  }}
                  variant="text"
                  className="inline-flex lowercase"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
