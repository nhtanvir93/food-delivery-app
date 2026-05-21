import { type ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  header: ReactNode;
  children: ReactNode;
}

export default function Screen({ header, children: content }: Props) {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="relative flex-1 bg-background"
    >
      {header}
      <View className="flex-1 p-4">{content}</View>
    </SafeAreaView>
  );
}
