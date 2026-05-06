import { SiteHeader } from '../components/SiteHeader';
import { HeroSplit } from '../components/HeroSplit';
import { InlineMenuHomepage } from '../components/InlineMenuHomepage';
import { TaglineBanner } from '../components/TaglineBanner';
import { LatestUpdatesGrid } from '../components/LatestUpdatesGrid';
import { VisitConfidencePanel } from '../components/VisitConfidencePanel';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCtaClosing } from '../components/ContactCtaClosing';
import { WordmarkFooter } from '../components/WordmarkFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSplit />
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
          <VisitConfidencePanel />
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
