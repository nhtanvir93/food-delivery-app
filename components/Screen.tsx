import { type ReactNode } from "react";
import { View } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/theme";
import useCartDrawer from "@/hooks/useCartDrawer";
import { useColorScheme } from "@/lib/useColorScheme";

import Checkout from "./checkout";
import Header from "./header/header";

interface Props {
  children: ReactNode;
}

export default function Screen({ children: content }: Props) {
  const { openCartDrawer, setOpenCartDrawer } = useCartDrawer();

  const { colorScheme } = useColorScheme();

  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="relative flex-1 bg-background"
    >
      <Header />
      <Drawer
        open={openCartDrawer}
        onOpen={() => setOpenCartDrawer(true)}
        onClose={() => setOpenCartDrawer(false)}
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: theme.background,
        }}
        renderDrawerContent={() => <Checkout />}
      >
        <View className="flex-1 p-4">{content}</View>
      </Drawer>
    </SafeAreaView>
  );
}
