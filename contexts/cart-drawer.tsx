import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type DrawerView = "checkout";

interface CartDrawerContextType {
  openCartDrawer: boolean;
  setOpenCartDrawer: Dispatch<SetStateAction<boolean>>;
  drawerView: DrawerView;
  openDrawerWith: (view: DrawerView) => void;
}

export const CartDrawerContext = createContext<CartDrawerContextType | null>(
  null,
);

const CartDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [drawerView, setDrawerView] = useState<DrawerView>("checkout");

  const openDrawerWith = (view: DrawerView) => {
    setDrawerView(view);
    setOpenCartDrawer(true);
  };

  return (
    <CartDrawerContext.Provider
      value={{ openCartDrawer, setOpenCartDrawer, drawerView, openDrawerWith }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
};

export default CartDrawerProvider;
