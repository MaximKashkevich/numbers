// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useCookie("auth_token");

  if (!authToken.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
