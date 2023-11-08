/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'youtubesans': ['YoutubeSans', 'system-ui','ui-sans-serif'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '256fr': '256px 1fr',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        '1frauto': '1fr auto',
      }
    },
  },
  plugins: [],
}

