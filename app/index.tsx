import { Text, View } from "react-native";

import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1 justify-end">
        <Text className="text-center text-text">Home Screen</Text>
      </View>
    </Screen>
  );
}
