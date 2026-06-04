import React, {
  createContext,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { type statusConfig } from "@/constants/api-dummy-data";
import { generateId } from "@/lib/utils";

import { type CartMenuItemList, type CartRestaurant } from "./cart-items";

export type PaymentMode = "creditDebit" | "cash";

interface OrderPayload {
  deliveryAddr: string;
  restaurant: CartRestaurant;
  menuItems: CartMenuItemList[];
  paymentMethod: PaymentMode;
  cost: {
    subtotal: number;
    deliveryFee: number;
  };
}

interface OrderInfo {
  id: string;
  orderTime: number;
  estimatedDeliveryTime: number;
  status: keyof typeof statusConfig;
  statusIdx: number;
}

export type Order = OrderPayload & OrderInfo;

interface OrdersContextType {
  orders: Order[];
  activeOrders: number;
  placeOrder: (orderPayload: OrderPayload) => Order;
}

export const OrdersContext = createContext<OrdersContextType | null>(null);

const STATUSES = [
  "pending",
  "confirmed",
  "preparing",
  "out_for_delivery",
  "delivered",
] as const;

const getMinMaxDeliveryTime = (deliveryTime: string) => {
  const [min, max] = deliveryTime.split(" ")[0].split("-").map(Number);
  return [min, max];
};

const getRandomDeliveryTime = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const intervalsRef = useRef<Record<string, ReturnType<typeof setInterval>>>(
    {},
  );

  const scheduleStatusAdvance = (orderId: string, totalMs: number) => {
    const steps = STATUSES.length - 1;
    const intervalMs = totalMs / steps;
    let currentIdx = 0;

    const interval = setInterval(() => {
      currentIdx += 1;

      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId
            ? { ...o, statusIdx: currentIdx, status: STATUSES[currentIdx] }
            : o,
        ),
      );

      if (currentIdx >= steps) {
        clearInterval(intervalsRef.current[orderId]);
        delete intervalsRef.current[orderId];
      }
    }, intervalMs);

    intervalsRef.current[orderId] = interval;
  };

  const placeOrder = (orderPayload: OrderPayload): Order => {
    const now = Date.now();
    const [min, max] = getMinMaxDeliveryTime(
      orderPayload.restaurant.deliveryTime,
    );
    const totalMs = getRandomDeliveryTime(min, max) * 60 * 1000;

    const order: Order = {
      ...orderPayload,
      id: generateId(),
      orderTime: now,
      estimatedDeliveryTime: now + totalMs,
      statusIdx: 0,
      status: STATUSES[0],
    };

    setOrders((prev) => [order, ...prev]);
    scheduleStatusAdvance(order.id, totalMs);

    return order;
  };

  const activeOrders = useMemo(
    () => orders.filter((order) => order.status !== "delivered").length,
    [orders],
  );

  useEffect(() => {
    const intervals = intervalsRef.current;

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, placeOrder, activeOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
