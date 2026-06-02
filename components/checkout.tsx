import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View, Text } from "react-native";

import { COLORS } from "@/constants/theme";
import { useCartItems } from "@/hooks/useCartItems";
import { useColorScheme } from "@/lib/useColorScheme";

import { Separator } from "./ui/separator";

const Checkout = () => {
  const { cartMenuItemList } = useCartItems();

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <View className="flex-1">
      <View className="p-4">
        <Text className="text-xl font-bold tracking-widest text-foreground">
          Your Order
        </Text>
      </View>
      <Separator className="bg-foreground/10" />
      <View className="flex-1 items-center justify-center gap-2">
        {cartMenuItemList.length === 0 && (
          <View className="items-center gap-3">
            <Feather
              name="shopping-bag"
              size={50}
              color={theme.textForeground}
            />
            <Text className="text-2xl font-bold tracking-wide text-foreground">
              Your cart is empty
            </Text>
            <Text className="text-lg tracking-wide text-foreground/60">
              Add items from the menu to get started
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Checkout;
