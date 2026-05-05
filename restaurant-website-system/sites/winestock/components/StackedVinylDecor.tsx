/**
 * StackedVinylDecor — decorative stacked-ellipse "vinyl records" illustration.
 *
 * Template-specific to music-forward brands. Do NOT use on non-music templates
 * (would be decoration-for-decoration).
 */
export function StackedVinylDecor({ count = 8 }: { count?: number }) {
  return (
    <div className="flex flex-col items-center justify-center py-10" aria-hidden>
      <div className="relative w-[78vw] max-w-[420px] h-[150px] md:h-[220px]">
        {Array.from({ length: count }).map((_, i) => {
          const top = i * (80 / count);
          return (
            <div
              key={i}
              className="absolute left-0 right-0 rounded-[50%] bg-text-dark border border-text-cream/10"
              style={{
                top: `${top}%`,
                height: '40%',
                transform: 'scaleY(0.28)',
              }}
            />
          );
        })}
        {/* Top cream ring to imply the topmost record label */}
        <div
          className="absolute left-1/2 top-[6%] -translate-x-1/2 rounded-full border border-text-cream/50"
          style={{ width: '45%', height: '11%', transform: 'translateX(-50%) scaleY(0.45)' }}
          aria-hidden
        />
      </div>
    </div>
  );
}
