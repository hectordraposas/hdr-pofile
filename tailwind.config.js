/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "self-img": "url('/src/images/self.png')",
      },
    },
  },
  plugins: [],
};
