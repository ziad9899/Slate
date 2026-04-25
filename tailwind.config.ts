import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#6366F1',
          soft: '#818CF8',
          glow: 'rgba(99, 102, 241, 0.18)',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        'tight-2': '-0.02em',
      },
      boxShadow: {
        'panel': '0 1px 0 0 rgba(255, 255, 255, 0.04) inset, 0 0 0 1px rgba(255, 255, 255, 0.04)',
        'glow': '0 0 0 1px rgba(99, 102, 241, 0.4), 0 0 24px -4px rgba(99, 102, 241, 0.45)',
      },
      backgroundImage: {
        'grid-zinc': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fade-in 220ms ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
