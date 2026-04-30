import { LatteNav } from '../components/LatteNav';
import { LatteHero } from '../components/LatteHero';
import { MenuCategoryStack } from '../components/MenuCategoryStack';
import { LovedGrid } from '../components/LovedGrid';
import { ReviewWall } from '../components/ReviewWall';
import { LetterTeaser } from '../components/LetterTeaser';
import { LoveSplit } from '../components/LoveSplit';
import { ClosingWordmark } from '../components/ClosingWordmark';
import { LatteFooter } from '../components/LatteFooter';
import { LiveMapEmbed } from '../components/LiveMapEmbed';
import { ScrollRevealStandard } from '../components/ScrollReveal';
import { content } from '../content';

export default function HomePage() {
  const b = content.brand;
  return (
    <>
      <LatteNav />
      <main>
        <LatteHero />
        <ScrollRevealStandard>
          <LovedGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ReviewWall />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <MenuCategoryStack />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <LetterTeaser />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <LoveSplit />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <section className="w-full bg-canvas pb-16 md:pb-24">
            <div className="max-w-page mx-auto px-5 md:px-10">
              <LiveMapEmbed
                address={`${b.address.line1}, ${b.address.line2}`}
                lat={b.geo.lat}
                lng={b.geo.lng}
                zoom={16}
                mapLabel={`${b.name} — ${b.address.line2}`}
                aspectRatio="16/9"
              />
            </div>
          </section>
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ClosingWordmark />
        </ScrollRevealStandard>
      </main>
      <LatteFooter />
    </>
  );
}
