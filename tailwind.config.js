/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        strawberry: "#ff6347",
        orange: "#ffa500",
        lime: "#32cd32",
        spinach: "#276749",
        pumpkin: "#f9c530",
        mushroom: "#8b4513",
      },
    },
  },
  plugins: [],
};
