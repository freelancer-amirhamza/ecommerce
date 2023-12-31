/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./admin/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f0b12b",
        color: "#666666",
        title: "#222222",
        orange: "#FA582C",
        green: "#669900"
      }
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
}
