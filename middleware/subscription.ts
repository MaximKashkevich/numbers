import { useCookie, navigateTo } from "nuxt/app";
import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useRedirectScheduleStore } from "~/stores/redirectSchedule";
const redirectStore = useRedirectScheduleStore();
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  if (!authStore.token) {
    if (redirectStore.upcomingRedirect !== "/AddListing") {
      redirectStore.upcomingRedirect = "/Subscription";
    }
    return navigateTo("/Login");
  }
});
