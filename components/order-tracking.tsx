import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList } from "react-native";

import { COLORS } from "@/constants/theme";
import { useOrders } from "@/hooks/useOrders";
import { useColorScheme } from "@/lib/useColorScheme";

import OrderDetails from "./order-details";
import { Separator } from "./ui/separator";

const OrderListHeader = () => (
  <View className="mb-1">
    <Text className="text-lg font-bold text-foreground">Active Orders</Text>
  </View>
);

const OrderTracking = ({ onClose }: { onClose: () => void }) => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const { orders } = useOrders();

  return (
    <View className="flex-1">
      <View className="gap-3 p-4">
        <View className="flex-row justify-between py-2">
          <Text className="text-xl font-bold tracking-widest text-foreground">
            Order Tracking
          </Text>
          <AntDesign
            onPress={onClose}
            name="close"
            size={20}
            color={theme.textForeground}
          />
        </View>
      </View>
      <Separator className="bg-foreground/10" />
      {orders.length === 0 && (
        <View className="flex-1 items-center justify-center gap-3">
          <Feather name="box" size={50} color={theme.textForeground} />
          <Text className="text-2xl font-bold tracking-wide text-foreground">
            No Orders Yet
          </Text>
          <Text className="text-lg tracking-wide text-foreground/60">
            Your order history will appear here
          </Text>
        </View>
      )}
      {orders.length > 0 && (
        <FlatList
          data={orders}
          showsVerticalScrollIndicator={false}
          keyExtractor={(order) => `orders-${order.id}`}
          ListHeaderComponent={OrderListHeader}
          renderItem={({ item }) => {
            return <OrderDetails key={item.id} order={item} />;
          }}
          contentContainerClassName="p-4 gap-4"
        />
      )}
    </View>
  );
};

export default OrderTracking;
