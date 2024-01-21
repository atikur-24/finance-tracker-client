/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1AD2DF",
        secondary: "#0ED4E2",
        "gray-1": "#EAEAEA",
        "gray-2": "#EFF0F5",
        "gray-3": "#949494",
        "gray-4": "#707070",
        "gray-5": "#9C9C9C",
        "gray-6": "#434343",
        "gray-7": "#2E2E2E",
        "sea-green": "#37A5BF",
      },
    },
  },
  plugins: [],
};
