/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/pages/explore.jsx",
    "./src/components/card.jsx",
    "./src/components/Navbar.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/explore.jsx",
    "./src/pages/About.jsx",
    "./src/pages/FAQ.jsx",
    "./src/pages/NotFound.jsx",
    "./src/components/questions.jsx"
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
      },
      colors: {
        "beige-light": "var(--beige-light)",
        "beige-dark": "var(--beige-dark)",
        olive: "var(--olive)",
        purple: "var(--purple)",
        pink: "var(--pink)",
      },
    },
  },
  plugins: [],
};
