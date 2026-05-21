import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, Pressable } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

const Header = () => {
  const { colorScheme } = useColorScheme();

  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <View className="flex-row items-center border-b border-b-border p-4">
      <View className="w-1/2 flex-row gap-3">
        <Ionicons
          name="fast-food-outline"
          size={28}
          color={theme.textForeground}
        />
        <View className="flex-1 gap-1">
          <Text className="text-2xl text-foreground">FoodHub</Text>
          <View className="ml-[-4px] flex-row gap-1">
            <Ionicons
              name="location-outline"
              size={20}
              color={theme.textMutedForeground}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="flex-1 text-sm text-muted-foreground"
            >
              Devpahar, College Road, Chawkbazar
            </Text>
          </View>
        </View>
      </View>
      <View className="w-1/2 flex-row items-center justify-end gap-2 self-stretch">
        <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
          <FontAwesome name="moon-o" size={20} color={theme.textForeground} />
        </Pressable>
        <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
          <Feather name="box" size={20} color={theme.textForeground} />
        </Pressable>
        <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
          <Feather name="shopping-bag" size={20} color={theme.textForeground} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
