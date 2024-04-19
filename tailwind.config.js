/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        74: "560px",
        128: "694px",
        256: "962px",
        740: "740px",
      },
      width: {
        584: "584px",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
}
