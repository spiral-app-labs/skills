import { TopNavBar } from '../../components/TopNavBar';
import { ContactPage } from '../../components/ContactPage';
import { FooterMinimalRich } from '../../components/FooterMinimalRich';

export default function ContactRoute() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <ContactPage />
      <FooterMinimalRich />
    </main>
  );
}
