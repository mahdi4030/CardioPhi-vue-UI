/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F0F2F4",

        mainPrimary: "#066A94",
        borderPrimary: "#D9D9D9",
        drawerText: "rgba(0,0,0, 0.6)",
        drawerTextDark: "rgba(0,0,0, 0.87)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
