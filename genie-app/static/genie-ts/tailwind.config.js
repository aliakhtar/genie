module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        jiraBlue: "#0052CC",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
