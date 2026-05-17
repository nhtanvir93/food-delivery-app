import { type ReactNode } from "react";
import { View } from "react-native";

import { useColorScheme } from "@/lib/useColorScheme";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { colorScheme } = useColorScheme();

  return (
    <View className={`flex-1 ${colorScheme === "dark" ? "dark" : ""}`}>
      {children}
    </View>
  );
}
