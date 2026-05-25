export const COLORS = {
  light: {
    background: "#FFFFFF",
    primary: "#0A0A0A",
    primaryForeground: "#FFFFFF",
    secondary: "#F5F5F5",
    secondaryForeground: "#FFFFFF",
    destructive: "#DC3535",
    destructiveForeground: "#FFFFFF",
    accent: "#2979FF",
    accentForeground: "#FFFFFF",
    textForeground: "#0A0A0A",
    textMutedForeground: "#B3B3BF",
    iconBackground: "#E0E3EA",
    input: "#F2F2F7",
    star: "#F0AE00",
    border: "#D7D7D7",
  },
  dark: {
    background: "#0A0A0A",
    primary: "#262626",
    primaryForeground: "#FFFFFF",
    secondary: "#262626",
    secondaryForeground: "#0A0A0A",
    destructive: "#DC3535",
    destructiveForeground: "#FFFFFF",
    accent: "#2979FF",
    accentForeground: "#FFFFFF",
    textForeground: "#FAFAFA",
    textMutedForeground: "#969696",
    iconBackground: "#262626",
    input: "#FFFFFF",
    star: "#F0AE00",
    border: "#323232",
  },
} as const;

export type ThemeMode = keyof typeof COLORS;
export type Theme = (typeof COLORS)[ThemeMode];
