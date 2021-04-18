module.exports = {
  purge: [
    './*.html',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'heading': ['Quicksand']
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
