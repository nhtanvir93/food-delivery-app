import { type ReactNode } from "react";
import { useColorScheme, View } from "react-native";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const colorScheme = useColorScheme();

  return (
    <View className={`flex-1 ${colorScheme === "dark" ? "dark" : ""}`}>
      {children}
    </View>
  );
}
