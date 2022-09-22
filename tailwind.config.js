module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#673ee5",
        darkGray: "#0f172a",
        lightGray: "#1e293b",
        textColor: "#2f1c6b",
        primaryLight: "#ECFDF5",
      },
    },
  },
  plugins: [],
};
