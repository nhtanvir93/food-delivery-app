import React, { type ReactNode } from "react";
import { Modal, Pressable, ScrollView } from "react-native";

import { useColorScheme } from "@/lib/useColorScheme";

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnBackdrop?: boolean;
}

export const BaseModal = ({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
}: BaseModalProps) => {
  const { colorScheme } = useColorScheme();

  const backdropBgColor =
    colorScheme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.8)";

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: backdropBgColor }}
        onPress={closeOnBackdrop ? onClose : undefined}
      >
        <Pressable
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: "90%", maxHeight: "90%" }}
          className="gap-4 rounded-lg bg-background p-6"
          onPress={(e) => e.stopPropagation()}
        >
          <ScrollView>{children}</ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
