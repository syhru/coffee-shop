/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          // --- Light Mode ---
          primary: '#3E2723',     // Espresso
          secondary: '#8D6E63',   // Mocha
          background: '#EFEBE9',  // Latte
          accent: '#D4AF37',      // Emas
          
          // --- Dark Mode (Stitch Original) ---
          midnight: '#050505',    // Hitam pekat untuk Background Utama & Navbar
          deeproast: '#151515',   // Abu-abu sangat gelap untuk Card & Surface
          cream: '#F5F5F5',       // Putih bersih untuk teks utama
          goldlight: '#FFBF00',   // Kuning/Amber menyala khas Stitch
          outline: '#2C2C2C',     // Garis border tipis elegan
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}