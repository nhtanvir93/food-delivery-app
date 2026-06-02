import { Minus, Plus } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { type MenuItemType } from "@/constants/api-dummy-data";
import { type CartRestaurant } from "@/contexts/cart-items";
import { useCartItems } from "@/hooks/useCartItems";

const QuantityInput = ({
  menuItem,
  restaurant: currentRestaurant,
}: {
  menuItem: MenuItemType;
  restaurant: CartRestaurant;
}) => {
  const { restaurant, getCartMenuItem, incrementQuantity, decrementQuantity } =
    useCartItems();

  const cartItem = getCartMenuItem(menuItem.id);
  const quantity = cartItem?.quantity ?? 0;
  const clickable =
    restaurant.id === "" ||
    (restaurant.id !== "" && restaurant.id === currentRestaurant.id);

  return (
    <View className="flex-row items-center gap-2">
      {cartItem && (
        <View
          className={`flex-row items-center gap-2 ${quantity > 0 ? "opacity-100" : "opacity-0"}`}
        >
          <Button
            size="icon"
            className="rounded-full bg-icon-background active:bg-icon-background"
            onPress={() =>
              clickable && decrementQuantity(menuItem, quantity - 1)
            }
          >
            <Icon as={Minus} />
          </Button>
          <Text className="text-lg font-bold tracking-wide text-foreground">
            {quantity}
          </Text>
        </View>
      )}

      <Button
        size="icon"
        className="rounded-full bg-foreground active:bg-foreground"
        onPress={() =>
          clickable &&
          incrementQuantity(menuItem, quantity + 1, currentRestaurant)
        }
      >
        <Icon as={Plus} className="text-background" />
      </Button>
    </View>
  );
};

export default QuantityInput;
