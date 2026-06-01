import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { MenuItemType } from "@/constants/api-dummy-data";

type CartMenuItemList = MenuItemType & {
  quantity: number;
};

interface CartItemsContextType {
  restaurantId: string;
  setRestaurantId: Dispatch<SetStateAction<string>>;
  cartMenuItemList: CartMenuItemList[];
  setCartMenuItemList: Dispatch<SetStateAction<CartMenuItemList[]>>;
}

export const CartItemsContext = createContext<CartItemsContextType | null>(
  null,
);

const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurantId, setRestaurantId] = useState("");
  const [cartMenuItemList, setCartMenuItemList] = useState<CartMenuItemList[]>(
    [],
  );

  return (
    <CartItemsContext.Provider
      value={{
        restaurantId,
        setRestaurantId,
        cartMenuItemList,
        setCartMenuItemList,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
