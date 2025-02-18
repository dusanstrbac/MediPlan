import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'scooter': {
          '50': '#ebfffe',
          '100': '#ceffff',
          '200': '#a2fcff',
          '300': '#63f7fd',
          '400': '#1ce8f4',
          '500': '#00c3d1',
          '600': '#03a2b7',
          '700': '#0a8194',
          '800': '#126778',
          '900': '#145565',
          '950': '#063946',
        },
        'fern-green': {
          '50': '#f5f9f4',
          '100': '#eaf1e7',
          '200': '#d4e3cf',
          '300': '#b1cca9',
          '400': '#87ad7b',
          '500': '#658f58',
          '600': '#517746',
          '700': '#405d38',
          '800': '#364b30',
          '900': '#2d3e29',
          '950': '#162013',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
