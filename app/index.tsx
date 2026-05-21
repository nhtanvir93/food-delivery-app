import { View, Text } from "react-native";

import Checkout from "@/components/checkout";
import DeliveryLocation from "@/components/delivery-location";
import Screen from "@/components/Screen";

import ScreenHeader from "../components/screen-header";

export default function HomeScreen() {
  return (
    <Screen
      header=<ScreenHeader>
        <View className="flex-row items-center justify-between">
          <DeliveryLocation className="w-3/4" />
          <Checkout />
        </View>
      </ScreenHeader>
    >
      <Text>Home</Text>
    </Screen>
  );
}
