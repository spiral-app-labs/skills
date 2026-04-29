import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { ContactFormPanel } from '../../components/ContactFormPanel';
import { CantFindBlock } from '../../components/CantFindBlock';

export default function PartiesPage() {
  const p = content.parties;

  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading eyebrow={p.eyebrow} heading={p.h1} subheading={p.intro} />

      <section className="w-full">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 px-5 pb-14 md:grid-cols-12 md:px-10 md:pb-20">
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.heroImage.src} alt={p.heroImage.alt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="border-y border-ink/22">
              {p.options.map((option, index) => (
                <div key={option.heading} className={index === 0 ? 'py-6' : 'border-t border-ink/22 py-6'}>
                  <h2 className="text-h3">{option.heading}</h2>
                  <p className="mt-3 text-body leading-relaxed text-ink/72">{option.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-4">
            <p className="text-body text-ink/70">customize the night</p>
            <h2 className="mt-4 text-display-mid leading-tight">The room can feel like it was written for your group.</h2>
            <p className="mt-6 text-body leading-relaxed text-ink/72">
              Review language points to the best party pitch: birthday groups after dinner, attentive bartenders, request moments, and a compact room that feels full fast.
            </p>
          </div>
          <div className="md:col-span-8">
            <ul className="border-y border-ink/22">
              {p.customizations.map((item, index) => (
                <li key={item} className={index === 0 ? 'py-5 text-h3' : 'border-t border-ink/22 py-5 text-h3'}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-4">
            <h2 className="text-display-mid leading-tight">Start with date, guest count, and the kind of songs you want in the room.</h2>
            <p className="mt-6 text-body leading-relaxed text-ink/72">
              This form is the prototype handoff. A live build can route into the venue's existing inquiry process or email workflow.
            </p>
          </div>
          <div className="md:col-span-8">
            <ContactFormPanel />
          </div>
        </div>
      </section>

      <CantFindBlock
        heading="Keep the night public or make it yours."
        body="Guests can arrive for the calendar, then discover that the same music-and-cocktail energy can become a birthday, company night, or full buyout."
        linkLabel="see this week's music"
        linkHref="/live-music"
        photos={content.menu.cantFind.photos}
      />
    </WordmarkBookendLayout>
  );
}
