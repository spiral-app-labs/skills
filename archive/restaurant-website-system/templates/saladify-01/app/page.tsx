import { StickyTopNav } from '../components/StickyTopNav';
import { IngredientBurstHero } from '../components/IngredientBurstHero';
import { IntroRow } from '../components/IntroRow';
import { DishCarousel } from '../components/DishCarousel';
import { NutrientsBand } from '../components/NutrientsBand';
import { HowItWorksSteps } from '../components/HowItWorksSteps';
import { IngredientShowcase } from '../components/IngredientShowcase';
import { TestimonialAvatarGrid } from '../components/TestimonialAvatarGrid';
import { BlogGuide3Up } from '../components/BlogGuide3Up';
import { BrightBandCTA } from '../components/BrightBandCTA';
import { SiteFooter } from '../components/SiteFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Aliveness retrofit (2026-04-20): below-hero sections wrapped in
// ScrollRevealStandard (intensity 2 — fast-casual energy). Hero stays
// unwrapped per aliveness-patterns.md §3.1.
export default function HomePage() {
  return (
    <>
      <StickyTopNav />
      <main>
        <IngredientBurstHero />
        <ScrollRevealStandard>
          <IntroRow />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <DishCarousel />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <NutrientsBand />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <HowItWorksSteps />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <IngredientShowcase />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <TestimonialAvatarGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BlogGuide3Up />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BrightBandCTA />
        </ScrollRevealStandard>
      </main>
      <SiteFooter />
    </>
  );
}
