import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import * as Crypto from "expo-crypto";
import { twMerge } from "tailwind-merge";

import {
  menuItemsByRestaurant,
  type RestaurantIdType,
  restaurants,
  type ValidRestaurantIdType,
} from "@/constants/api-dummy-data";

dayjs.extend(utc);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFoodCategories() {
  const categories = Object.values(menuItemsByRestaurant)
    .flat()
    .map((menuItem) => menuItem.category);

  return [...new Set(categories)].sort();
}

export function getRestaurants(
  offset = 0,
  category = "",
  menu = "",
  limit = 2,
) {
  const hasFilter = category || menu;

  if (!hasFilter) {
    return restaurants.slice(offset, offset + limit);
  }

  let menus = Object.values(menuItemsByRestaurant).flat();

  if (category) {
    menus = menus.filter((m) => m.category === category);
  }

  if (menu) {
    const menuExp = new RegExp(menu, "i");
    menus = menus.filter((m) => menuExp.test(m.name));
  }

  if (menus.length === 0) {
    return [];
  }

  const validRestaurantIds = [
    ...new Set(menus.map((m) => m.id.split("-")[0] as RestaurantIdType)),
  ];

  return restaurants
    .filter((r) => validRestaurantIds.includes(r.id))
    .slice(offset, offset + limit);
}

export function getRestaurantDetails(id: string) {
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return null;
  }

  const menuItems =
    menuItemsByRestaurant[restaurant.id as ValidRestaurantIdType];

  return {
    ...restaurant,
    menuItems: menuItems ? [...menuItems] : [],
  };
}

export function groupBy<T>(
  array: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> {
  return array.reduce(
    (result, item) => {
      const group = keyFn(item);
      result[group] = result[group] ?? [];
      result[group].push(item);
      return result;
    },
    {} as Record<string, T[]>,
  );
}

export function getRandomDeliveryTime(deliveryTime: string) {
  const deliveryTimeRange = deliveryTime.split("-");
  const max = parseInt(deliveryTimeRange[1]);
  const min = parseInt(deliveryTimeRange[0]);
  const diff = max - min + 1;

  return Math.floor(Math.random() * diff) + min;
}

export function getFormattedDatetime(timestamp: number) {
  return dayjs(timestamp).format("D MMM, YYYY h:mm A");
}

export function generateId(length = 10) {
  return Crypto.randomUUID().replace(/-/g, "").slice(0, length);
}
