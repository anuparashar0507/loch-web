/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      colors: {
        gray: {
          100: "#E5E5E6",
          200: "#CACBCC",
          300: "#B0B1B3",
          400: "#96979A",
          900: "#19191A",
        },
        neutral: {
          300: "#D4D4D4",
        },
        background: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
