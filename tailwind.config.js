/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#10131b",
        surface: "#10131b",
        "surface-dim": "#10131b",
        "surface-bright": "#363941",
        "surface-container-lowest": "#0b0e15",
        "surface-container-low": "#181b23",
        "surface-container": "#1d2027",
        "surface-container-high": "#272a32",
        "surface-container-highest": "#32353d",
        "surface-tint": "#c0c1ff",
        primary: "#c0c1ff",
        "on-primary": "#1000a9",
        "primary-container": "#8083ff",
        "on-primary-container": "#0d0096",
        "inverse-primary": "#494bd6",
        secondary: "#adc6ff",
        "on-secondary": "#002e6a",
        "secondary-container": "#0566d9",
        "on-secondary-container": "#e6ecff",
        "secondary-fixed-dim": "#adc6ff",
        tertiary: "#4edea3",
        "on-tertiary": "#003824",
        "tertiary-container": "#00885d",
        "on-tertiary-container": "#000703",
        "tertiary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#4edea3",
        "on-surface": "#e0e2ed",
        "on-surface-variant": "#c7c4d7",
        "on-background": "#e0e2ed",
        outline: "#908fa0",
        "outline-variant": "#464554",
      },
      fontFamily: {
        headline: ["Geist", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(78, 222, 163, 0.25)',
      }
    },
  },
  plugins: [],
}

