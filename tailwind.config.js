/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28E98C",
        secondary: "#1AD2DF",
        bgPrimary: "#191D26",
        bgSecondary: "#2D323F",
        "gray-1": "#EAEAEA",
        "gray-9": "#1D212B",
        "green-2": "#00cf5d",
        "deep-green": "#00D991A1",
        "sea-green": "#37A5BF",
      },
    },
  },
  plugins: [],
};
