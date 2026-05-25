import { useRef } from "react";
import { View, Text } from "react-native";

import Categories from "@/components/categories";
import Restaurants from "@/components/restaurants";
import Screen from "@/components/Screen";
import SearchInput, { type SearchInputType } from "@/components/search-input";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  const searchInputRef = useRef<SearchInputType>(null);

  return (
    <Screen>
      <View className="flex-1 gap-4">
        <View className="gap-3">
          <Text className="text-xl font-bold tracking-wide text-foreground">
            What would you like to eat?
          </Text>
          <SearchInput ref={searchInputRef} />
          <Button
            onPress={() => console.log(searchInputRef?.current?.getValue())}
          >
            <Text className="tracking-wide text-primary-foreground">
              Search
            </Text>
          </Button>
        </View>
        <View className="flex-1 gap-4">
          <Categories />
          <Restaurants />
        </View>
      </View>
    </Screen>
  );
}
