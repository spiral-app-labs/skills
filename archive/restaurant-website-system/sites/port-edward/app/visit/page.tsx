import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { ServiceTypeSelector } from '../../components/ServiceTypeSelector';
import { ContactCardsGrid } from '../../components/ContactCardsGrid';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `Visit - ${content.brand.name}`,
  description: content.visitPage.intro,
};

export default function VisitPage() {
  const { h1, heroPhoto, heroAlt, eyebrow } = content.visitPage;

  return (
    <main>
      <CreamStripNav />
      <PageHero h1={h1} photo={heroPhoto} photoAlt={heroAlt} eyebrow={eyebrow} />
      <ServiceTypeSelector />
      <ContactCardsGrid />
      <CreamFooter />
    </main>
  );
}
