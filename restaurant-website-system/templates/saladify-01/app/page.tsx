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

export default function HomePage() {
  return (
    <>
      <StickyTopNav />
      <main>
        <IngredientBurstHero />
        <IntroRow />
        <DishCarousel />
        <NutrientsBand />
        <HowItWorksSteps />
        <IngredientShowcase />
        <TestimonialAvatarGrid />
        <BlogGuide3Up />
        <BrightBandCTA />
      </main>
      <SiteFooter />
    </>
  );
}
