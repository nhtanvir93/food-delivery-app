import { View, Text } from "react-native";

import Screen from "@/components/Screen";
import SearchInput from "@/components/search-input";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="gap-2">
        <Text className="text-xl font-bold tracking-wide text-foreground">
          What would you like to eat?
        </Text>
        <SearchInput />
      </View>
    </Screen>
  );
}
