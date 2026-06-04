import { Image } from "expo-image";
import React from "react";
import { View, Text } from "react-native";

import { statusConfig } from "@/constants/api-dummy-data";
import { type Order } from "@/contexts/orders";
import { getFormattedDatetime, getOrderProgress } from "@/lib/utils";

import { Card, CardContent } from "./ui/card";
import DynamicIcon from "./ui/dynamic-icon";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";

const OrderDetails = ({ order }: { order: Order }) => {
  return (
    <Card className="w-full">
      <CardContent className="-m-3 gap-4">
        <View className="flex-row gap-3">
          <Image
            source={{ uri: order.restaurant.image }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 80, height: 80, borderRadius: 8 }}
            contentFit="cover"
          />
          <View className="flex-1 flex-row justify-between gap-2">
            <View className="justify-between">
              <Text
                className="font-semibold tracking-wide text-foreground"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {order.restaurant.name}
              </Text>
              <Text
                className="tracking-wide text-muted-foreground"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Order #{order.id}
              </Text>
              <Text className="font-semibold tracking-wide text-foreground">
                ${(order.cost.deliveryFee + order.cost.subtotal).toFixed(2)}
              </Text>
              <Text
                className="tracking-wide text-muted-foreground"
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {getFormattedDatetime(order.orderTime)}
              </Text>
            </View>
          </View>
        </View>
        <Separator className="bg-foreground/10" />
        <View className="gap-3">
          <View className="flex-row gap-2">
            <DynamicIcon
              icon={statusConfig[order.status].icon}
              color={statusConfig[order.status].hex}
            />
            <Text
              className="tracking-wider"
              style={{ color: statusConfig[order.status].hex }}
            >
              {statusConfig[order.status].label}
            </Text>
          </View>
          {order.menuItems.map((item) => (
            <View key={item.id} className="flex-row justify-between gap-4">
              <Text
                className="text-sm text-foreground"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.quantity}x {item.name}
              </Text>
              <Text className="text-sm font-bold text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
        <Separator className="bg-foreground/10" />
        <View className="gap-3">
          <View className="flex-row justify-between gap-4">
            <Text className="font-bold tracking-wider text-foreground">
              Delivery to:
            </Text>
            <Text className="flex-1 text-foreground">{order.deliveryAddr}</Text>
          </View>
          <View className="flex-row justify-between gap-4">
            <Text className="font-bold tracking-wider text-foreground">
              Estimated Delivery:
            </Text>
            <Text className="text-foreground">
              {getFormattedDatetime(order.estimatedDeliveryTime)}
            </Text>
          </View>
          <Progress
            value={getOrderProgress(order.statusIdx)}
            indicatorClassName={statusConfig[order.status].color}
          />
        </View>
      </CardContent>
    </Card>
  );
};

export default OrderDetails;
