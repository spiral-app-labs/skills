import { CreamStripNav } from '../components/CreamStripNav';
import { PortEdwardHero } from '../components/PortEdwardHero';
import { BrandIllustrationLockup } from '../components/BrandIllustrationLockup';
import { JournalVignetteStrip } from '../components/JournalVignetteStrip';
import { GoogleReviewProof } from '../components/GoogleReviewProof';
import { CenterDishPhoto } from '../components/CenterDishPhoto';
import { HeritagePulseStats } from '../components/HeritagePulseStats';
import { RevenuePathsGrid } from '../components/RevenuePathsGrid';
import { ServiceTypeSelector } from '../components/ServiceTypeSelector';
import { TheJournalBlogBlock } from '../components/TheJournalBlogBlock';
import { NewsletterBand } from '../components/NewsletterBand';
import { SignOffBand } from '../components/SignOffBand';
import { CreamFooter } from '../components/CreamFooter';
import { ScrollRevealScrapbook } from '../components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <CreamStripNav />
      <PortEdwardHero />
      <HeritagePulseStats />
      <ScrollRevealScrapbook>
        <BrandIllustrationLockup />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <JournalVignetteStrip />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <GoogleReviewProof />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <CenterDishPhoto />
      </ScrollRevealScrapbook>
      <ScrollRevealScrapbook>
        <RevenuePathsGrid />
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
