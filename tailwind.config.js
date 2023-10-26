/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: { sec: "rgb(60, 60, 67)" },
      backgroundColor: {sec: "rgb(60, 60, 67 ,0.2)"},
      flex: { "3el": "0 0 calc(33.33% - 20px)", "300": "0 0 300px" },
    },
  },
  plugins: [],
}

