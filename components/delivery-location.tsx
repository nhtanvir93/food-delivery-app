import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, Text } from "react-native";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

export default function DeliveryLocation({
  className,
}: {
  className?: string;
}) {
  const { colorScheme } = useColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View className={`flex-row gap-2 ${className && className}`}>
      <View className="justify-center">
        <FontAwesome6 name="location-dot" size={24} color={theme.secondary} />
      </View>
      <View>
        <Text className="font-bold tracking-widest text-secondary">
          Deliver to
        </Text>
        <View className="flex-row items-center gap-2">
          <Text numberOfLines={1} ellipsizeMode="tail" className="text-text">
            Devpahar, College Road, Chawbazar
          </Text>
          <FontAwesome name="chevron-down" size={12} color={theme.secondary} />
        </View>
      </View>
    </View>
  );
}
