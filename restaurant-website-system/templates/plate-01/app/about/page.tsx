import { SiteHeader } from '../../components/SiteHeader';
import { AboutHero } from '../../components/AboutHero';
import { AboutValuesGrid } from '../../components/AboutValuesGrid';
import { StaffGrid } from '../../components/StaffGrid';
import { ContactCtaClosing } from '../../components/ContactCtaClosing';
import { WordmarkFooter } from '../../components/WordmarkFooter';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutValuesGrid />
        <StaffGrid />
        <ContactCtaClosing />
      </main>
      <WordmarkFooter />
    </>
  );
}
