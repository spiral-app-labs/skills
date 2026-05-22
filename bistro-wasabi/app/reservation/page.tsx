import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHeroSplit } from '../../components/PageHeroSplit';
import { ReservationFormPanel } from '../../components/ReservationFormPanel';
import { MinimalFooter } from '../../components/MinimalFooter';
import { content } from '../../content';

export default function ReservationPage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.reservation.pageImage}
        imageAlt="Wine glasses on a wood table"
        title={content.reservation.pageTitle}
      >
        <ReservationFormPanel />
        <MinimalFooter />
      </PageHeroSplit>
    </>
  );
}
