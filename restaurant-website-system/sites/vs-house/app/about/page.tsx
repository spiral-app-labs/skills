import { PageHero } from '../../components/PageHero';
import { HeritageBlock } from '../../components/HeritageBlock';
import { FamilyGrid } from '../../components/FamilyGrid';
import { ReviewWall } from '../../components/ReviewWall';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Family · Since 1982"
        title="Three generations on Bedford-Euless Road."
        intro="The Vu family has cooked on this stretch of Tarrant County since our grandparents opened Quan Vu in 1982. V's House is the third chapter."
        bg={content.photos.interiorBooth}
      />
      <HeritageBlock />
      <FamilyGrid />
      <ReviewWall />
      <VisitFooter />
    </main>
  );
}
