import { type ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./header/header";

interface Props {
  children: ReactNode;
}

export default function Screen({ children: content }: Props) {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="relative flex-1 bg-background"
    >
      <Header />
      <View className="flex-1 p-4">{content}</View>
    </SafeAreaView>
  );
}
