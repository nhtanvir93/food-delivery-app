import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { COLORS } from "@/constants/theme";
import { useCartItems } from "@/hooks/useCartItems";
import { useColorScheme } from "@/lib/useColorScheme";

import { Separator } from "./ui/separator";

const DELIVERY_FEE = 5.99;

const Checkout = () => {
  const { restaurant, cartMenuItemList } = useCartItems();

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const subtotal = useMemo(() => {
    if (cartMenuItemList.length === 0) {
      return 0;
    }

    return cartMenuItemList.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  }, [cartMenuItemList]);

  return (
    <View className="flex-1">
      <View className="gap-3 p-4">
        <Text className="text-xl font-bold tracking-widest text-foreground">
          Your Order
        </Text>
        {restaurant.id && (
          <View className="flex-row gap-2">
            <Ionicons
              name="restaurant-outline"
              size={20}
              color={theme.textForeground}
            />
            <Text
              className="flex-1 tracking-wider text-foreground/80"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              from {restaurant.name}
            </Text>
          </View>
        )}
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
      {cartMenuItemList.length > 0 && (
        <>
          <Separator className="bg-foreground/20" />
          <View className="gap-2 p-4">
            <View className="flex-row justify-between">
              <Text className="tracking-wider text-foreground">Subtotal</Text>
              <Text className="tracking-wider text-foreground">
                ${subtotal.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="tracking-wider text-foreground">
                Delivery Fee
              </Text>
              <Text className="tracking-wider text-foreground">
                ${DELIVERY_FEE}
              </Text>
            </View>
            <Separator className="bg-foreground/10" />
            <View className="flex-row justify-between">
              <Text className="font-bold tracking-wider text-foreground">
                Total
              </Text>
              <Text className="font-bold tracking-wider text-foreground">
                ${(subtotal + DELIVERY_FEE).toFixed(2)}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Checkout;
