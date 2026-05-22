/**
 * BotanicalDecor — flanking leaf / bamboo SVG illustrations for dark hero.
 * Template-specific (asian cuisine). Forks to other cuisines swap asset-set:
 * olive for Italian, chili/agave for Mexican, wheat for bakery, etc.
 */
export function BotanicalDecor({ side }: { side: 'left' | 'right' }) {
  const mirror = side === 'right' ? 'scale-x-[-1]' : '';
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 400"
      className={`w-[160px] md:w-[220px] opacity-70 ${mirror}`}
      fill="none"
    >
      <g stroke="#2F4E3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Main stem */}
        <path d="M120 0 C 100 80, 140 160, 100 240 C 70 300, 130 360, 110 400" />
        {/* Leaves */}
        <path d="M115 40 C 80 50, 60 90, 80 110 C 110 100, 120 70, 115 40 Z" fill="#1E3B2A" />
        <path d="M130 90 C 170 80, 200 120, 180 150 C 150 150, 130 120, 130 90 Z" fill="#1E3B2A" />
        <path d="M105 150 C 60 160, 40 210, 70 230 C 100 220, 115 180, 105 150 Z" fill="#1E3B2A" />
        <path d="M125 220 C 170 220, 200 260, 175 290 C 150 280, 125 250, 125 220 Z" fill="#1E3B2A" />
        <path d="M100 290 C 60 300, 50 340, 75 360 C 100 345, 110 320, 100 290 Z" fill="#1E3B2A" />
        {/* Thin accents */}
        <path d="M115 40 L 97 75" />
        <path d="M130 90 L 160 120" />
        <path d="M105 150 L 75 200" />
        <path d="M125 220 L 160 265" />
        <path d="M100 290 L 80 330" />
      </g>
    </svg>
  );
}
