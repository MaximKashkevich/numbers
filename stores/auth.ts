// stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authToken: null as string | null,
  }),
  actions: {
    setToken(token: string | null) {
      this.authToken = token;
      console.log(token);
    },
    clearToken() {
      this.authToken = null;
    },
  },
});
