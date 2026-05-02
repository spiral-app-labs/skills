import { SiteHeader } from '../components/SiteHeader';
import { PlateHero } from '../components/PlateHero';
import { TrustStrip } from '../components/TrustStrip';
import { WhatsThisWeek } from '../components/WhatsThisWeek';
import { InlineMenuHomepage } from '../components/InlineMenuHomepage';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { TaglineBanner } from '../components/TaglineBanner';
import { LatestUpdatesGrid } from '../components/LatestUpdatesGrid';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCtaClosing } from '../components/ContactCtaClosing';
import { WordmarkFooter } from '../components/WordmarkFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Sammy's home — fork of plate-01's InlineMenuHomepage archetype with the
// audit-required additions:
//   - TrustStrip below hero (4.5★/$10–20/8 AM – 2 AM facts)
//   - WhatsThisWeek above the menu (Tuesday karaoke + Friday fish fry rituals)
//   - ReviewCarousel between menu and tagline (12 verbatim Google reviews)
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PlateHero />
        <TrustStrip />
        <ScrollRevealStandard>
          <WhatsThisWeek />
        </ScrollRevealStandard>
        {/* Menu and ReviewCarousel are too tall (>4× mobile viewport) for the
            default ScrollReveal `amount: 0.25` trigger to fire. Render them
            without the wrapper so they're always visible. */}
        <InlineMenuHomepage />
        <ReviewCarousel />
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
