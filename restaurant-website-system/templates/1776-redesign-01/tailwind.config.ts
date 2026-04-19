import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:        t.color.canvas,
        surface:       t.color.surface,
        'surface-alt': t.color.surfaceAlt,
        'surface-hover': t.color.surfaceHover,
        border:        t.color.border,
        text:          t.color.text,
        'text-muted':  t.color.textMuted,
        'text-subtle': t.color.textSubtle,
        accent:        t.color.accent,
        'accent-hover': t.color.accentHover,
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Garamond', 'serif'],
        body:    ['var(--font-dm-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'page-title':    [`${t.type.pageTitle.size}px`,    { lineHeight: `${t.type.pageTitle.lineHeight}px`,    letterSpacing: `${t.type.pageTitle.tracking}px` }],
        'page-title-md': [`${t.type.pageTitleMd.size}px`,  { lineHeight: `${t.type.pageTitleMd.lineHeight}px`,  letterSpacing: `${t.type.pageTitleMd.tracking}px` }],
        'section-h1':    [`${t.type.sectionH1.size}px`,    { lineHeight: `${t.type.sectionH1.lineHeight}px`,    letterSpacing: `${t.type.sectionH1.tracking}px` }],
        'section-h2':    [`${t.type.sectionH2.size}px`,    { lineHeight: `${t.type.sectionH2.lineHeight}px`,    letterSpacing: `${t.type.sectionH2.tracking}px` }],
        'card-title':    [`${t.type.cardTitle.size}px`,    { lineHeight: `${t.type.cardTitle.lineHeight}px`,    letterSpacing: `${t.type.cardTitle.tracking}px` }],
        'nav-link':      [`${t.type.navLink.size}px`,      { lineHeight: `${t.type.navLink.lineHeight}px`,      letterSpacing: `${t.type.navLink.tracking}px` }],
        'eyebrow':       [`${t.type.eyebrow.size}px`,      { lineHeight: `${t.type.eyebrow.lineHeight}px`,      letterSpacing: `${t.type.eyebrow.tracking}px` }],
        'button':        [`${t.type.button.size}px`,       { lineHeight: `${t.type.button.lineHeight}px`,       letterSpacing: `${t.type.button.tracking}px` }],
        'body':          [`${t.type.body.size}px`,         { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':       [`${t.type.bodySm.size}px`,       { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'micro':         [`${t.type.micro.size}px`,        { lineHeight: `${t.type.micro.lineHeight}px`,        letterSpacing: `${t.type.micro.tracking}px` }],
      },
      borderRadius: {
        pill:  `${t.radius.pill}px`,
        card:  `${t.radius.card}px`,
        field: `${t.radius.field}px`,
        image: `${t.radius.image}px`,
      },
      animation: {
        'marquee': `marquee ${t.motion.marqueeSpeed}s linear infinite`,
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
