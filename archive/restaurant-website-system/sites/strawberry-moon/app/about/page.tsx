import { content } from '../../content';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { FourNumberStats } from '../../components/FourNumberStats';
import { EditorialParagraphBlock } from '../../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../../components/AsymmetricMiniGallery';
import { NoPriceNamedList } from '../../components/NoPriceNamedList';
import { EventsPreviewGrid } from '../../components/EventsPreviewGrid';

export default function AboutPage() {
  const a = content.about;
  const h = content.home;
  const heading = `${a.h1Part1} — ${a.h1Part2}`;

  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading heading={heading} />
      <FourNumberStats stats={a.stats} />
      <EditorialParagraphBlock paragraph={a.story} />
      <AsymmetricMiniGallery
        left={{ src: a.aboutGallery[0].src, alt: a.aboutGallery[0].alt, aspect: 'portrait' }}
        right={{ src: a.aboutGallery[1].src, alt: a.aboutGallery[1].alt, aspect: 'landscape' }}
      />
      <NoPriceNamedList heading={a.proofHeading} items={a.proofItems} />
      <EventsPreviewGrid label={h.events.label} items={h.events.items} />
    </WordmarkBookendLayout>
  );
}
