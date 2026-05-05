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
          <section className="bg-bg-cream px-6 py-14 md:py-16 text-text-dark">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-center">
              <div className="border border-text-dark/15 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>4.9</p>
                <p className="text-address mt-2">Google rating snapshot</p>
              </div>
              <div className="border border-text-dark/15 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>52</p>
                <p className="text-address mt-2">Google reviews captured</p>
              </div>
              <div className="border border-text-dark/15 rounded-card p-6">
                <p className="font-display text-section-h1" style={{ fontWeight: 300 }}>30</p>
                <p className="text-address mt-2">Highest-sort written reviews</p>
              </div>
            </div>
            <p className="max-w-3xl mx-auto mt-10 text-center text-body text-text-muted">
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
          <DualServiceMenusSplit />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <FloralBreak />
        </ScrollRevealScrapbook>
        <ScrollRevealScrapbook>
          <InlineInfoSplit />
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
