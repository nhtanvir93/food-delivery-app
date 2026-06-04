import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COLORS } from "@/constants/theme";
import { type PaymentMode } from "@/contexts/orders";
import { useActiveOrder } from "@/hooks/useActiveOrder";
import { useCartItems } from "@/hooks/useCartItems";
import { useOrders } from "@/hooks/useOrders";
import { useColorScheme } from "@/lib/useColorScheme";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const OrderConfirmation = () => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const [deliveryAddr, setDeliveryAddr] = useState(
    "Devpahar, College Road, Chattogram",
  );

  const { placeOrder } = useOrders();

  const { restaurant, cartMenuItemList, deliveryFee, subtotal, clearCart } =
    useCartItems();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMode>("creditDebit");

  const {
    setProcessedOrder,
    processModals: { open, close },
  } = useActiveOrder();

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value as PaymentMode);
  };

  const handlePlaceOrder = () => {
    const currentOrder = placeOrder({
      deliveryAddr,
      restaurant,
      menuItems: cartMenuItemList,
      paymentMethod,
      cost: {
        deliveryFee,
        subtotal: subtotal(),
      },
    });

    clearCart();
    setProcessedOrder(currentOrder);
    close("confirmPayment");

    setTimeout(() => {
      open("orderSuccess");
    }, 300);
  };

  return (
    <View>
      <View className="my-4 gap-4">
        <View className="flex-row justify-between">
          <Text className="text-xl font-bold tracking-wider text-foreground">
            Checkout
          </Text>
          <AntDesign
            name="close"
            size={20}
            color={theme.textForeground}
            onPress={() => close("confirmPayment")}
          />
        </View>
        <View className="flex-row gap-2">
          <Ionicons
            name="restaurant-outline"
            size={20}
            color={theme.textForeground}
          />
          <Text
            className="flex-1 tracking-wider text-foreground/80"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            from <Text className="font-bold">{restaurant.name}</Text>
          </Text>
        </View>
      </View>
      <Separator className="bg-foreground/15" />
      <View className="my-6 gap-4">
        <View className="gap-2">
          <View className="flex-row gap-2">
            <Ionicons name="location-outline" size={24} color="gray" />
            <Text className="font-bold tracking-wider text-foreground">
              Delivery Address
            </Text>
          </View>
          <TextInput
            value={deliveryAddr}
            onChangeText={setDeliveryAddr}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ height: 40 }}
            className="flex-1 rounded-lg bg-icon-background px-4 py-2 dark:bg-white"
          />
        </View>
        <View className="gap-4">
          <View className="flex-row gap-2">
            <MaterialIcons name="payment" size={22} color="gray" />
            <Text className="font-bold tracking-wider text-foreground">
              Payment Method
            </Text>
          </View>
          <RadioGroup
            value={paymentMethod}
            onValueChange={handlePaymentMethodChange}
          >
            <Pressable onPress={() => handlePaymentMethodChange("creditDebit")}>
              <Card
                className={`w-full max-w-sm ${paymentMethod === "creditDebit" ? "border-foreground" : ""}`}
              >
                <CardContent className="flex-row items-center gap-4">
                  <RadioGroupItem value="creditDebit" id="r1" />
                  <View>
                    <Label
                      htmlFor="r1"
                      onPress={() => handlePaymentMethodChange("creditDebit")}
                      className="text-lg tracking-wider"
                    >
                      Credit/Debit Card
                    </Label>
                    <Text className="text-sm tracking-wider text-foreground/60">
                      Pay with card
                    </Text>
                  </View>
                </CardContent>
              </Card>
            </Pressable>
            <Pressable onPress={() => handlePaymentMethodChange("cash")}>
              <Card
                className={`w-full max-w-sm ${paymentMethod === "cash" ? "border-foreground" : ""}`}
              >
                <CardContent className="flex-row items-center gap-4">
                  <RadioGroupItem value="cash" id="r2" />
                  <View>
                    <Label
                      htmlFor="r2"
                      onPress={() => handlePaymentMethodChange("cash")}
                      className="text-lg tracking-wider"
                    >
                      Cash on Delivery
                    </Label>
                    <Text className="text-sm tracking-wider text-foreground/60">
                      Pay when you receive
                    </Text>
                  </View>
                </CardContent>
              </Card>
            </Pressable>
          </RadioGroup>
        </View>
      </View>
      <Separator className="bg-foreground/15" />
      <View className="my-6">
        <View className="flex-row justify-between">
          <Text className="text-lg font-bold tracking-wider text-foreground">
            Total
          </Text>
          <Text className="text-lg font-bold text-foreground">
            ${(subtotal() + deliveryFee).toFixed(2)}
          </Text>
        </View>
        <Button
          className="mt-4 bg-black dark:bg-white"
          disabled={deliveryAddr.trim().length === 0}
          onPress={handlePlaceOrder}
        >
          <Text className="font-bold tracking-wider text-white dark:text-black">
            Place Order
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default OrderConfirmation;
