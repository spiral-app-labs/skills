import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { AboutEditorial } from '../../components/AboutEditorial';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `About — ${content.brand.name}`,
  description: content.aboutPage.pullQuote,
};

export default function AboutPage() {
  const { h1, heroPhoto, heroAlt } = content.aboutPage;
  return (
    <main>
      <CreamStripNav />
      <PageHero h1={h1} photo={heroPhoto} photoAlt={heroAlt} eyebrow="Our Story" />
      <AboutEditorial />
      <CreamFooter />
    </main>
  );
}
