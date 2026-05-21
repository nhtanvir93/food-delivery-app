import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import { type Theme } from "@/constants/theme";

const Location = ({ theme }: { theme: Theme }) => {
  return (
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
  );
};

export default Location;
