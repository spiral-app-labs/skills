// shared/ui-atoms/LiveMapEmbed.tsx
//
// Interactive Google Maps embed to replace static address strings.
// Includes a "Get Directions" CTA that opens the Google Maps directions flow
// in a new tab.
//
// Two modes:
//   - KEYED  — uses Google Maps Embed API with NEXT_PUBLIC_GMAPS_KEY (recommended, more styling control)
//   - KEYLESS — uses the legacy Google Maps query-string embed (no key needed, works out of the box)
//
// See research/aliveness-patterns.md §2.1 for register guidance (styled Mapbox
// for upscale, default Google for casual).

import type { CSSProperties } from 'react';

export type LiveMapEmbedProps = {
  /** Full street address, used as alt text + directions fallback */
  address: string;
  /** Latitude (required for Google Maps embed) */
  lat: number;
  /** Longitude (required for Google Maps embed) */
  lng: number;
  /** Map zoom level, 1-20. Default 15 (neighborhood scale). */
  zoom?: number;
  /** Optional display label for the marker (shown on hover) */
  mapLabel?: string;
  /** Map aspect ratio. Default "16/10". CSS `aspect-ratio` value. */
  aspectRatio?: string;
  /** Additional className for the outer container */
  className?: string;
  /** Inline style for the outer container */
  style?: CSSProperties;
  /** "Get Directions" CTA label. Default "Get directions →" */
  ctaLabel?: string;
  /** Hide the CTA entirely (sometimes you want just the map) */
  hideCta?: boolean;
};

export function LiveMapEmbed({
  address,
  lat,
  lng,
  zoom = 15,
  mapLabel,
  aspectRatio = '16/10',
  className = '',
  style,
  ctaLabel = 'Get directions →',
  hideCta = false,
}: LiveMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_KEY;
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-image border border-divider bg-canvas-alt shadow-[0_20px_70px_rgba(0,0,0,0.28)] ${className}`}
      style={{ aspectRatio, ...style }}
    >
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full border-0 opacity-80 saturate-[0.65] contrast-[1.08] brightness-[0.72] invert-[0.9] hue-rotate-180"
        loading="lazy"
        title={mapLabel || `Map of ${address}`}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,5,3,0.18),rgba(9,5,3,0.04)_45%,rgba(9,5,3,0.32))]" />
      {!hideCta && (
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-canvas shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-accent-dark"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
