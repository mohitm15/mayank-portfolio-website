module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background: {
        'hero-pattern':"linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
      },
      fontSize: {
        'xsm': '13px',
      }
    },
  },
  plugins: [],
}