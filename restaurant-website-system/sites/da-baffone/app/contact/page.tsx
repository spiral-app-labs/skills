import { TopNavBar } from '../../components/TopNavBar';
import { ConciergeEntrance } from '../../components/ConciergeEntrance';
import { ContactPage } from '../../components/ContactPage';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';

export default function ContactRoute() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <ContactPage />
      <ConciergeEntrance surfaceId="visit_card" />
      <FooterMinimalRich />
    </main>
  );
}
