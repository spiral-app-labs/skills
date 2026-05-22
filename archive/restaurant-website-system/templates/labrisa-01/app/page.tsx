import { CreamStripNav } from '../components/CreamStripNav';
import { RivieraHero } from '../components/RivieraHero';
import { BrandIllustrationLockup } from '../components/BrandIllustrationLockup';
import { JournalVignetteStrip } from '../components/JournalVignetteStrip';
import { CenterDishPhoto } from '../components/CenterDishPhoto';
import { ServiceTypeSelector } from '../components/ServiceTypeSelector';
import { TheJournalBlogBlock } from '../components/TheJournalBlogBlock';
import { NewsletterBand } from '../components/NewsletterBand';
import { SignOffBand } from '../components/SignOffBand';
import { CreamFooter } from '../components/CreamFooter';
import { ScrollRevealScrapbook } from '../components/ScrollReveal';

// Aliveness retrofit (2026-04-20): below-hero sections wrap in
// ScrollRevealScrapbook — scrapbook-drift is the signature labrisa motion per
// the audit (motion intensity 3). Hero stays unwrapped; RivieraHero handles its
// own entry choreography.

export default function Home() {
  return (
    <main>
      <CreamStripNav />
      <RivieraHero />
      <ScrollRevealScrapbook>
        <BrandIllustrationLockup />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <JournalVignetteStrip />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <CenterDishPhoto />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <ServiceTypeSelector />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <TheJournalBlogBlock />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <NewsletterBand />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <SignOffBand />
      </ScrollRevealScrapbook>
      <CreamFooter />
    </main>
  );
}
