import { useContext } from "react";

import { ActiveOrderContext } from "@/contexts/active-order";

export function useActiveOrder() {
  const context = useContext(ActiveOrderContext);

  if (!context) {
    throw new Error(
      "useActiveOrder hook must be used inside <ActiveOrderProvider/>",
    );
  }

  return context;
}
