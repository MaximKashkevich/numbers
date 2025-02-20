// stores/auth.ts
import { defineStore } from 'pinia';
import { useCookie } from '#app';
import { ref } from 'vue';
import axios from 'axios';
import { useFavoritesStore } from './favoritesStore';

interface UserData {
  id?: number;
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  lastLogin?: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: ref<string | null>(null),
    userData: ref<UserData | null>(null),
    error: ref<string>(''),
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token: string | null, rememberMe: boolean) {
      this.token = token;
      const authToken = useCookie('auth_token', {
        maxAge: 60 * 60 * 24 * 30,
        secure: true,
        httpOnly: false,
        sameSite: 'strict',
      });
      authToken.value = rememberMe ? token : null;
      console.log(authToken.value, 'token');
    },
    setUserData(user: UserData | null) {
      this.userData = user;
    },
    logout() {
      this.token = null;
      useCookie('auth_token').value = null;
    },
    async fetchUserData() {
      const favoritesStore = useFavoritesStore();
      this.error = '';

      if (!this.token) {
        this.error = 'Нет токена авторизации';
        return;
      }

      try {
        const response = await axios.get('https://api.dev.numbers.ae/v1/user/info', {
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data.success) {
          favoritesStore.setUserId(response.data.result.id);
          this.setUserData(response.data.result);
          console.log(response.data.result, 'resultator');
        } else {
          this.error = 'Ошибка при получении данных пользователя.';
        }
      } catch (err: any) {
        console.error('Ошибка:', err);
        this.error = err.response?.data?.message || 'Произошла ошибка при загрузке данных.';
      }
    },
    initAuth() {
      const authToken = useCookie('auth_token');
      if (authToken.value) {
        this.token = authToken.value;
        console.log('Токен загружен из куки:', this.token);
      }
    },
  },
});
