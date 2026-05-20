import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { View, Text } from "react-native";

export default function Checkout() {
  return (
    <View className="relative w-[48px] rounded-full bg-secondary p-3">
      <AntDesign name="shopping-cart" size={24} color="black" />
      <View className="absolute -right-2 -top-2 size-7 items-center justify-center rounded-full bg-primary">
        <Text className="text-xs text-white">22</Text>
      </View>
    </View>
  );
}
