import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { FourNumberStats } from '../../components/FourNumberStats';
import { EditorialParagraphBlock } from '../../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../../components/AsymmetricMiniGallery';
import { MixologistGrid } from '../../components/MixologistGrid';
import { EventsPreviewGrid } from '../../components/EventsPreviewGrid';

// /about — massive display h1 with em-dash connector. Stats row uses 2022 as founding year
// (resolved the 1972-vs-2022 mismatch flagged by audit §1).
export default function AboutPage() {
  const a = content.about;
  const h = content.home;
  // Em-dash connector: "Longest running cocktail bar in — Hong Kong"
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
      <MixologistGrid heading={a.mixologistsHeading} people={a.mixologists} />
      <EventsPreviewGrid label={h.events.label} items={h.events.items} />
    </WordmarkBookendLayout>
  );
}
