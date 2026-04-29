import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { LocationsPanel } from '../../components/LocationsPanel';
import { MinimalFooter } from '../../components/MinimalFooter';
import { PageHeroSplit } from '../../components/PageHeroSplit';

export default function LocationsPage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image="/images/bistro-wasabi/contact-banner.jpg"
        imageAlt="Bistro Wasabi sushi plate"
        title="Locations"
        stickyImage
      >
        <LocationsPanel />
        <MinimalFooter />
      </PageHeroSplit>
    </>
  );
}
