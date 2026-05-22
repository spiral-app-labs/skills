import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { TheJournalBlogBlock } from '../../components/TheJournalBlogBlock';
import { ServiceTypeSelector } from '../../components/ServiceTypeSelector';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `Events - ${content.brand.name}`,
  description: content.events.intro,
};

export default function EventsPage() {
  return (
    <main>
      <CreamStripNav />
      <PageHero
        h1="Events"
        photo={content.images.wineEvent}
        photoAlt="Port Edward spring wine tasting event"
        eyebrow={content.events.eyebrow}
      />
      <TheJournalBlogBlock />
      <ServiceTypeSelector />
      <CreamFooter />
    </main>
  );
}
