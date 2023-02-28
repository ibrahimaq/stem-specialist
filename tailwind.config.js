/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./**/*.html", "./**/*.js"],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF52BF",
        secondary: "#808D99",
        cyanLight: "#EBFBFF",
        dark: "#00242D",
      },
      backgroundImage: {
        "hero-desktop": "url('/assets/bg-hero-desktop.svg')",
        "hero-mobile": "url('/assets/bg-hero-mobile.svg')",
        'reviews-img': 'url("/assets/watercolor-4116932.png")'
      },
      fontSize: {
        bodyCopy: "18px",
      },
      fontFamily: {
        public: ["Poppins", "sans-serif"],
      },
      padding: {
        'x': '20px',
      }
    },
  },
  plugins: [],
};
