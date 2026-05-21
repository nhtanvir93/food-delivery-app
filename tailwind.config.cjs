/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
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
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        foreground: "hsl(var(--text-foreground))",
        "muted-foreground": "hsl(var(--text-muted-foreground))",
        "icon-background": "hsl(var(--icon-background))",
        notification: "hsl(var(--icon-background))",
        input: "hsl(var(--input))",
        star: "hsl(var(--star))"
      }
    },
  },
  plugins: [],
};
