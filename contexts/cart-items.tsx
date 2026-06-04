import React, {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

import { type MenuItemType } from "@/constants/api-dummy-data";

export type CartMenuItemList = MenuItemType & {
  quantity: number;
};

export interface CartRestaurant {
  id: string;
  name: string;
  deliveryTime: string;
  image: string;
}

interface CartItemsContextType {
  deliveryFee: number;
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
  subtotal: () => number;
  totalItems: number;
}

export const CartItemsContext = createContext<CartItemsContextType | null>(
  null,
);

const DELIVERY_FEE = 5.99;

const CartItemsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<CartRestaurant>({
    id: "",
    name: "",
    deliveryTime: "",
    image: "",
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
      setRestaurant({ ...currentRestaurant });
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
      deliveryTime: "",
      image: "",
    });
  };

  const subtotal = useCallback(() => {
    if (cartMenuItemList.length === 0) {
      return 0;
    }

    return cartMenuItemList.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  }, [cartMenuItemList]);

  const totalItems = useMemo(
    () =>
      cartMenuItemList.reduce(
        (total, menuItem) => total + menuItem.quantity,
        0,
      ),
    [cartMenuItemList],
  );

  return (
    <CartItemsContext.Provider
      value={{
        deliveryFee: DELIVERY_FEE,
        subtotal,
        restaurant,
        setRestaurant,
        cartMenuItemList,
        setCartMenuItemList,
        clearCart,
        clearRestaurant,
        getCartMenuItem,
        incrementQuantity,
        decrementQuantity,
        totalItems,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
