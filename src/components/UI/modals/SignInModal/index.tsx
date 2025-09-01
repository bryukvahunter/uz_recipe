import MyModal from "@/components/common/Modal";
import React from "react";
import SignInForm from "../../forms/SignInForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: Props) {
  return (
    <MyModal isOpen={isOpen} onClose={onClose} title="Войти в аккаунт">
      <SignInForm onClose={onClose} />
    </MyModal>
  );
}
