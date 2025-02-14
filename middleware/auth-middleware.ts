import { useCookie, navigateTo } from "nuxt/app";
import { defineNuxtRouteMiddleware } from "nuxt/app";
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie("auth_token");

  console.log("auth middleware triggered on :", to.fullPath);
  console.log("auth middleware token:", authToken.value);

  if (!authToken.value) {
    return navigateTo("/login");
  }
});
