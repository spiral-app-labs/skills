import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6EFE5',
        paper: '#FFF9F1',
        ink: '#241B17',
        muted: '#6F5D4F',
        line: '#DCCDB9',
        mahogany: '#5A2D21',
        chile: '#B64028',
        maize: '#D5A740',
        teal: '#155C55',
        sage: '#758461',
        clay: '#BE6B3F',
        night: '#122522',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '1180px',
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(36, 27, 23, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
