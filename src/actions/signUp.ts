"use server";

import { FormDataState } from "@/types/signUp";
import { saltAndHashPassword } from "@/utils/password";
import { prisma } from "@/utils/prisma";

export async function signUpUser(formData: FormDataState) {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: "Пароли не совпадают" };
  }

  if (password.length < 6) {
    return { error: "Пароль должен быть не менее 6 символов" };
  }

  try {
    const isUniqUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (isUniqUser) {
      return { error: "Пользователь с такой почтой уже существует" };
    }

    const passwordHash = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: passwordHash,
      },
    });

    return user;
  } catch (error) {
    console.error("Ошибка регистрании", error);
    return { error: "Ошибка при регистрации" };
  }
}
