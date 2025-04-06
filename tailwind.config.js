/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: 'var(--secondary-color)',
        },
        text: 'var(--text-color)',
        background: 'var(--bg-color)',
        card: 'var(--card-bg)',
      },
    },
  },
  plugins: [],
}
