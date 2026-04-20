import { SiteHeader } from '../components/SiteHeader';
import { PlateHero } from '../components/PlateHero';
import { InlineMenuHomepage } from '../components/InlineMenuHomepage';
import { TaglineBanner } from '../components/TaglineBanner';
import { LatestUpdatesGrid } from '../components/LatestUpdatesGrid';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCtaClosing } from '../components/ContactCtaClosing';
import { WordmarkFooter } from '../components/WordmarkFooter';

// Home — the InlineMenuHomepage structural archetype.
// Hero → full menu (5 sections) → tagline banner → blog strip → FAQ →
// closing CTA + hours → wordmark footer. Menu is ~40-50% of page height.
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PlateHero />
        <InlineMenuHomepage />
        <TaglineBanner />
        <LatestUpdatesGrid />
        <FAQAccordion />
        <ContactCtaClosing />
      </main>
      <WordmarkFooter />
    </>
  );
}
