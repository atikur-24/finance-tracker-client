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
        "gray-2": "#EFF0F5",
        "green-2": "#00cf5d",
        "sea-green": "#37A5BF",
      },
    },
  },
  plugins: [],
};
