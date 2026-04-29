import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { FourNumberStats } from '../../components/FourNumberStats';
import { EditorialParagraphBlock } from '../../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../../components/AsymmetricMiniGallery';
import { OccasionsStaircase } from '../../components/OccasionsStaircase';

export default function AboutPage() {
  const a = content.about;
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
      <OccasionsStaircase
        eyebrow={{ number: '02', label: 'ROOM RITUALS' }}
        items={a.regulars}
      />
    </WordmarkBookendLayout>
  );
}
