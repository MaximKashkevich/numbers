// stores/auth.ts
import { defineStore } from "pinia";
import { useCookie } from "#app";
import { ref } from "vue";
import axios from "axios";
import { useFavoritesStore } from "./favoritesStore";

interface UserData {
  id?: number;
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  lastLogin?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: useCookie("auth_token"),
    userData: ref<UserData | null>(null),
    error: ref<string>(""),
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token: string | null) {
      this.token = token;
      console.log(token);
    },
    setUserData(user: UserData) {
      this.userData = user;
    },
    logout() {
      this.token = null;
    },
    async fetchUserData() {
      const favoritesStore = useFavoritesStore();
      this.error = "";

      if (!this.token) {
        this.error = "Нет токена авторизации";
        return;
      }

      try {
        const response = await axios.get(
          "https://api.dev.numbers.ae/v1/user/info",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          favoritesStore.setUserId(response.data.result.id);
          this.setUserData(response.data.result);
          console.log(response.data.result, "resultator");
        } else {
          this.error = "Ошибка при получении данных пользователя.";
        }
      } catch (err: any) {
        console.error("Ошибка:", err);
        this.error =
          err.response?.data?.message ||
          "Произошла ошибка при загрузке данных.";
      }
    },
  },
});
