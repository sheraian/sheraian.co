module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this
  ],
  theme: {
    extend: {
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
};
