/**
 * FloralBreak — full-bleed photo break section.
 * Pure aesthetic pause between content blocks.
 * Generic utility — any template can use with any full-bleed photo.
 */
export function FloralBreak() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-dark px-6 py-16 text-text-cream md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(185,107,62,0.32),transparent_30%),radial-gradient(circle_at_78%_68%,rgba(95,35,30,0.46),transparent_34%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[32px] border border-text-cream/15 bg-text-cream/[0.06] px-6 py-10 text-center shadow-2xl backdrop-blur-sm md:px-12 md:py-14">
        <p className="text-address text-text-muted-cream">Woodstock Square rhythm</p>
        <p className="mt-4 font-display text-[clamp(34px,6vw,76px)] leading-[0.95]" style={{ fontWeight: 300 }}>
          Pick a bottle. Share a board. Stay for the music.
        </p>
      </div>
    </section>
  );
}
