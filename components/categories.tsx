import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

import { getFoodCategories } from "@/lib/utils";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(getFoodCategories());
  }, []);

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, idx) => `category-${idx}`}
      renderItem={({ item: category }) => (
        <View className="rounded-3xl bg-icon-background px-6 py-2">
          <Text className="tracking-wide text-foreground">{category}</Text>
        </View>
      )}
      contentContainerClassName="gap-3"
    />
  );
};

export default Categories;
