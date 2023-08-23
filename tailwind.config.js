/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  //적용 경로 확인
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-active": "#d9044b",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(110deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
        "gradient-primary-line":
          "linear-gradient(93.4deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
        "gradient-primary-line2":
          "linear-gradient(106.4deg,#eb0000 6.03%,#eb6612 21.34%,#c68200 37.11%,#fc348c 52.88%,#7720a7 67.72%,#0ca19a 82.1%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
