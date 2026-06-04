import Feather from "@expo/vector-icons/Feather";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { useActiveOrder } from "@/hooks/useActiveOrder";
import { getFormattedDatetime } from "@/lib/utils";

import { Separator } from "./ui/separator";

const OrderSuccess = () => {
  const {
    processedOrder,
    processModals: { close },
  } = useActiveOrder();

  useEffect(() => {
    setTimeout(() => close("orderSuccess"), 10 * 1000);
  }, [close]);

  if (!processedOrder) {
    return;
  }

  const total = processedOrder.cost.deliveryFee + processedOrder.cost.subtotal;

  return (
    <View className="gap-4">
      <View className="items-center gap-4">
        <Feather name="check-circle" size={40} color="#5ED45E" />
        <Text className="text-xl font-bold tracking-wider text-foreground">
          Order Placed Successfully
        </Text>
        <Text className="text-center tracking-wider text-foreground/50">
          Your ordered has been confirmed and will be delivered soon
        </Text>
      </View>
      <Separator className="bg-foreground/15" />
      <View className="my-4 gap-4">
        <View className="flex-row justify-between gap-4">
          <Text className="tracking-wider text-foreground/40">
            Delivery To :
          </Text>
          <Text className="text-foreground">{processedOrder.deliveryAddr}</Text>
        </View>
        <View className="flex-row justify-between gap-4">
          <Text className="tracking-wider text-foreground/40">Payment :</Text>
          <Text className="text-foreground">${total.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between gap-4">
          <Text className="tracking-wider text-foreground/40">
            Estimated Delivery At :
          </Text>
          <Text className="text-foreground">
            {getFormattedDatetime(processedOrder.estimatedDeliveryTime)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSuccess;
