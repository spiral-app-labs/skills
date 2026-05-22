import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { PrivateEventsPageLayout } from '../../components/PrivateEventsPageLayout';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `Private Events - ${content.brand.name}`,
  description: content.privateEventsPage.intro,
};

export default function PrivateEventsPage() {
  const { h1, heroPhoto, heroAlt, eyebrow } = content.privateEventsPage;

  return (
    <main>
      <CreamStripNav />
      <PageHero h1={h1} photo={heroPhoto} photoAlt={heroAlt} eyebrow={eyebrow} />
      <PrivateEventsPageLayout />
      <CreamFooter />
    </main>
  );
}
