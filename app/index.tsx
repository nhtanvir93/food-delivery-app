import { Text } from "react-native";

import Header from "@/components/header";
import Screen from "@/components/Screen";

export default function HomeScreen() {
  return (
    <Screen header=<Header />>
      <Text>Home</Text>
    </Screen>
  );
}
