import { Image } from "expo-image";
import React, { useCallback } from "react";
import { View, Text } from "react-native";

import { type MenuItemType } from "@/constants/api-dummy-data";
import { useCartItems } from "@/hooks/useCartItems";

import QuantityInput from "./quantity-input";
import { Card, CardContent } from "./ui/card";

interface Props {
  item: MenuItemType;
  restaurantId: string;
  addToCart: (itemId: string, quantity: number) => void;
}

const MenuItem = ({ item, restaurantId, addToCart }: Props) => {
  const { restaurant, cartMenuItemList } = useCartItems();

  const getCartMenuItem = useCallback(
    (menuItemId: string) =>
      cartMenuItemList.find((menuItem) => menuItem.id === menuItemId),
    [cartMenuItemList],
  );

  return (
    <View>
      <Card className="mb-3 w-full py-3">
        <CardContent className="flex-row gap-3 px-3">
          <Image
            source={{ uri: item.image }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 90, height: 90, borderRadius: 8 }}
            contentFit="cover"
          />
          <View className="flex-1 justify-between">
            <View>
              <Text className="mb-1 font-semibold tracking-wide text-foreground">
                {item.name}
              </Text>
              <Text
                className="mb-2 text-xs tracking-wide text-muted-foreground"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.description}
              </Text>
            </View>
            <View className="flex-row items-end justify-between">
              <Text className="font-bold tracking-wide text-foreground">
                ${item.price.toFixed(2)}
              </Text>
              <QuantityInput
                key={item.id}
                initialQuantity={getCartMenuItem(item.id)?.quantity ?? 0}
                clickable={
                  restaurant.id === restaurantId || restaurant.id === ""
                }
                onQuantityChange={(quantity: number) =>
                  addToCart(item.id, quantity)
                }
              />
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
};

export default MenuItem;
