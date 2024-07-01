import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'custom-blue': '#1e3a8a', // Add your custom colors here
        'custom-green': '#10b981',
        'custom-yellow': '#f59e0b',
        'bgcolor':'#2f4454',
        'cardColour':'#00737E'
      },
    },
  },
  plugins: [],
};
export default config;
