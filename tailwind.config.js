/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
 presets: [require("nativewind/preset")],
 theme: {
  extend: {
   fontFamily: {
    DMSans: ["DM Sans", "sans-serif"],
    SpaceGrotesk: ["Space Grotesk", "sans-serif"],
   },
   colors: {
    brand: "#0898A0",
    customGray: "#787878",
   },
   boxShadow: {
    multi: "0px 2px 5px 0px rgba(117, 111, 111, 0.2)",
   },
  },
 },
 plugins: [],
};
