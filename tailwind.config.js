/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ["Poppins", "sans-serif"],
      },
      colors: {
        myYellow: "#F7C003",
        myBlack: "#353535",
        myBlack2: "#232323",
        myBlack3: "#0B0B0B",
        myBlack4: "#1E1E1E",
        myLightBlack: "#212121",
        myWhite: "#d8d8d8",
      },
      backgroundImage: {
        bgAbout: "url('/images/about/bgAbout.png')",
        bgTestimonial: "url('/images/testimonial/bgTestimonial.webp')",
        bgPortfolio: "url('/images/portfolio/bgPortfolio.webp')",
        bgLetsTalk: "url('/images/letsTalk/bgLetsTalk.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1065px",
      xl: "1315px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
