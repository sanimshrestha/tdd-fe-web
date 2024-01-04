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
      },
      fontSize: {
        sm: 'clamp(0.875rem, 0.5vw + 0.5rem, 1rem)',
        base: 'clamp(1rem, 0.5vw + 0.8rem, 1.25rem)',
        xl: 'clamp(1.25rem, 1vw + 0.8rem, 1.75rem)',
        '2xl': 'clamp(1.5rem, 1vw + 1rem, 2rem)',
        '3xl': 'clamp(2rem, 1.5vw + 1rem, 2.25rem)',
      },
      fontFamily: {
        sans: ['var(--font-lexend)']
      },
      colors: {
        'primary': '#fff',
        'secondary': '#505050',
      },
    },
  },
  plugins: [],
}
export default config
