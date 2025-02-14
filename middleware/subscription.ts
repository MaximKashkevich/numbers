import { useCookie, navigateTo } from "nuxt/app";
import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return; // Если сервер — не выполняем

  const subscriptionStatus = useCookie("subscription_status");
  const authToken = useCookie("auth_token");
  console.log("Subscription middleware triggered on:", to.fullPath);
  console.log("Subscription status:", subscriptionStatus.value);

  if (!authToken.value) {
    return navigateTo("/Login");
  } else if (subscriptionStatus.value !== "active") {
    return navigateTo("/Subscription");
  }
});
