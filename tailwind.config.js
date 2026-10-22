/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        island: {
          sky: '#E0F2FE',
          sand: '#FDE68A',
          grass: '#86EFAC',
          deepGrass: '#22C55E',
          ocean: '#38BDF8',
          deepOcean: '#0284C7',
          wood: '#B45309',
          woodLight: '#FBBF24',
          cat: '#FB923C',
          blush: '#FDA4AF',
          softBg: '#F8FAFC',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'cozy': '0 10px 25px -5px rgba(56, 189, 248, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
