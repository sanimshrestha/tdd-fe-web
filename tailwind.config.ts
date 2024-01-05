import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-fade': 
          'linear-gradient(180deg, rgba(12, 17, 29, 0) 0%, #0C111D 28%)'
      },
      fontSize: {
        sm: ['clamp(0.875rem, 0.5vw + 0.5rem, 1rem)',
              'clamp(0.875rem, 0.5vw + 0.5rem, 1rem)'],
        base: ['clamp(1rem, 0.5vw + 0.8rem, 1.25rem)',
                'clamp(1rem, 0.5vw + 0.8rem, 1.25rem)'],
        xl: ['clamp(1.25rem, 1vw + 0.8rem, 1.75rem)',
              'clamp(1.25rem, 1vw + 0.8rem, 1.75rem)'],
        '2xl': ['clamp(1.5rem, 1vw + 1rem, 2rem)',
                'clamp(1.5rem, 1vw + 1rem, 2rem)'],
        '3xl': ['clamp(2rem, 1.5vw + 1rem, 2.25rem)',
                'clamp(2rem, 1.5vw + 1rem, 2.25rem)'],
      },
      fontFamily: {
        sans: ['var(--font-lexend)']
      },
      colors: {
        'primary': '#0C111D',
        'secondary': '#505050',
        'text': "#EDEEEE",
        'bg': '#0C0E0E',
        'light': '#B4BFC0',
        'light-hover': 'rgb(208,215,216)',
        'light-active': '#98a7a9',
        'light-secondary': '#4E6265',
        'text-tertiary': '#94969C',
        'border-primary': '#333741',
        'button-primary': '#D4684A',
        'button-primary-hover': '#cf5330',
        'error': '#F97066',
      },
    },
  },
  plugins: [],
}
export default config

