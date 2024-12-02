// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authToken: null,
  }),
  actions: {
    setToken(token: string) {
      this.authToken = token;
    },
    clearToken() {
      this.authToken = null;
    },
  },
});
