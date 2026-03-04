/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './template-pages/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // avoid resetting Webflow/global styles
  },
};
