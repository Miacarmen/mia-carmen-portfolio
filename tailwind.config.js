module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["valentine"],
  },

  safelist: [
    {
      pattern: /./,
    },
  ],
  plugins: [require("daisyui")],
};
