module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this
  ],
  theme: {
    extend: {
      screens: {
        customScreen: "850px", // 2XL Screens (Default)
      },
      fontFamily: {
        poppins: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
