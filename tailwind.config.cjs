/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F9",
        red: "#EA4D4D",
        green: "#2DC78F",
        gray: "#9896A1",
        black: "#0A041C",
        purple: "#7445FB",
        borderColor: "#EBEBF3",
      },
      fontFamily: {
        pro: ["SF Pro Display", "sans-serif"],
      },
      width: {
        small: "3rem",
        search: "12rem",
        mid: "4rem",
        large: "7rem",
      },
      height: {
        small: "3rem",
      },
      gridTemplateColumns: {
        main: "1fr 1fr 1fr 1fr 1fr 1fr",
      },
      gridTemplateRows: {
        main: "129px 400px 504px",
      },
      fontSize: {
        20: "20px",
        56: "56px",
      },
      fontWeight: {
        300: "300",
        400: "400",
      },
    },
  },
  plugins: [],
};
