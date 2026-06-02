import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface CartDrawerContextType {
  openCartDrawer: boolean;
  setOpenCartDrawer: Dispatch<SetStateAction<boolean>>;
}

export const CartDrawerContext = createContext<CartDrawerContextType | null>(
  null,
);

const CartDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  return (
    <CartDrawerContext.Provider value={{ openCartDrawer, setOpenCartDrawer }}>
      {children}
    </CartDrawerContext.Provider>
  );
};

export default CartDrawerProvider;
