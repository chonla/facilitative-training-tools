/** @type {import('tailwindcss').Config} */
module.exports = {
  publicPath: "/facilitative-training-tools/",
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.{html,md}",
    "./_posts/*.md",
    "./*.{html,md}",
    "./assets/css/*.css"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

