import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { menuItemsByRestaurant, restaurants } from "@/constants/api-dummy-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFoodCategories() {
  const categories = Object.values(menuItemsByRestaurant)
    .flat()
    .map((menuItem) => menuItem.category);

  return [...new Set(categories)].sort();
}

export function getRestaurants(offset = 0, limit = 2) {
  console.log(`Offset : ${offset}`);
  return restaurants.slice(offset, offset + limit);
}
