import { WarmGrayStripHeader } from '../../components/WarmGrayStripHeader';
import { WarmGrayStripFooter } from '../../components/WarmGrayStripFooter';
import { PrivateEventsHero } from '../../components/PrivateEventsHero';
import { PrivateEventsIntro } from '../../components/PrivateEventsIntro';
import { PrivateEventsSpaces } from '../../components/PrivateEventsSpaces';
import { EventBookingForm } from '../../components/EventBookingForm';

export default function PrivateEventsPage() {
  return (
    <>
      <WarmGrayStripHeader />
      <main>
        <PrivateEventsHero />
        <PrivateEventsIntro />
        <PrivateEventsSpaces />
        <EventBookingForm />
      </main>
      <WarmGrayStripFooter />
    </>
  );
}
