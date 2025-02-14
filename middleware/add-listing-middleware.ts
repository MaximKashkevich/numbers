import { useCookie, navigateTo } from "nuxt/app";
import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useRedirectScheduleStore } from "~/stores/redirectSchedule";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const redirectStore = useRedirectScheduleStore();

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;

  const subscriptionStatus = useCookie("subscription_status");
  const auth_token = useCookie("auth_token");
  console.log("auth_token", auth_token);
  if (auth_token.value) {
    return;
  }
  redirectStore.upcomingRedirect = "/AddListing";
  if (subscriptionStatus.value !== "active" || !authStore.token) {
    return navigateTo("/Subscription");
  }
});
