module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background: {
        'hero-pattern':"linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
        'glow':"linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)"
      },
      fontSize: {
        'xsm': '13px',
      },
      dropShadow: {
        '4xl': '1px 0px 20px white',
        '3xl': '0px 0px 20px #b2eff7',
        '2xl': '0px 0px 1px #ffffff',
        'xl' : '0px 0px 50px linear-gradient( to right, #ffffff , #fffacc)'
      } 
    },
  },
  plugins: [],
}