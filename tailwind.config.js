module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        primary: {
          desaturatedred: "hsl(0, 36%, 70%)",
          softred: "hsl(0, 93%, 68%)",
        },
        neutral: {
          darkgreyishred: "hsl(0, 6%, 24%)",
          redbluewhite: "#2B1980",
        },
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
