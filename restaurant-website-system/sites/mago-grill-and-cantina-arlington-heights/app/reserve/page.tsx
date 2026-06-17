import { TopTriptychHeader } from '../../components/TopTriptychHeader';
import { BrambleWordmarkFooter } from '../../components/BrambleWordmarkFooter';
import { content } from '../../content';

export default function ReservePage() {
  return (
    <>
      <TopTriptychHeader />
      <main className="min-h-screen bg-bg-dark px-6 pb-20 pt-32 text-text-cream">
        <section className="mx-auto max-w-2xl space-y-7 text-center">
          <p className="text-address text-text-muted-cream">Reservations</p>
          <h1 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
            {content.reservation.heading}
          </h1>
          <p className="mx-auto max-w-xl text-body text-text-muted-cream">{content.reservation.body}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={content.brand.reservationUrl}
              className="rounded-button bg-text-cream px-6 py-3 text-button text-text-dark transition-colors hover:bg-white"
            >
              {content.reservation.submitLabel}
            </a>
            <a
              href={content.brand.callUrl}
              className="rounded-button border border-text-cream/50 px-6 py-3 text-button text-text-cream transition-colors hover:bg-text-cream/10"
            >
              Call {content.brand.phone}
            </a>
          </div>
        </section>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
