import React, { type ReactNode } from "react";
import { Modal, Pressable } from "react-native";

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
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 items-center justify-center"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        onPress={closeOnBackdrop ? onClose : undefined}
      >
        <Pressable
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: "90%" }}
          className="gap-4 rounded-lg bg-background p-6"
          onPress={(e) => e.stopPropagation()}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};
