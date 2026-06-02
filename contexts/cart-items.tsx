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

export type CartRestaurant = {
  id: string;
  name: string;
};

interface CartItemsContextType {
  restaurant: CartRestaurant;
  setRestaurant: Dispatch<SetStateAction<CartRestaurant>>;
  clearRestaurant: () => void;
  cartMenuItemList: CartMenuItemList[];
  setCartMenuItemList: Dispatch<SetStateAction<CartMenuItemList[]>>;
  getCartMenuItem: (menuItemId: string) => CartMenuItemList | undefined;
  incrementQuantity: (
    menuItem: MenuItemType,
    quantity: number,
    currentRestaurant: CartRestaurant,
  ) => void;
  decrementQuantity: (menuItem: MenuItemType, quantity: number) => void;
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

  const getCartMenuItem = (menuItemId: string) => {
    return cartMenuItemList.find((menuItem) => menuItem.id === menuItemId);
  };

  const incrementQuantity = (
    menuItem: MenuItemType,
    quantity: number,
    currentRestaurant: CartRestaurant,
  ) => {
    if (restaurant.id === "") {
      setRestaurant({
        id: currentRestaurant.id,
        name: currentRestaurant.name,
      });
    }

    const cartMenuItem = getCartMenuItem(menuItem.id);

    if (!cartMenuItem) {
      setCartMenuItemList([...cartMenuItemList, { ...menuItem, quantity }]);
    } else {
      setCartMenuItemList((prevMenuItems) =>
        prevMenuItems.map((prevMenuItem) => {
          if (prevMenuItem.id !== menuItem.id) {
            return prevMenuItem;
          }

          return {
            ...prevMenuItem,
            quantity: prevMenuItem.quantity + 1,
          };
        }),
      );
    }
  };

  const decrementQuantity = (menuItem: MenuItemType, quantity: number) => {
    if (quantity === 0) {
      setCartMenuItemList((prevMenuItems) => {
        const updateMenuItems = prevMenuItems.filter(
          (prevMenuItem) => prevMenuItem.id !== menuItem.id,
        );

        if (updateMenuItems.length === 0) {
          clearRestaurant();
        }

        return updateMenuItems;
      });
    } else {
      setCartMenuItemList((prevMenuItems) =>
        prevMenuItems.map((prevMenuItem) => {
          if (prevMenuItem.id !== menuItem.id) {
            return prevMenuItem;
          }

          return {
            ...prevMenuItem,
            quantity: prevMenuItem.quantity - 1,
          };
        }),
      );
    }
  };

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
        getCartMenuItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
