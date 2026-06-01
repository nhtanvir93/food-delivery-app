import { useContext } from "react";

import { CartItemsContext } from "@/contexts/cart-items";

export function useCartItems() {
  const context = useContext(CartItemsContext);

  if (!context) {
    throw new Error(
      "useCartItems hook must be used inside <CartItemsProvider/>",
    );
  }

  return context;
}
