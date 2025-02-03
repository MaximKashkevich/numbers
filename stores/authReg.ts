import { defineStore } from "pinia";

interface User {
  id?: number;
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  lastLogin?: string;
}

export const useAuthRegistrationStore = defineStore("authReg", {
  state: () => ({
    token: null as string | null,
    userData: null as User | null,
  }),
  actions: {
    // Устанавливаем токен и сохраняем его в localStorage, только на клиенте
    setToken(token: string) {
      if (typeof window !== "undefined") {
        this.token = token;
        localStorage.setItem("authToken", token);
      }
      console.log(this.token);
    },
    // Устанавливаем данные пользователя и сохраняем их в localStorage, только на клиенте
    setUserData(data: User) {
      if (typeof window !== "undefined") {
        this.userData = data;
        localStorage.setItem("userData", JSON.stringify(data));
        console.log(data, "дата из стора");
      }
    },
    // Очищаем данные аутентификации из store и localStorage
    clearAuth() {
      if (typeof window !== "undefined") {
        this.token = null;
        this.userData = null;
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    },
    // Загрузка данных из localStorage при монтировании компонента на клиенте
    loadFromLocalStorage() {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("userData");

        if (token) {
          this.token = token;
        }
        if (userData) {
          this.userData = JSON.parse(userData);
        }
      }
    },
  },
  getters: {
    getToken: (state) => state.token,
    getUserData: (state) => state.userData,
  },
});
