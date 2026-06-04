import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

import { Separator } from "./ui/separator";

const OrderTracking = ({ onClose }: { onClose: () => void }) => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

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
      <View className="flex-1 items-center justify-center gap-3">
        <Feather name="box" size={50} color={theme.textForeground} />
        <Text className="text-2xl font-bold tracking-wide text-foreground">
          No Orders Yet
        </Text>
        <Text className="text-lg tracking-wide text-foreground/60">
          Your order history will appear here
        </Text>
      </View>
    </View>
  );
};

export default OrderTracking;
