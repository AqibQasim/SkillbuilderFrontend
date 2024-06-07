/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xsm': '320px', // Extra small devices (portrait phones, less than 576px)
        'sm': '640px',  // Small devices (landscape phones, 576px and up)
        'md': '768px',  // Medium devices (tablets, 768px and up)
        'lg': '1024px', // Large devices (desktops, 992px and up)
        'xlg': '1280px', // Extra large devices (large desktops, 1200px and up)
      },
      colors: {
        blue: {
          DEFAULT: '#0038FF', // Sets the default shade for 'blue'
        },
        darkgray: {
          DEFAULT: '#333333', // Sets the default shade for 'darkgray'
        },
      }
    },
  },
  plugins: [],
};
