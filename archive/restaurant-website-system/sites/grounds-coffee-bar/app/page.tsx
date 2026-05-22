import { LatteNav } from '../components/LatteNav';
import { LatteHero } from '../components/LatteHero';
import { ReviewProofSection } from '../components/ReviewProofSection';
import { MenuCategoryStack } from '../components/MenuCategoryStack';
import { BlogPreviewGrid } from '../components/BlogPreviewGrid';
import { LoveSplit } from '../components/LoveSplit';
import { ClosingWordmark } from '../components/ClosingWordmark';
import { LatteFooter } from '../components/LatteFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Hero stays unwrapped so the first viewport paints instantly. Below-hero
// sections use scroll reveals per the aliveness pass.

export default function HomePage() {
  return (
    <>
      <LatteNav />
      <main>
        <LatteHero />
        <ScrollRevealStandard>
          <ReviewProofSection />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <MenuCategoryStack />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BlogPreviewGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <LoveSplit />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ClosingWordmark />
        </ScrollRevealStandard>
      </main>
      <LatteFooter />
    </>
  );
}
