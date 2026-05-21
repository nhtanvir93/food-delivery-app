/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@rn-primitives/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter_400Regular"],
        "sans-medium": ["Inter_500Medium"],
        "sans-semibold": ["Inter_600SemiBold"],
        "sans-bold": ["Inter_700Bold"],
      },
      colors: {
        background:        "rgb(var(--background) / <alpha-value>)",
        foreground:        "rgb(var(--text-foreground) / <alpha-value>)",
        "muted-foreground":"rgb(var(--text-muted-foreground) / <alpha-value>)",
        "icon-background": "rgb(var(--icon-background) / <alpha-value>)",
        input:             "rgb(var(--input) / <alpha-value>)",
        star:              "rgb(var(--star) / <alpha-value>)",
        primary: {
          DEFAULT:         "rgb(var(--primary) / <alpha-value>)",
          foreground:      "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT:         "rgb(var(--secondary) / <alpha-value>)",
          foreground:      "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT:         "rgb(var(--destructive) / <alpha-value>)",
          foreground:      "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT:         "rgb(var(--accent) / <alpha-value>)",
          foreground:      "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
      },
    },
  }
};
