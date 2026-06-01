import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { View, Text } from "react-native";

import { Button } from "@/components/ui/button";
import { COLORS } from "@/constants/theme";
import { useCartItems } from "@/hooks/useCartItems";
import { useColorScheme } from "@/lib/useColorScheme";

const CartItemAlert = () => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const { clearCart } = useCartItems();

  return (
    <View className="flex-1 flex-row gap-3 rounded-xl border border-star/15 bg-star/5 px-3 py-4">
      <Entypo name="warning" size={20} color={theme.star} />
      <View className="flex-1">
        <Text className="mb-1 font-bold tracking-wide text-star/70">
          Items from another restaurant
        </Text>
        <Text className="text-sm tracking-wide text-star/50">
          Your cart has items from a different restaurant. Clear your cart to
          add items from here.
        </Text>
        <Button className="mt-4 bg-star/80" onPress={clearCart}>
          <Text className="font-bold tracking-wide text-white">
            Clear Cart & Start New Order
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default CartItemAlert;
