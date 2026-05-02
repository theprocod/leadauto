/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        mint: { DEFAULT: '#7FD1B9', deep: '#2E8B7B', soft: '#E8F5F0' },
        coral: { DEFAULT: '#FF8B6B', soft: '#FFE4DA' },
        navy: '#0F2A3F',
        slate: { muted: '#6B7B8C' },
        border: '#EDE7DD',
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'General Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
