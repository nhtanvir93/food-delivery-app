import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { InfoIcon } from "lucide-react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { type RestaurantType } from "@/constants/api-dummy-data";
import { COLORS } from "@/constants/theme";
import { useColorScheme } from "@/lib/useColorScheme";
import { getRestaurants } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader } from "./ui/card";

const Restaurants = ({
  searchKey = "",
  category = "",
}: {
  searchKey?: string;
  category?: string;
}) => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [loading, setLoading] = useState(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    offsetRef.current = 0;
    setRestaurants([]);
  }, [searchKey, category]);

  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? COLORS.dark : COLORS.light;

  const loadRestaurants = useCallback(() => {
    setRestaurants((prev) => {
      setLoading(true);
      const nextRestaurants = getRestaurants(
        offsetRef.current,
        category,
        searchKey,
      );
      setLoading(false);

      if (nextRestaurants.length === 0) {
        return [...prev];
      }

      offsetRef.current += nextRestaurants.length;
      return [...prev, ...nextRestaurants];
    });
  }, [searchKey, category]);

  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <View className="flex-1">
      <Text className="mb-4 text-xl font-bold tracking-wide text-foreground">
        All Restaurants
      </Text>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
        data={restaurants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(restaurant) => `restaurant-${restaurant.id}`}
        renderItem={({ item: restaurant }) => (
          <Card className="w-full">
            <CardHeader className="flex-row">
              <View className="h-[200px] w-full">
                <Image
                  className="flex-1"
                  source={{ uri: restaurant.image }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{ width: "100%", height: "100%" }}
                  contentFit="cover"
                />
              </View>
            </CardHeader>
            <CardContent>
              <View className="mb-2">
                <Text className="text-xl font-bold text-foreground">
                  {restaurant.name}
                </Text>
              </View>
              <View className="mb-3 w-full flex-row items-center gap-4">
                <View className="flex-row gap-2">
                  <AntDesign
                    name="clock-circle"
                    size={20}
                    color={theme.textMutedForeground}
                  />
                  <Text className="text-muted-foreground">
                    {restaurant.deliveryTime}
                  </Text>
                </View>
                <View className="size-1 rounded-full bg-muted-foreground" />
                <Text className="text-muted-foreground">
                  {restaurant.category}
                </Text>
                <View className="size-1 rounded-full bg-muted-foreground" />
                <Text className="text-muted-foreground">
                  {restaurant.priceRange}
                </Text>
              </View>
              <Text className="text-sm text-muted-foreground">
                {restaurant.distance}
              </Text>
            </CardContent>
          </Card>
        )}
        contentContainerClassName="gap-4"
        ListEmptyComponent={
          !loading && restaurants.length === 0 ? (
            <Alert variant="destructive" icon={InfoIcon} iconClassName="size-5">
              <AlertTitle className="font-bold">No matches found</AlertTitle>
              <AlertDescription>
                No restaurants match your current search. Try a different
                keyword or category.
              </AlertDescription>
            </Alert>
          ) : null
        }
        onEndReached={loadRestaurants}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Restaurants;
