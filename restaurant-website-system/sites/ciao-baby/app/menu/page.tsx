import { TopNavBar } from '../../components/TopNavBar';
import { MenuStickyTestimonial } from '../../components/MenuStickyTestimonial';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <MenuStickyTestimonial />
      <FooterMinimalRich />
    </main>
  );
}
