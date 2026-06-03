import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";

import { COLORS } from "@/constants/theme";
import useCartDrawer from "@/hooks/useCartDrawer";
import { useCartItems } from "@/hooks/useCartItems";
import { useModal } from "@/hooks/useModal";
import { useColorScheme } from "@/lib/useColorScheme";

import MenuItem from "./menu-item";
import { BaseModal } from "./ui/base-modal";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const DELIVERY_FEE = 5.99;

type CheckoutModals = "confirmPayment" | "confirmOrder";

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const { open, close, isOpen } = useModal<CheckoutModals>([
    "confirmPayment",
    "confirmOrder",
  ]);

  const { restaurant, cartMenuItemList } = useCartItems();
  const { setOpenCartDrawer } = useCartDrawer();

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const subtotal = useMemo(() => {
    if (cartMenuItemList.length === 0) {
      return 0;
    }

    return cartMenuItemList.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  }, [cartMenuItemList]);

  const checkout = () => {
    setOpenCartDrawer(false);
    open("confirmPayment");
  };

  return (
    <View className="flex-1">
      <BaseModal
        open={isOpen("confirmPayment")}
        onClose={() => close("confirmPayment")}
      >
        <Text className="text-xl font-bold text-foreground">
          Confirm Payment
        </Text>
        <Text className="text-foreground/70">Ready to place your order?</Text>
        <View className="mt-2 flex-row justify-end gap-3">
          <Button variant="destructive" onPress={() => close("confirmPayment")}>
            <Text className="text-white">Cancel</Text>
          </Button>
          <Button onPress={() => close("confirmPayment")}>
            <Text className="text-white">Confirm</Text>
          </Button>
        </View>
      </BaseModal>
      <View className="gap-3 p-4">
        <View className="flex-row justify-between py-2">
          <Text className="text-xl font-bold tracking-widest text-foreground">
            Your Order
          </Text>
          <AntDesign
            onPress={onClose}
            name="close"
            size={20}
            color={theme.textForeground}
          />
        </View>
        {restaurant.id && (
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
        )}
      </View>
      <Separator className="bg-foreground/10" />
      <View className="flex-1 gap-2">
        {cartMenuItemList.length > 0 && (
          <FlatList
            data={cartMenuItemList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `cart-item-${item.id}`}
            renderItem={({ item }) => {
              return (
                <MenuItem key={item.id} item={item} restaurant={restaurant} />
              );
            }}
            contentContainerClassName="p-4"
          />
        )}
        {cartMenuItemList.length === 0 && (
          <View className="flex-1 items-center justify-center gap-3">
            <Feather
              name="shopping-bag"
              size={50}
              color={theme.textForeground}
            />
            <Text className="text-2xl font-bold tracking-wide text-foreground">
              No items yet. Hungry?
            </Text>
            <Text className="text-lg tracking-wide text-foreground/60">
              Add items from the menu to get started
            </Text>
          </View>
        )}
      </View>
      {cartMenuItemList.length > 0 && (
        <View>
          <Separator className="bg-foreground/20" />
          <View className="gap-2 p-4">
            <View className="flex-row justify-between">
              <Text className="tracking-wider text-foreground">Subtotal</Text>
              <Text className="tracking-wider text-foreground">
                ${subtotal.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="tracking-wider text-foreground">
                Delivery Fee
              </Text>
              <Text className="tracking-wider text-foreground">
                ${DELIVERY_FEE}
              </Text>
            </View>
            <Separator className="bg-foreground/10" />
            <View className="flex-row justify-between">
              <Text className="font-bold tracking-wider text-foreground">
                Total
              </Text>
              <Text className="font-bold tracking-wider text-foreground">
                ${(subtotal + DELIVERY_FEE).toFixed(2)}
              </Text>
            </View>
            <Button onPress={checkout}>
              <Text className="text-white">Checkout</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Checkout;
