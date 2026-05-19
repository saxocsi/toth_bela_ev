import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}", // ha nem src-es buildnél is jó
    "./components/**/*.{ts,tsx}", // ha nem src-es buildnél is jó
    "./src/app/**/*.{ts,tsx}", // ✅ nálad ez kell
    "./src/components/**/*.{ts,tsx}", // ✅ nálad ez kell
    "./src/styles/**/*.{css}", // opcionális
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
