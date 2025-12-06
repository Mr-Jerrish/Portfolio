// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "glass-900": "rgba(255,255,255,0.04)",
        accent: "#7c3aed", // purple accent
      },
      boxShadow: {
        "glow-sm": "0 2px 10px rgba(124,58,237,0.12)",
        "glow-md": "0 6px 30px rgba(124,58,237,0.16)",
      },
    },
  },
  plugins: [],
};
