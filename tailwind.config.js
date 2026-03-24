/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        'cream-dark': '#F5F1EA',
        stone: {
          350: '#C8B9A8',
        },
        ink: '#2C2825',
        'ink-muted': '#7A6F66',
        accent: '#B8956A',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-lato)', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
