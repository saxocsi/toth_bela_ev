import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 80px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
