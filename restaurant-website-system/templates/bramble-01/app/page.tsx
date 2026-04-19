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
import { content } from '../content.example';

export default function HomePage() {
  return (
    <>
      <TopTriptychHeader />
      <main>
        <HeroSlideshow />
        {/* Tagline paragraph — sits on bg-dark strip between hero and polaroids */}
        <section className="bg-bg-dark py-14 px-6">
          <p className="max-w-2xl mx-auto text-center font-display text-tagline-h2 text-text-cream" style={{ fontWeight: 300 }}>
            {content.tagline.body}
          </p>
        </section>
        <PolaroidStrip />
        <HorizontalMarquee text="Opening Times" variant="dark-on-cream" />
        <OpeningTimesBlock />
        <DualServiceMenusSplit />
        <FloralBreak />
        <InlineInfoSplit />
        <SocialStripInline />
        <ContactStrip />
        <MailingListBlock />
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
