import React, { type ReactNode } from "react";
import { View } from "react-native";

const ScreenHeader = ({ children }: { children: ReactNode }) => {
  return (
    <View className="h-20 justify-center p-4">
      <View>{children}</View>
    </View>
  );
};

export default ScreenHeader;
