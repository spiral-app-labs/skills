/**
 * BotanicalDecor — flanking chili-stem illustration for the hero.
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
      <g stroke="#7A2A18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M122 10 C 110 82, 140 140, 118 220 C 100 290, 136 342, 126 392" />
        <path d="M104 56 C 78 64, 58 94, 72 122 C 100 118, 114 90, 104 56 Z" fill="#8D2618" />
        <path d="M136 116 C 168 110, 192 136, 184 168 C 156 172, 136 148, 136 116 Z" fill="#D16A2C" />
        <path d="M100 178 C 64 186, 44 226, 62 258 C 92 250, 110 214, 100 178 Z" fill="#8D2618" />
        <path d="M138 238 C 174 232, 198 266, 188 302 C 160 304, 140 278, 138 238 Z" fill="#D16A2C" />
        <path d="M98 302 C 68 312, 54 344, 66 372 C 92 366, 108 338, 98 302 Z" fill="#8D2618" />
        <path d="M104 56 L 88 92" />
        <path d="M136 116 L 160 144" />
        <path d="M100 178 L 78 220" />
        <path d="M138 238 L 162 274" />
        <path d="M98 302 L 82 338" />
      </g>
    </svg>
  );
}
