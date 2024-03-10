/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#facc15",
        secondary: "",
        background: "#0c0a09",
        foreground: "#292524",
        front: "#fafaf9",
        back: "#422006",
        A: "var(--A)",
        B: "var(--B)",
        C: "var(--C)",
        D: "var(--D)",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
        geist: '"Geist Sans", sans-serif',
      },
      zIndex: {
        "1": "1",
      },
    },
  },
  plugins: [],
};
