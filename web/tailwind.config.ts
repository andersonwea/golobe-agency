import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'var(--font-monteserrat)',
        secondary: 'var(--font-gothicA1)',
      },

      colors: {
        'blackish-green': '#112211',
        'mint-green': '#8DD3BB',
        slamon: '#FF8682',
        neutral: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
