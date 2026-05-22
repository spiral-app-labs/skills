import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:          t.color.canvas,
        surface:         t.color.surface,
        ink:             t.color.ink,
        'ink-muted':     t.color.inkMuted,
        'ink-quiet':     t.color.inkQuiet,
        accent:          t.color.accent,
        'accent-warm':   t.color.accentWarm,
        divider:         t.color.divider,
        'divider-strong': t.color.dividerStrong,
      },
      fontFamily: {
        display: ['var(--font-sorts-mill-goudy)', 'EB Garamond', 'Garamond', 'serif'],
        body:    ['var(--font-figtree)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-quote':   [`clamp(32px, 4.5vw, ${t.type.heroQuote.size}px)`,   { lineHeight: '1.1' }],
        'page-title':   [`clamp(36px, 5vw, ${t.type.pageTitle.size}px)`,     { lineHeight: '1.1' }],
        'manifesto':    [`clamp(32px, 4.5vw, ${t.type.manifestoH2.size}px)`, { lineHeight: '1.1' }],
        'owner-name':   [`${t.type.ownerName.size}px`,   { lineHeight: `${t.type.ownerName.lineHeight}px` }],
        'body':         [`${t.type.body.size}px`,        { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':      [`${t.type.bodySm.size}px`,      { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'menu-section': [`${t.type.menuSection.size}px`, { lineHeight: `${t.type.menuSection.lineHeight}px` }],
        'nav-label':    [`${t.type.navLabel.size}px`,    { lineHeight: `${t.type.navLabel.lineHeight}px`, letterSpacing: `${t.type.navLabel.tracking}px` }],
        'button':       [`${t.type.button.size}px`,      { lineHeight: `${t.type.button.lineHeight}px`,   letterSpacing: `${t.type.button.tracking}px` }],
        'chip':         [`${t.type.chip.size}px`,        { lineHeight: `${t.type.chip.lineHeight}px`,     letterSpacing: `${t.type.chip.tracking}px` }],
        'stamp':        [`${t.type.stamp.size}px`,       { lineHeight: `${t.type.stamp.lineHeight}px`,    letterSpacing: `${t.type.stamp.tracking}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        chip:   `${t.radius.chip}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        shell: `${t.layout.maxWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
