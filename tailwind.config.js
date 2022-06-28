const { backgroundPosition } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,html}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            maxwidth: "100%",
          },
        },
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1280px",
        xl: "1080px",
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "20px",
        },
        ".bg-logo": {
          backgroundImage: `url()`,
          backgroundPosition: "20px",
          backgroundRepeat: "no-repeat",
        },
       
        // ...
      });
    }),

    require("@tailwindcss/typography"),
  ],
};
