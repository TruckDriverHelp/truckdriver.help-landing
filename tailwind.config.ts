import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      "white": "#F5F4F4",
      "gray-text": "#9B9B9B",
      "gray": "#EDEDED",
      "soft-gray": "#F8F8F8",
      "primary": "#9288F8",
      "purple": "#3C3C77",
      "dark-purple": "#303055"
    }
  },
  plugins: [],
};
export default config;
