/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bg: "hsl(0, 0%, 98%)",
      elements: "hsl(0, 0%, 100%)",
      inputs: "hsl(0, 0%, 52%)",
      text: "hsl(200, 15%,8%)",
      bgDark: "hsl(207, 26%, 17%)",
      elementsDark: "hsl(209, 23%, 22%)",
      inputsDark: "hsl(0, 0%, 52%)",
      textDark: "hsl(0, 0%, 100%)",
    },
    extend: {
      rounded: {
        dropdown: "1em",
      },
      gap: {
        cards: "2.66rem",
      },
      minHeight: {
        detailImg: "384px",
      },
      minWidth: {
        cardResponsive: "366px"
      },
      boxShadow: {
        filterDropdown: "0px 2px 5px 0px rgb(0 0 0 / 50%)",
      },
    },
  },
  plugins: [],
};
