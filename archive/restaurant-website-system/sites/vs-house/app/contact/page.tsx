import { PageHero } from '../../components/PageHero';
import { ContactPanel } from '../../components/ContactPanel';
import { VisitFooter } from '../../components/VisitFooter';
import { content } from '../../content';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="8743 W Bedford-Euless Rd · NRH, TX"
        title="Come on in."
        intro="Reserve on Toast. Or call. Or walk up — the patio's lit."
        bg={content.photos.patioLights}
      />
      <ContactPanel />
      <VisitFooter />
    </main>
  );
}
