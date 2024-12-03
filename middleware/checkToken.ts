// middleware/auth.ts
import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const token = authStore.authToken;

  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  }
});
