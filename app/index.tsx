import { View } from "react-native";

import DeliveryLocation from "@/components/delivery-location";
import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1">
        <DeliveryLocation className="w-2/4" />
      </View>
    </Screen>
  );
}
