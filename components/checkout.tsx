import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, FlatList } from "react-native";

import { COLORS } from "@/constants/theme";
import useCartDrawer from "@/hooks/useCartDrawer";
import { useCartItems } from "@/hooks/useCartItems";
import { useModal } from "@/hooks/useModal";
import { useColorScheme } from "@/lib/useColorScheme";

import MenuItem from "./menu-item";
import OrderConfirmation from "./order-confirmation";
import { BaseModal } from "./ui/base-modal";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type CheckoutModals = "confirmPayment" | "confirmOrder";

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const { open, close, isOpen } = useModal<CheckoutModals>([
    "confirmPayment",
    "confirmOrder",
  ]);

  const { restaurant, cartMenuItemList, deliveryFee, subtotal } =
    useCartItems();
  const { setOpenCartDrawer } = useCartDrawer();

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

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
        <OrderConfirmation onClose={() => close("confirmPayment")} />
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
                ${subtotal().toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="tracking-wider text-foreground">
                Delivery Fee
              </Text>
              <Text className="tracking-wider text-foreground">
                ${deliveryFee}
              </Text>
            </View>
            <Separator className="bg-foreground/10" />
            <View className="flex-row justify-between">
              <Text className="font-bold tracking-wider text-foreground">
                Total
              </Text>
              <Text className="font-bold tracking-wider text-foreground">
                ${(subtotal() + deliveryFee).toFixed(2)}
              </Text>
            </View>
            <Button onPress={checkout} className="mt-4 bg-black dark:bg-white">
              <Text className="font-bold tracking-wider text-white dark:text-black">
                Checkout
              </Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Checkout;
