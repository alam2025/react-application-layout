/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryBlue: "#4F46E5",
        cream: "#F4F5FA ",
        light: "#6B7280",
        dark: "#28243D",
        hoverMenu: "#EDEDF3",
        hoverMenudark: "#2F2B44",
      },
    },
  },
  plugins: [],
};
