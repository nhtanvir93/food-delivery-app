import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { View, Text } from "react-native";

import { Badge } from "@/components/ui/badge";

export default function Checkout() {
  return (
    <View className="relative w-[48px] rounded-full bg-secondary-btn p-3">
      <AntDesign name="shopping-cart" size={24} color="black" />
      <Badge className="absolute -right-3 -top-2 size-8 rounded-full px-1">
        <Text className="text-xs text-white">99+</Text>
      </Badge>
    </View>
  );
}
