// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authToken: null,
    }),
    actions: {
        setToken(token) {
            this.authToken = token; 
        },
        clearToken() {
            this.authToken = null; 
        },
    },
});
