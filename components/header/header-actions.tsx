import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

import { type Theme } from "@/constants/theme";

const HeaderActions = ({ theme }: { theme: Theme }) => {
  return (
    <View className="w-1/2 flex-row items-center justify-end gap-2 self-stretch">
      <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
        <FontAwesome name="moon-o" size={20} color={theme.textForeground} />
      </Pressable>
      <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
        <Feather name="box" size={20} color={theme.textForeground} />
      </Pressable>
      <Pressable className="size-[46px] items-center justify-center rounded-full bg-icon-background p-[3px] active:opacity-60">
        <Feather name="shopping-bag" size={20} color={theme.textForeground} />
      </Pressable>
    </View>
  );
};

export default HeaderActions;
