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
        darkGray: "#232730",
        lightGray: "#343a46",
        textColor: "#2f1c6b",
        primaryLight: "#ECFDF5",
      },
    },
  },
  plugins: [],
};
