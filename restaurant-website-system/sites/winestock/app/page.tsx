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
import { ScrollRevealScrapbook } from '../components/ScrollReveal';
import { LiveMapEmbed } from '../components/LiveMapEmbed';
import { VisitPlanner } from '../components/VisitPlanner';
import { TruthfulConcierge } from '../components/TruthfulConcierge';
import { content } from '../content';

// Aliveness retrofit (2026-04-20): below-hero sections wrapped in
// ScrollRevealScrapbook (drift rotation) to match the polaroid register.
// Hero + marquee stay unwrapped — they run their own motion.
// LiveMapEmbed injected between ContactStrip and MailingListBlock; bramble
// has no /contact route so the home page is the only address surface.

export default function HomePage() {
  return (
    <>
      <TopTriptychHeader />
      <main>
        <HeroSlideshow />
        {/* Tagline paragraph — sits on bg-dark strip between hero and polaroids */}
        <ScrollRevealScrapbook>
          <section className="bg-bg-dark py-14 px-6">
            <p className="max-w-2xl mx-auto text-center font-display text-tagline-h2 text-text-cream" style={{ fontWeight: 300 }}>
              {content.tagline.body}
            </p>
          </section>
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <section className="bg-bg-cream px-6 py-16 md:py-20 text-text-dark">
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div className="space-y-5 lg:sticky lg:top-24">
                <p className="text-address text-text-muted">Three reasons locals return</p>
                <h2 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
                  Market bottles, lounge nights, and boards for the table.
                </h2>
                <p className="text-body text-text-muted">
                  Winestock does not need a generic restaurant pitch. The sellable story is more specific:
                  a Cass Street room where people ask for pairing help, stay for music, and bring home something good.
                </p>
              </div>
              <div className="grid gap-4">
                {content.visitModes.map((mode) => (
                  <article key={mode.title} className="rounded-card border border-text-dark/15 bg-white/60 p-6 md:p-7">
                    <p className="text-address text-text-muted">{mode.eyebrow}</p>
                    <h3 className="mt-3 font-display text-body-h3 text-text-dark" style={{ fontWeight: 300 }}>{mode.title}</h3>
                    <p className="mt-3 text-body text-text-muted">{mode.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <section className="bg-bg-dark px-6 py-16 md:py-20 text-text-cream">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-center">
              <div className="border border-text-cream/20 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>4.9</p>
                <p className="text-address mt-2 text-text-muted-cream">Google rating snapshot</p>
              </div>
              <div className="border border-text-cream/20 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>52</p>
                <p className="text-address mt-2 text-text-muted-cream">Google reviews captured</p>
              </div>
              <div className="border border-text-cream/20 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>30</p>
                <p className="text-address mt-2 text-text-muted-cream">Highest-sort written reviews</p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 grid gap-4 md:grid-cols-3">
              {content.proofQuotes.map((item) => (
                <figure key={item.by} className="rounded-card bg-text-cream/[0.06] border border-text-cream/15 p-5">
                  <blockquote className="font-display text-[24px] leading-tight" style={{ fontWeight: 300 }}>
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-address text-text-muted-cream">{item.by}</figcaption>
                </figure>
              ))}
            </div>
            <p className="max-w-3xl mx-auto mt-10 text-center text-body text-text-muted-cream">
              Review themes repeat the same story: friendly owner and staff, live music, charcuterie boards,
              thoughtful wine picks, craft beer, and a relaxed local-room feeling on Woodstock Square.
            </p>
          </section>
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <PolaroidStrip />
        </ScrollRevealScrapbook>
        <HorizontalMarquee text="Opening Times" variant="dark-on-cream" />
        <ScrollRevealScrapbook>
          <OpeningTimesBlock />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <VisitPlanner />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <DualServiceMenusSplit />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <FloralBreak />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <InlineInfoSplit />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <TruthfulConcierge />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <SocialStripInline />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <ContactStrip />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <section className="bg-bg-cream px-6 py-10">
            <div className="max-w-3xl mx-auto">
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
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <MailingListBlock />
        </ScrollRevealScrapbook>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
