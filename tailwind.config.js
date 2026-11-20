/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core 3-Color Brand Palette
        sage: {
          DEFAULT: '#87B38D',
          hover: '#73A37A',
          active: '#629369',
          light: '#EDF5EF',
          subtle: 'rgba(135, 179, 141, 0.14)',
        },
        plum: {
          DEFAULT: '#22031F',
          deep: '#170115',
          body: '#432B3E',
          muted: '#6E5668',
          subtle: 'rgba(34, 3, 31, 0.06)',
        },
        blush: {
          DEFAULT: '#F2B7C6',
          soft: '#FDF5F7',
          hover: '#EFA4B6',
          subtle: 'rgba(242, 183, 198, 0.22)',
        },
        // 70% Soft Light Editorial Surfaces
        canvas: {
          DEFAULT: '#FAF8F5',
          white: '#FFFFFF',
          tint: '#F2F6F3',
          card: '#FFFFFF',
          border: 'rgba(34, 3, 31, 0.08)',
          highlight: 'rgba(135, 179, 141, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      }
    },
  },
  plugins: [],
};
