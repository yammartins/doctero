module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: [
    "./src/components/*.tsx",
    "./src/components/**/*.tsx",
    "./src/pages/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/styles/*.scss",
  ],
}
