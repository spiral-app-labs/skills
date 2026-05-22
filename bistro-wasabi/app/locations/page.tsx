import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { LocationsPanel } from '../../components/LocationsPanel';
import { MinimalFooter } from '../../components/MinimalFooter';
import { PageHeroSplit } from '../../components/PageHeroSplit';
import { content } from '../../content';

export default function LocationsPage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.hero.image}
        imageAlt="Premium nigiri plated on a dark sushi bar with warm restaurant lighting"
        title="Locations"
        stickyImage
      >
        <LocationsPanel />
        <MinimalFooter />
      </PageHeroSplit>
    </>
  );
}
