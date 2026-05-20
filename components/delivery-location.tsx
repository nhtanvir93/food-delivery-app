import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, Text } from "react-native";

import { Colors } from "@/constants/theme";

export default function DeliveryLocation({
  className,
}: {
  className?: string;
}) {
  return (
    <View className={`flex-row gap-2 ${className && className}`}>
      <View className="justify-center">
        <FontAwesome6 name="location-dot" size={24} color={Colors.secondary} />
      </View>
      <View>
        <Text className="font-bold tracking-widest text-primary">
          Deliver to
        </Text>
        <View className="flex-row items-center gap-2">
          <Text numberOfLines={1} ellipsizeMode="tail">
            Devpahar, College Road, Chawbazar
          </Text>
          <FontAwesome name="chevron-down" size={12} color={Colors.secondary} />
        </View>
      </View>
    </View>
  );
}
