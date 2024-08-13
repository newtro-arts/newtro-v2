/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#191919",
        "secondary-white": "#DFD4CC",
        "tertiary-purple": "#470F4F",
        "fourth-green": "#D1F121",
        "fifth-purple": "#485DE4",
        // Reset these old colors?
        black: "#050505",
        white: "#FDFDFD",
        "light-yellow": "#FFE76B",
        "hard-yellow": "#FDE374",
        gray: "#838383",
        "gray-button": "#BEBEBE",
        "gradient-lines":
          "linear-gradient(97.04deg, rgba(33, 33, 33, 0.6) 0%, rgba(33, 33, 33, 0) 110.66%)",
      },
      boxShadow: {
        buttons: "0px 20px 40px 0px #0000001A",
      },
      backgroundColor: {
        navbar:
          "linear-gradient(90deg, rgba(234, 234, 234, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)",
      },
      padding: {
        buttons: "5px 10px",
      },
      borderRadius: {
        cards: "15px",
      },
    },
  },
};
