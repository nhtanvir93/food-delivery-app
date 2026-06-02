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

type CartRestaurant = {
  id: string;
  name: string;
};

interface CartItemsContextType {
  restaurant: CartRestaurant;
  setRestaurant: Dispatch<SetStateAction<CartRestaurant>>;
  clearRestaurant: () => void;
  cartMenuItemList: CartMenuItemList[];
  setCartMenuItemList: Dispatch<SetStateAction<CartMenuItemList[]>>;
  clearCart: () => void;
}

export const CartItemsContext = createContext<CartItemsContextType | null>(
  null,
);

const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<CartRestaurant>({
    id: "",
    name: "",
  });
  const [cartMenuItemList, setCartMenuItemList] = useState<CartMenuItemList[]>(
    [],
  );

  const clearCart = () => {
    clearRestaurant();
    setCartMenuItemList([]);
  };

  const clearRestaurant = () => {
    setRestaurant({
      id: "",
      name: "",
    });
  };

  return (
    <CartItemsContext.Provider
      value={{
        restaurant,
        setRestaurant,
        cartMenuItemList,
        setCartMenuItemList,
        clearCart,
        clearRestaurant,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
