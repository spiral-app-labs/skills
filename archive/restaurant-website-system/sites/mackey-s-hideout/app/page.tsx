import { TopTriptychHeader } from '../components/TopTriptychHeader';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { PolaroidStrip } from '../components/PolaroidStrip';
import { HorizontalMarquee } from '../components/HorizontalMarquee';
import { ProofRibbon } from '../components/ProofRibbon';
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
          <section
            className="bg-bg-dark py-14"
            style={{
              width: '100vw',
              maxWidth: '100vw',
              overflowX: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            <p
              className="mackeys-tagline-copy text-center font-display text-[clamp(24px,7vw,32px)] leading-tight whitespace-normal text-text-cream md:text-tagline-h2"
              style={{ fontWeight: 300 }}
            >
              {content.tagline.body}
            </p>
          </section>
        <ScrollRevealScrapbook>
          <ProofRibbon />
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
          <section id="proof">
            <ContactStrip />
          </section>
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
