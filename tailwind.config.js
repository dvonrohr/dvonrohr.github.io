module.exports = {
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue",
  ],
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
