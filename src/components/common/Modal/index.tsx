"use client";

import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import React, { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export default function MyModal({
  isOpen,
  onClose,
  title,
  children,
  size,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h3 className="text-xl text-background font-semibold">{title}</h3>
        </ModalHeader>
        <ModalBody className="space-y-4 py-6">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
