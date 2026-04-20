import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':      t.color.canvas,
        'canvas-soft': t.color.canvasSoft,
        'ink':         t.color.ink,
        'ink-muted':   t.color.inkMuted,
        'mat':         t.color.mat,
        'accent':      t.color.accent,
        'accent-soft': t.color.accentSoft,
        'cta':         t.color.cta,
        'divider':     t.color.divider,
        'form-line':   t.color.formLine,
      },
      fontFamily: {
        display: ['var(--font-belleza)', 'Belleza', 'Cormorant SC', 'serif'],
        body:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-display': [`clamp(56px, 11vw, ${t.type.heroDisplay.size}px)`, { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section-h2':   [`clamp(44px, 7.5vw, ${t.type.sectionH2.size}px)`,  { lineHeight: '1', letterSpacing: '-0.01em' }],
        'section-h3':   [`clamp(32px, 5vw, ${t.type.sectionH3.size}px)`,    { lineHeight: '1', letterSpacing: '-0.02em' }],
        'eyebrow':      [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
        'body':         [`${t.type.body.size}px`, { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-lg':      [`${t.type.bodyLg.size}px`, { lineHeight: `${t.type.bodyLg.lineHeight}px` }],
        'nav-link':     [`${t.type.navLink.size}px`, { lineHeight: `${t.type.navLink.lineHeight}px` }],
        'button':       [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        'prose-editorial': `${t.layout.proseWidth}px`,
        'form-inline':     `${t.layout.formWidth}px`,
        'page':            `${t.layout.maxWidth}px`,
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: `marquee ${t.motion.marqueeDuration}s linear infinite`,
      },
    },
  },
  plugins: [],
};

export default config;
