// Lightweight image primitive for the Strawberry Moon preview.
//
// The source template used curtain reveals, but the sales preview needs reliable
// screenshot capture and no accidental blank/cropped strips when pages are
// rendered by automation. Keep the API compatible with the forked components,
// but render the image immediately.

type Props = {
  src: string;
  alt: string;
  className?: string;
  from?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
  delay?: number;
  amount?: number;
  eager?: boolean;
};

export function CurtainImage({ src, alt, className, eager = false }: Props) {
  return (
    <div className={`absolute inset-0 ${className ?? ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
