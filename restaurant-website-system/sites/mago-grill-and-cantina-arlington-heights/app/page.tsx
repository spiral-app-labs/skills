import Link from 'next/link';
import { TopTriptychHeader } from '../components/TopTriptychHeader';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { PolaroidStrip } from '../components/PolaroidStrip';
import { HorizontalMarquee } from '../components/HorizontalMarquee';
import { OpeningTimesBlock } from '../components/OpeningTimesBlock';
import { DualServiceMenusSplit } from '../components/DualServiceMenusSplit';
import { FloralBreak } from '../components/FloralBreak';
import { InlineInfoSplit } from '../components/InlineInfoSplit';
import { SocialStripInline, ContactStrip } from '../components/SocialStripInline';
import { MailingListBlock } from '../components/MailingListBlock';
import { BrambleWordmarkFooter } from '../components/BrambleWordmarkFooter';
import { ScrollRevealScrapbook, ScrollRevealStandard } from '../components/ScrollReveal';
import { LiveMapEmbed } from '../components/LiveMapEmbed';
import { content } from '../content';

function MobileActionBar() {
  const actions = [
    { label: 'Call', href: content.brand.callUrl },
    { label: 'Directions', href: content.brand.directionsUrl },
    { label: 'Reserve', href: content.brand.reservationUrl },
    { label: 'Order', href: content.brand.orderUrl },
    { label: 'Group', href: content.brand.groupDiningUrl },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-text-cream/20 bg-bg-dark/95 text-text-cream shadow-2xl backdrop-blur md:hidden"
      aria-label="Primary mobile actions"
    >
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="flex min-h-14 flex-1 items-center justify-center px-1 text-center text-[11px] font-semibold"
        >
          {action.label}
        </Link>
      ))}
    </nav>
  );
}

export default function HomePage() {
  return (
    <>
      <TopTriptychHeader />
      <main className="pb-14 md:pb-0">
        <HeroSlideshow />

        <ScrollRevealScrapbook>
          <section className="bg-bg-dark px-6 py-14">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <p className="font-display text-tagline-h2 text-text-cream" style={{ fontWeight: 300 }}>
                {content.tagline.body}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {content.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-button border border-text-cream/25 px-3 py-1.5 text-address text-text-muted-cream"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </ScrollRevealScrapbook>

        <ScrollRevealScrapbook>
          <PolaroidStrip />
        </ScrollRevealScrapbook>

        <HorizontalMarquee text="Margaritas / Moles / Tacos / Tequila" variant="dark-on-cream" />

        <ScrollRevealStandard>
          <OpeningTimesBlock />
        </ScrollRevealStandard>

        <ScrollRevealScrapbook>
          <DualServiceMenusSplit />
        </ScrollRevealScrapbook>

        <ScrollRevealScrapbook>
          <FloralBreak />
        </ScrollRevealScrapbook>

        <ScrollRevealStandard>
          <section className="bg-bg-cream px-6 py-20 text-text-dark md:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div className="space-y-4">
                <p className="text-address text-text-muted">{content.story.eyebrow}</p>
                <h2 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
                  {content.story.title}
                </h2>
              </div>
              <div className="space-y-5">
                <p className="text-body leading-relaxed text-text-dark">{content.story.body}</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {content.story.notes.map((note) => (
                    <p key={note} className="rounded-card border border-text-dark/15 bg-white/55 p-4 text-body-sm text-text-muted">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollRevealStandard>

        <ScrollRevealScrapbook>
          <InlineInfoSplit />
        </ScrollRevealScrapbook>

        <ScrollRevealStandard>
          <section className="bg-bg-dark px-6 py-20 text-text-cream md:py-24">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div className="space-y-4">
                <p className="text-address text-text-muted-cream">Guest proof</p>
                <h2 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
                  Review themes worth seeing first
                </h2>
              </div>
              <div className="grid gap-4">
                {content.reviews.map((review) => (
                  <article key={review.title} className="rounded-card border border-text-cream/20 p-5">
                    <h3 className="font-display text-body-h3" style={{ fontWeight: 300 }}>
                      {review.title}
                    </h3>
                    <p className="mt-3 text-body text-text-muted-cream">{review.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollRevealStandard>

        <ScrollRevealScrapbook>
          <SocialStripInline />
        </ScrollRevealScrapbook>

        <ScrollRevealScrapbook>
          <ContactStrip />
        </ScrollRevealScrapbook>

        <ScrollRevealStandard>
          <section className="bg-bg-cream px-6 py-10">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="space-y-3 text-text-dark">
                <h2 className="font-display text-body-h3" style={{ fontWeight: 300 }}>
                  {content.location.title}
                </h2>
                <p className="text-body text-text-muted">{content.location.body}</p>
              </div>
              <LiveMapEmbed
                address={content.brand.address}
                lat={content.brand.geo.lat}
                lng={content.brand.geo.lng}
                zoom={15}
                mapLabel={content.brand.name}
                aspectRatio="16/9"
              />
            </div>
          </section>
        </ScrollRevealStandard>

        <ScrollRevealScrapbook>
          <MailingListBlock />
        </ScrollRevealScrapbook>
      </main>
      <BrambleWordmarkFooter />
      <MobileActionBar />
    </>
  );
}
