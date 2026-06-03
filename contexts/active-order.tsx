import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { useModal } from "@/hooks/useModal";

import { Order } from "./orders";

export type CheckoutModals = "confirmPayment" | "orderSuccess";

interface ActiveOrderContextType {
  processedOrder: Order | undefined;
  setProcessedOrder: Dispatch<SetStateAction<Order | undefined>>;
  processModals: ReturnType<typeof useModal<CheckoutModals>>;
}

export const ActiveOrderContext = createContext<ActiveOrderContextType | null>(
  null,
);

const ActiveOrderProvider = ({ children }: { children: ReactNode }) => {
  const [processedOrder, setProcessedOrder] = useState<Order | undefined>();
  const processModals = useModal<CheckoutModals>([
    "confirmPayment",
    "orderSuccess",
  ]);

  return (
    <ActiveOrderContext.Provider
      value={{
        processedOrder,
        setProcessedOrder,
        processModals,
      }}
    >
      {children}
    </ActiveOrderContext.Provider>
  );
};

export default ActiveOrderProvider;
