import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { menuItemsByRestaurant } from "@/constants/api-dummy-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFoodCategories() {
  const categories = Object.values(menuItemsByRestaurant)
    .flat()
    .map((menuItem) => menuItem.category);

  return [...new Set(categories)].sort();
}
