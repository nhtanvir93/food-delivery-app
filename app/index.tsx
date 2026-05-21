import { useRef } from "react";
import { View, Text } from "react-native";

import Screen from "@/components/Screen";
import SearchInput, { type SearchInputType } from "@/components/search-input";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  const searchInputRef = useRef<SearchInputType>(null);

  return (
    <Screen>
      <View className="gap-2">
        <Text className="text-xl font-bold tracking-wide text-foreground">
          What would you like to eat?
        </Text>
        <SearchInput ref={searchInputRef} />
        <Button
          onPress={() => console.log(searchInputRef?.current?.getValue())}
          variant="outline"
        >
          <Text className="text-foreground">Search</Text>
        </Button>
      </View>
    </Screen>
  );
}
