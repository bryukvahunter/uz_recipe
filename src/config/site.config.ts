import { ROUTE } from "@/shared/constants/routes";

export const siteConfig = {
  title: "Узбекская кухня",
  description: "Рецепты узбекской кухни",
  headerLinks: [
    { route: ROUTE.HOME, value: "Рецепты", id: 1 },
    { route: ROUTE.INGREDIENTS, value: "Ингредиенты", id: 2 },
    { route: ROUTE.ABOUT, value: "О нас", id: 3 },
  ],
};
