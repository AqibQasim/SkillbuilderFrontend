/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "25px",
      },
      borderRadius: {
        "tl-br": "var(--tw-border-radius-tl-br)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsm: "320px", // Extra small devices (portrait phones, less than 576px)
        sm: "640px", // Small devices (landscape phones, 576px and up)
        md: "768px", // Medium devices (tablets, 768px and up)
        lg: "1023px", // Large devices (desktops, 992px and up)
        xlg: "1280px", // Extra large devices (large desktops, 1200px and up)
        "max-xsm": { max: "319px" }, // Styles for devices smaller than 320px
        "max-sm": { max: "540px" }, // Styles for devices smaller than 640px
        "max-lsm": { max: "792px" },
        "max-md": { max: "854px" }, // Styles for devices smaller than 768px
        // 'max-lsm' : { 'max': '792'},
        "max-lg": { max: "1250px" }, // Styles for devices smaller than 1024px
        "max-xlg": { max: "1422px" },
      },

      colors: {
        "dark-svg": {
          DEFAULT: "#15161B",
        },
        bottom_border_gray: {
          DEFAULT: "#D4D5E7",
        },
        border_gray: {
          DEFAULT: "#BCBCBC",
        },
        bg_text_gray: {
          DEFAULT: "#878A99",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        bg_gray: {
          DEFAULT: "#F3F5FA",
        },
        blue: {
          DEFAULT: "#0038FF",
        },
        cards_gray: {
          DEFAULT: "#CFD2F4",
        },
        darkgray: {
          DEFAULT: "#333333",
        },
        gray_footer_text: {
          DEFAULT: "#575757",
        },
        lightgray: {
          DEFAULT: "#858585",
        },
        span: {
          DEFAULT: "#767676",
        },
      },
      spacing: {
        layout: "2rem",
        "layout-md": "4rem",
        "layout-lg": "8.4375rem",
        maxSize: "100rem",
        "video-h-md": "27.875rem",
        "video-h-sm": "20rem",
        "video-h": "16rem",
        "video-w-xl": "70.125rem",
        "video-w": "58rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-xsm::placeholder': {
          'font-size': '0.6rem',
        },
        '.placeholder-sm::placeholder': {
          'font-size': '0.75rem',
        },
        '.placeholder-base::placeholder': {
          'font-size': '1rem',
        },
        '.placeholder-lg::placeholder': {
          'font-size': '1.25rem',
        },
        '.placeholder-xl::placeholder': {
          'font-size': '1.5rem',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};
