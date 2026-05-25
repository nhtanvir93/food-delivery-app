import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import { FlatList, View, Text, Pressable } from "react-native";

import { getFoodCategories } from "@/lib/utils";

const Categories = ({
  setActiveCategory,
}: {
  setActiveCategory: Dispatch<SetStateAction<string>>;
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    setCategories(getFoodCategories());
  }, []);

  return (
    <View>
      <Text className="mb-4 text-xl font-bold tracking-wide text-foreground">
        Categories
      </Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, idx) => `category-${idx}`}
        renderItem={({ item: category }) => (
          <Pressable
            className={`rounded-3xl px-6 py-2 ${category === active ? "bg-foreground" : "bg-icon-background"}`}
            onPress={() => {
              const next = active === category ? "" : category;
              setActive(next);
              setActiveCategory(next);
            }}
          >
            <Text
              className={`tracking-wide ${category === active ? "text-background" : "text-foreground"}`}
            >
              {category}
            </Text>
          </Pressable>
        )}
        contentContainerClassName="gap-3"
      />
    </View>
  );
};

export default Categories;
