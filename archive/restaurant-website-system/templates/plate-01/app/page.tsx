import { SiteHeader } from '../components/SiteHeader';
import { PlateHero } from '../components/PlateHero';
import { InlineMenuHomepage } from '../components/InlineMenuHomepage';
import { TaglineBanner } from '../components/TaglineBanner';
import { LatestUpdatesGrid } from '../components/LatestUpdatesGrid';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCtaClosing } from '../components/ContactCtaClosing';
import { WordmarkFooter } from '../components/WordmarkFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Home — the InlineMenuHomepage structural archetype.
// Hero → full menu (5 sections) → tagline banner → blog strip → FAQ →
// closing CTA + hours → wordmark footer. Menu is ~40-50% of page height.
//
// Aliveness retrofit (2026-04-20): below-hero sections wrapped in
// ScrollRevealStandard (intensity 2). Hero stays unwrapped per
// aliveness-patterns.md §3.1 (first viewport paints instantly).
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PlateHero />
        <ScrollRevealStandard>
          <InlineMenuHomepage />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <TaglineBanner />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <LatestUpdatesGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <FAQAccordion />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ContactCtaClosing />
        </ScrollRevealStandard>
      </main>
      <WordmarkFooter />
    </>
  );
}
