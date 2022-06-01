module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /./
    },
  ],
  plugins: [require("daisyui")],
}
