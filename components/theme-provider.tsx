import { vars } from "nativewind";
import { type ReactNode } from "react";
import { View } from "react-native";

import { useColorScheme } from "@/lib/useColorScheme";

const lightTheme = vars({
  "--background": "255 255 255",
  "--primary": "10 10 10",
  "--primary-foreground": "255 255 255",
  "--secondary": "245 245 245",
  "--secondary-foreground": "255 255 255",
  "--destructive": "220 53 53",
  "--destructive-foreground": "255 255 255",
  "--accent": "41 121 255",
  "--accent-foreground": "255 255 255",
  "--text-foreground": "10 10 10",
  "--text-muted-foreground": "179 179 191",
  "--icon-background": "224 227 234",
  "--input": "242 242 247",
  "--star": "240 174 0",
  "--border": "215 215 215",
});

const darkTheme = vars({
  "--background": "10 10 10",
  "--primary": "38 38 38",
  "--primary-foreground": "255 255 255",
  "--secondary": "38 38 38",
  "--secondary-foreground": "10 10 10",
  "--text-foreground": "250 250 250",
  "--text-muted-foreground": "150 150 150",
  "--icon-background": "38 38 38",
  "--input": "255 255 255",
  "--star": "240 174 0",
  "--border": "50 50 50",
});

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { colorScheme } = useColorScheme();

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{ flex: 1 }, colorScheme === "dark" ? darkTheme : lightTheme]}
    >
      {children}
    </View>
  );
}
