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
      boxShadow: {
        "custom-input": "0 4px 6px rgba(56, 71, 255, 0.11)",
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
        "max-lsm": { max: "767px" },
        "max-md": { max: "854px" }, // Styles for devices smaller than 768px
        // for footer
        "max-plg": { max: "980px" },
        "max-lg": { max: "1250px" }, // Styles for devices smaller than 1024px
        "max-xlg": { max: "1422px" },
      },

      colors: {
        "dashboard-border": {
          DEFAULT: "#E0E3F0",
        },
        status: {
          text: "#535353",
          red: "#FF0000",
          "red-bg": "#FFF2F2",
          orange: "#FF7A00",
          "orange-bg": "#FFF4EB",
          green: "#18B100",
          "green-bg": "#EDFFEB",
        },
        "dashboard-sidenav-bg": {
          DEFAULT: "#EBECF0",
        },
        "dark-svg": {
          DEFAULT: "#15161B",
        },
        "google-border": {
          DEFAULT: "#D5D5D5",
        },
        bottom_border_gray: {
          DEFAULT: "#D4D5E7",
        },
        secondary: {
          DEFAULT: "#F1F1F5",
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
  plugins: [],
};
