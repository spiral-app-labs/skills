import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { ContactCardsGrid } from '../../components/ContactCardsGrid';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `Contact — ${content.brand.name}`,
  description: `Reach La Brisa in ${content.brand.address.line2}.`,
};

export default function ContactPage() {
  const { h1, heroPhoto, heroAlt } = content.contactPage;
  return (
    <main>
      <CreamStripNav />
      <PageHero h1={h1} photo={heroPhoto} photoAlt={heroAlt} eyebrow="Visit Us" />
      <ContactCardsGrid />
      <CreamFooter />
    </main>
  );
}
