import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  menuItemsByRestaurant,
  type RestaurantIdType,
  restaurants,
  type ValidRestaurantIdType,
} from "@/constants/api-dummy-data";

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
