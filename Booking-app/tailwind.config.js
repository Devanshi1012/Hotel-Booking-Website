/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        scene: "url('src/Image/bgimage2.jpg')",
        hotel: "url('src/Image/hotel3.jpg')",
      }),
    },
  },
  plugins: [],
};
