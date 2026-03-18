/** @type {import('tailwindcss').Config} */
export default {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 theme: {
  extend: {
    animation: {
      marquee: "marquee 15s linear infinite",
    },
    keyframes: {
      slide: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
},
  plugins: [],
}

