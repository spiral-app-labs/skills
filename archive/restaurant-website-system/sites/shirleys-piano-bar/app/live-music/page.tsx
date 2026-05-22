import Link from 'next/link';
import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { CocktailPhotoRow } from '../../components/CocktailPhotoRow';

export default function LiveMusicPage() {
  const l = content.liveMusic;

  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading eyebrow={l.eyebrow} heading={l.h1} subheading={l.intro} />
      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 pb-10 md:px-10 md:pb-16">
          <div className="border-y border-ink/22">
            {l.events.map((event, index) => (
              <article
                key={`${event.date}-${event.title}`}
                className={index === 0 ? 'py-7 md:py-9' : 'border-t border-ink/22 py-7 md:py-9'}
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <div className="text-h3">{event.shortDate}</div>
                    <div className="mt-2 text-body text-ink/70">{event.date}</div>
                    <div className="mt-1 text-body text-ink/62">{event.time}</div>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="text-display-mid leading-[1.08]">{event.title}</h2>
                    <p className="mt-4 max-w-2xl text-body leading-relaxed text-ink/74">{event.desc}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <Link href="/contact" className="vs-link text-body underline decoration-ink/40 underline-offset-4">
                      visit details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <p className="max-w-2xl text-body text-ink/70">
              A production version would preserve the venue's calendar-save and event-detail behavior while adding clearer performer style notes: all-request sing-along, singer-songwriter listening room, standards, pop, or high-energy piano bar.
            </p>
            <Link href={l.cta.href} className="bg-btn-bg px-5 py-3 text-body text-btn-ink transition-opacity hover:opacity-90">
              {l.cta.label}
            </Link>
          </div>
        </div>
      </section>
      <CocktailPhotoRow photos={content.home.cocktailPhotoRow} />
    </WordmarkBookendLayout>
  );
}
