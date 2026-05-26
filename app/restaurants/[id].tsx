import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, InfoIcon } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import Screen from "@/components/Screen";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { type RestaurantDetailsType } from "@/constants/api-dummy-data";
import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";
import { getRestaurantDetails } from "@/lib/utils";

const RestaurantDetails = () => {
  const { id } = useLocalSearchParams();
  const [restaurantDetails, setRestaurantDetails] =
    useState<RestaurantDetailsType | null>(null);

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  useEffect(() => {
    setRestaurantDetails(() => getRestaurantDetails(id as string));
  }, [id]);

  if (restaurantDetails === null) {
    return (
      <Alert variant="destructive" icon={InfoIcon} iconClassName="size-5">
        <AlertTitle className="font-bold">Restaurant Not Found</AlertTitle>
        <AlertDescription>
          We couldn&apos;t find this restaurant. It may have been removed or the
          link is incorrect.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Screen>
      <View className="flex-1">
        <View className="relative h-[200px] w-full">
          <Image
            className="flex-1"
            source={{ uri: restaurantDetails.image }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
          <Button
            onPress={() => router.back()}
            size="icon"
            className="absolute left-3 top-3 rounded-full bg-background"
          >
            <Icon as={ArrowLeft} size={18} />
          </Button>
        </View>
        <View className="my-4">
          <View className="mb-2">
            <Text className="text-xl font-bold tracking-wide text-foreground">
              {restaurantDetails.name}
            </Text>
          </View>
          <View className="mb-3 w-full flex-row items-center gap-4">
            <View className="flex-row gap-2">
              <AntDesign name="star" size={18} color={theme.star} />
              <Text className="tracking-wide text-muted-foreground">
                {restaurantDetails.rating}
              </Text>
            </View>
            <View className="size-1 rounded-full bg-muted-foreground" />
            <View className="flex-row gap-2">
              <AntDesign
                name="clock-circle"
                size={20}
                color={theme.textMutedForeground}
              />
              <Text className="tracking-wide text-muted-foreground">
                {restaurantDetails.deliveryTime}
              </Text>
            </View>
            <View className="size-1 rounded-full bg-muted-foreground" />
            <Text className="text-muted-foreground">
              {restaurantDetails.category}
            </Text>
          </View>
          <Text className="text-sm text-muted-foreground">
            {restaurantDetails.distance}
          </Text>
        </View>
      </View>
    </Screen>
  );
};

export default RestaurantDetails;
