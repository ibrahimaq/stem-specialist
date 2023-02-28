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
        dark: "#334155",
      },
      backgroundImage: {
        "hero-desktop": "url('/assets/bg-hero-desktop.svg')",
        "hero-mobile": "url('/assets/bg-hero-mobile.svg')",
        "reviews-img": 'url("/assets/watercolor-4116932.png")',
        radialGradient:
          "radial-gradient(circle, rgba(255,82,191,0.07046568627450978) 17%, rgba(0,212,255,0.025647759103641476) 34%, rgba(235,251,255,1) 54%);",
      },
      fontSize: {
        bodyCopy: "18px",
      },
      fontFamily: {
        public: ["Poppins", "sans-serif"],
      },
      padding: {
        x: "20px",
      },
      margin: {
        x: "20px",
      },
      height: {
        "90vh": "90vh",
        "40vh": "40vh",
      },
      boxShadow: {
        custom: "2px -3px 8px -1px rgba(225,225,225,0.88);",
      },
    },
  },
  plugins: [],
};
