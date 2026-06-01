import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, InfoIcon } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import Screen from "@/components/Screen";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import {
  type MenuItemType,
  type RestaurantDetailsType,
} from "@/constants/api-dummy-data";
import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";
import { getRestaurantDetails, groupBy } from "@/lib/utils";

interface SectionHeader {
  type: "header";
  category: string;
}
interface SectionItem {
  type: "item";
  item: MenuItemType;
}
type FlatItem = SectionHeader | SectionItem;

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

  const flatData: FlatItem[] = Object.entries(
    groupBy(restaurantDetails.menuItems, (mi) => mi.category),
  ).flatMap(([category, items]) => [
    { type: "header", category } as SectionHeader,
    ...(items as MenuItemType[]).map(
      (item) => ({ type: "item", item }) as SectionItem,
    ),
  ]);

  return (
    <Screen>
      <View className="flex-1">
        <FlatList
          data={flatData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(flatItem) =>
            flatItem.type === "header"
              ? `header-${flatItem.category}`
              : flatItem.item.id
          }
          ListHeaderComponent={
            <View>
              <View className="relative h-[200px] w-full">
                <Image
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
                <Text className="mb-2 text-xl font-bold tracking-wide text-foreground">
                  {restaurantDetails.name}
                </Text>
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
          }
          renderItem={({ item: flatItem }) => {
            if (flatItem.type === "header") {
              return (
                <Text className="mb-2 mt-4 text-base font-semibold tracking-wide text-foreground">
                  {flatItem.category}
                </Text>
              );
            }

            const item = flatItem.item;
            return (
              <Card className="mb-3 w-full py-3">
                <CardContent className="flex-row gap-3 px-3">
                  <Image
                    source={{ uri: item.image }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ width: 90, height: 90, borderRadius: 8 }}
                    contentFit="cover"
                  />
                  <View className="flex-1 justify-between">
                    <View>
                      <Text className="mb-1 font-semibold tracking-wide text-foreground">
                        {item.name}
                      </Text>
                      <Text
                        className="mb-2 text-xs tracking-wide text-muted-foreground"
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {item.description}
                      </Text>
                    </View>
                    <Text className="font-bold tracking-wide text-foreground">
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                </CardContent>
              </Card>
            );
          }}
          contentContainerClassName="pb-8"
          ListEmptyComponent={
            flatData.length === 0 ? (
              <Alert
                variant="destructive"
                icon={InfoIcon}
                iconClassName="size-5"
              >
                <AlertTitle className="font-bold">No Menu Items</AlertTitle>
                <AlertDescription>
                  This restaurant hasn&apos;t added any menu items yet. Check
                  back later.
                </AlertDescription>
              </Alert>
            ) : null
          }
        />
      </View>
    </Screen>
  );
};

export default RestaurantDetails;
