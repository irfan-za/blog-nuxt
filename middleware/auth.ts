import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
  const accessToken = useCookie("access_token");

  if (to.path === "/posts/create") {
    if (!accessToken.value) {
      return navigateTo("/login");
    }
  }
});
