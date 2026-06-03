import { Feather, FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useMemo } from "react";
import { Pressable, View, Text } from "react-native";

import { Badge } from "@/components/ui/badge";
import { COLORS } from "@/constants/theme";
import useCartDrawer from "@/hooks/useCartDrawer";
import { useCartItems } from "@/hooks/useCartItems";
import { useColorScheme } from "@/lib/useColorScheme";

const HeaderActions = () => {
  const { setOpenCartDrawer } = useCartDrawer();

  const { totalItems } = useCartItems();

  const { colorScheme, toggleColorScheme } = useColorScheme();
  const theme = useMemo(() => {
    return colorScheme === "dark" ? COLORS.dark : COLORS.light;
  }, [colorScheme]);

  return (
    <View className="w-1/2 flex-row items-center justify-end gap-2 self-stretch">
      <Pressable
        onPress={toggleColorScheme}
        className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60"
      >
        {colorScheme === "light" && (
          <FontAwesome name="moon-o" size={20} color={theme.textForeground} />
        )}
        {colorScheme === "dark" && (
          <AntDesign name="sun" size={20} color={theme.textForeground} />
        )}
      </Pressable>
      <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
        <Feather name="box" size={20} color={theme.textForeground} />
      </Pressable>
      <Pressable
        onPress={() => setOpenCartDrawer((prev) => !prev)}
        className="relative size-[46px] items-center justify-center rounded-full bg-foreground p-[3px] active:opacity-60"
      >
        <Feather name="shopping-bag" size={20} color={theme.background} />
        {totalItems > 0 && (
          <Badge
            className="absolute -right-2 -top-2 min-w-5 rounded-full px-2"
            variant="destructive"
          >
            <Text className="text-sm text-white">
              {totalItems < 100 ? totalItems : "99+"}
            </Text>
          </Badge>
        )}
      </Pressable>
    </View>
  );
};

export default HeaderActions;
