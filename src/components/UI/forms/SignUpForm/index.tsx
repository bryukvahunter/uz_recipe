"use client";

import { validateEmail } from "@/utils/helpers";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { FormDataState } from "@/types/signUp";
import { signUpUser } from "@/actions/signUp";

interface Props {
  onClose: () => void;
}

const formData: FormDataState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm({ onClose }: Props) {
  const [form, setForm] = useState(formData);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const resultSignUp = await signUpUser(form);
    console.log(resultSignUp);
    onClose();
  }

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введите Ваш email"
        type="email"
        value={form.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Это поле обязательно для ввода";
          if (!validateEmail(value)) return "Некорректный email";
          return null;
        }}
      />

      <Input
        aria-label="Password"
        isRequired
        name="password"
        placeholder="Введите Ваш email"
        type="password"
        value={form.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Это поле обязательно для ввода";
          if (value.length < 6) return "Пароль должен быть не менее 6 символов";
          return null;
        }}
      />

      <Input
        aria-label="Confirm-password"
        isRequired
        name="confirm-password"
        placeholder="Введите Ваш email"
        type="password"
        value={form.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        validate={(value) => {
          if (!value) return "Это поле обязательно для ввода";
          if (value !== form.password) return "Некорректный пароль";
          return null;
        }}
      />

      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          отмена
        </Button>
        <Button type="submit" color="primary">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
}
