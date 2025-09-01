"use client";

import { signImWithCredentials } from "@/auth/actions/signIn";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import React, { useState } from "react";

interface formDataState {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onClose: () => void;
}

const formData: formDataState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignInForm({ onClose }: Props) {
  const [form, setForm] = useState(formData);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("form submitted", form);
    const result = await signImWithCredentials(form.email, form.password);
    console.log(result);
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
          return null;
        }}
      />

      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          отмена
        </Button>
        <Button type="submit" color="primary">
          Войти
        </Button>
      </div>
    </Form>
  );
}
