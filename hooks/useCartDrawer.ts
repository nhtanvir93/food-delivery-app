import { useContext } from "react";

import { CartDrawerContext } from "@/contexts/cart-drawer";

export default function useCartDrawer() {
  const context = useContext(CartDrawerContext);

  if (!context) {
    throw new Error(
      "useCartDrawer hook must be used inside <CartDrawerProvider/>",
    );
  }

  return context;
}
