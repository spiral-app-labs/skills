type Props = {
  address: string;
  lat: number;
  lng: number;
  label: string;
};

export function MapEmbed({ address, lat, lng, label }: Props) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-line bg-paper shadow-soft md:aspect-[16/10]">
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        title={`Map to ${label}, ${address}`}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={directions}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-semibold text-ink shadow-soft transition hover:bg-canvas focus:outline-none focus:ring-2 focus:ring-chile focus:ring-offset-2"
      >
        Get directions
      </a>
    </div>
  );
}
