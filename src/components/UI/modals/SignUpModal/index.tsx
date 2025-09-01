import MyModal from "@/components/common/Modal";
import React from "react";
import SignUpForm from "../../forms/SignUpForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: Props) {
  return (
    <MyModal isOpen={isOpen} onClose={onClose} title="Создать аккаунт">
      <SignUpForm onClose={onClose} />
    </MyModal>
  );
}
