"use server";

import { FormDataState } from "@/types/signUp";
import { prisma } from "@/utils/prisma";

export async function signUpUser(formData: FormDataState) {
  const { email, password } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    console.log("user", user);

    return user;
  } catch (error) {
    console.error("Ошибка регистрании", error);
    return { error: "Ошибка при регистрации" };
  }
}
