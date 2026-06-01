import { Minus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text } from "react-native";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const QuantityInput = ({
  onQuantityChange,
}: {
  onQuantityChange: (quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const decrement = () => {
    setQuantity((prev) => {
      const newQuantity = prev - 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <View className="flex-row items-center gap-2">
      <View
        className={`flex-row items-center gap-2 ${quantity > 0 ? "opacity-100" : "opacity-0"}`}
      >
        <Button
          size="icon"
          className="rounded-full bg-icon-background active:bg-icon-background"
          onPress={decrement}
        >
          <Icon as={Minus} />
        </Button>
        <Text className="text-lg font-bold tracking-wide text-foreground">
          {quantity}
        </Text>
      </View>
      <Button
        size="icon"
        className="rounded-full bg-foreground active:bg-foreground"
        onPress={increment}
      >
        <Icon as={Plus} className="text-background" />
      </Button>
    </View>
  );
};

export default QuantityInput;
