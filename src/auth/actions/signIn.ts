import { signIn } from "../auth";

export async function signImWithCredentials(email: string, password: string) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return result;
  } catch (error) {
    console.error("Ошибка авторизации", error);
    throw error;
  }
}
