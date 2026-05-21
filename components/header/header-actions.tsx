import { Feather, FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useMemo } from "react";
import { Pressable, View } from "react-native";

import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";

const HeaderActions = () => {
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
      <Pressable className="size-[46px] items-center justify-center rounded-full bg-foreground p-[3px] active:opacity-60">
        <Feather name="shopping-bag" size={20} color={theme.background} />
      </Pressable>
    </View>
  );
};

export default HeaderActions;
