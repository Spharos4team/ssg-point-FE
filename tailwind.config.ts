import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spoint: "#a16c0c",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans KR",
          "Malgun Gothic",
          "맑은고딕",
          "굴림",
          "gulim",
          "helvetica",
          "arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(110deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
        "gradient-primary-line":
          "linear-gradient(93.4deg,#f40000 -5.78%,#ff8a00 17.06%,#f8b404 33.44%,#f9ad05 48.81%,#ff8a00 64.68%,#b258cb 85.01%,#00c4b4 103.04%);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
