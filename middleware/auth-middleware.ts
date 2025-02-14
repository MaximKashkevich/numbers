import { useCookie, navigateTo } from "nuxt/app";
import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useRedirectScheduleStore } from "~/stores/redirectSchedule";
const redirectStore = useRedirectScheduleStore();
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  const auth_token = useCookie("auth_token");
  if (auth_token.value) {
    return;
  }

  if (!authStore.token) {
    if (to.fullPath === "/Subscription") {
      redirectStore.upcomingRedirect === "/Subscription";
    }
    if (to.fullPath === "/AddListing") {
      console.log("путь действительно с addListing");
    }
    return navigateTo("/login");
  }
});
