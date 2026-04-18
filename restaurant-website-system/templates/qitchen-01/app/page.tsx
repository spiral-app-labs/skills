import { FloatingHeaderPill } from '../components/FloatingHeaderPill';
import { PageHeroSplit } from '../components/PageHeroSplit';
import { ThumbnailNavGrid } from '../components/ThumbnailNavGrid';
import { content } from '../content.example';

export default function HomePage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.hero.image}
        imageAlt={content.hero.alt}
        title={content.brand.tagline}
      >
        <ThumbnailNavGrid />
      </PageHeroSplit>
    </>
  );
}
