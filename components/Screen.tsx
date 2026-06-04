import { type ReactNode } from "react";
import { View } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/theme";
import useCartDrawer from "@/hooks/useCartDrawer";
import { useColorScheme } from "@/lib/useColorScheme";

import DrawerContent from "./drawer-content";
import Header from "./header/header";

interface Props {
  children: ReactNode;
}

export default function Screen({ children: content }: Props) {
  const { openCartDrawer, setOpenCartDrawer } = useCartDrawer();

  const { colorScheme } = useColorScheme();

  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const { drawerView } = useCartDrawer();

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="relative flex-1 bg-background"
    >
      <Drawer
        open={openCartDrawer}
        onOpen={() => setOpenCartDrawer(true)}
        onClose={() => setOpenCartDrawer(false)}
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: theme.background,
        }}
        renderDrawerContent={() => (
          <DrawerContent
            view={drawerView}
            onClose={() => setOpenCartDrawer(false)}
          />
        )}
      >
        <Header />
        <View className="flex-1 bg-background p-4">{content}</View>
      </Drawer>
    </SafeAreaView>
  );
}
