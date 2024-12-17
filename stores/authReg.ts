import { defineStore } from "pinia";

export const useAuthRegistrationStore = defineStore("authReg", {
  state: () => ({
    token: localStorage.getItem("authToken") || null,
    userData: JSON.parse(localStorage.getItem("userData") || "null"),
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("authToken", token);
    },
    setUserData(data: any) {
      this.userData = data;
      localStorage.setItem("userData", JSON.stringify(data));
    },
    clearAuth() {
      this.token = null;
      this.userData = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
    },
  },
});
