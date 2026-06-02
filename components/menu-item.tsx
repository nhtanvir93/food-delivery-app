import { Image } from "expo-image";
import React from "react";
import { View, Text } from "react-native";

import { type MenuItemType } from "@/constants/api-dummy-data";
import { type CartRestaurant } from "@/contexts/cart-items";

import QuantityInput from "./quantity-input";
import { Card, CardContent } from "./ui/card";

interface Props {
  item: MenuItemType;
  restaurant: CartRestaurant;
}

const MenuItem = ({ item, restaurant: currentRestaurant }: Props) => {
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
                menuItem={item}
                restaurant={currentRestaurant}
              />
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
};

export default MenuItem;
