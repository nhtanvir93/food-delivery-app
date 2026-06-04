import React, { type ReactNode } from "react";

import { type DrawerView } from "@/contexts/cart-drawer";

import Checkout from "./checkout";

interface Props {
  view: DrawerView;
  onClose: () => void;
}

const DRAWER_VIEWS: Record<DrawerView, (onClose: () => void) => ReactNode> = {
  checkout: (onClose) => <Checkout onClose={onClose} />,
};

export default function DrawerContent({ view, onClose }: Props) {
  return <>{DRAWER_VIEWS[view](onClose)}</>;
}
