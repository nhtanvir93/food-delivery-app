import { type ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
}

export default function Screen({ children }: Props) {
  return (
    <SafeAreaView edges={["top", "bottom"]} className="relative flex-1 bg-bg">
      {children}
    </SafeAreaView>
  );
}
