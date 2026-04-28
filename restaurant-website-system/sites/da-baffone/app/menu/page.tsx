import { TopNavBar } from '../../components/TopNavBar';
import { ConciergeEntrance } from '../../components/ConciergeEntrance';
import { MenuStickyTestimonial } from '../../components/MenuStickyTestimonial';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <MenuStickyTestimonial />
      <ConciergeEntrance surfaceId="menu_card" />
      <FooterMinimalRich />
    </main>
  );
}
