import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

import HeaderActions from "./header-actions";
import Location from "./location";

const Header = () => {
  const { colorScheme } = useColorScheme();
  const theme = useMemo(() => {
    return colorScheme === "dark" ? COLORS.dark : COLORS.light;
  }, [colorScheme]);

  return (
    <View
      className="flex-row items-center border-b border-b-border p-4"
      style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
    >
      <View className="w-1/2 flex-row gap-3">
        <Ionicons
          name="fast-food-outline"
          size={28}
          color={theme.textForeground}
        />
        <View className="flex-1 gap-1">
          <Text className="text-2xl font-bold text-foreground">FoodHub</Text>
          <Location theme={theme} />
        </View>
      </View>
      <HeaderActions />
    </View>
  );
};

export default Header;
