import "@/global.css";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ThemeProvider from "@/components/theme-provider";
import CartDrawerProvider from "@/contexts/cart-drawer";
import CartItemsProvider from "@/contexts/cart-items";
import { useColorScheme } from "@/lib/useColorScheme";

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const { colorScheme } = useColorScheme();

  useEffect(() => {
    if (loaded || error) {
      void SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <CartDrawerProvider>
        <CartItemsProvider>
          <SafeAreaProvider>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor:
                    colorScheme === "dark" ? "#0a0a0a" : "#ffffff",
                },
              }}
            />
          </SafeAreaProvider>
        </CartItemsProvider>
      </CartDrawerProvider>
    </ThemeProvider>
  );
}
