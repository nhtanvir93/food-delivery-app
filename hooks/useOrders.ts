import { useContext } from "react";

import { OrdersContext } from "@/contexts/orders";

export function useOrders() {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrders hook must be used inside <OrdersProvider/>");
  }

  return context;
}
