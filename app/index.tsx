import { View } from "react-native";

import Checkout from "@/components/checkout";
import DeliveryLocation from "@/components/delivery-location";
import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <DeliveryLocation className="w-3/4" />
          <Checkout />
        </View>
      </View>
    </Screen>
  );
}
