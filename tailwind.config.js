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
        pumpkin: "#F9C530",
        mushroom: "#8B4513",
      },
    },
  },
  plugins: [],
};
