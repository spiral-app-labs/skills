import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHeroSplit } from '../../components/PageHeroSplit';
import { ReservationFormPanel } from '../../components/ReservationFormPanel';
import { MinimalFooter } from '../../components/MinimalFooter';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import { content } from '../../content.example';

// Aliveness retrofit (2026-04-20): LiveMapEmbed added below the reservation
// form panel — qitchen has no /contact page, so the reservation page doubles
// as the "where are we" surface. Styled restrained (rounded, subtle border)
// per ceremonial register guidance.

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
        <div className="px-8 md:px-10 pb-12">
          <LiveMapEmbed
            address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
            lat={content.brand.geo.lat}
            lng={content.brand.geo.lng}
            zoom={15}
            mapLabel={`${content.brand.name} — ${content.brand.address.line2}`}
            aspectRatio="16/9"
            className="rounded-field overflow-hidden border border-border/40"
          />
        </div>
        <MinimalFooter />
      </PageHeroSplit>
    </>
  );
}
