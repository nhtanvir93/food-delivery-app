import { Text, View } from "react-native";

import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1 bg-background">
        <Text className="text-center font-extrabold">Home Screen</Text>
        <View className="h-16 w-full bg-primary" />
        <View className="h-16 w-full bg-secondary" />
        <View className="h-16 w-full bg-tertiary" />
        <View className="h-16 w-full bg-neutral" />
        <View className="h-16 w-full bg-background" />
        <View className="h-16 w-full bg-border" />
        <View className="h-16 w-full bg-foreground" />
        <View className="h-16 w-full bg-foreground-muted" />
        <Text className="text-foreground">Hello World</Text>
      </View>
    </Screen>
  );
}
