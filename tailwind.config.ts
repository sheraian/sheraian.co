import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1400px",
        xab: "1200px",
        
        customScreen: "850px", // 2XL Screens (Default)
      },
      rotate: {
        "-5": "-5deg",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },

      fontFamily: {
        poppins: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
