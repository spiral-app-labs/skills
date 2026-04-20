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

export default function Home() {
  return (
    <main>
      <CreamStripNav />
      <RivieraHero />
      <BrandIllustrationLockup />
      <JournalVignetteStrip />
      <CenterDishPhoto />
      <ServiceTypeSelector />
      <TheJournalBlogBlock />
      <NewsletterBand />
      <SignOffBand />
      <CreamFooter />
    </main>
  );
}
