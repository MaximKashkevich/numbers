// stores/signUp.ts
import { defineStore } from "pinia";

interface SignInState {
  signIn: Boolean;
}

export const useSignInStore = defineStore("signIn", {
  state: (): SignInState => ({
    signIn: false,
  }),
  actions: {
    onClickSignIn() {
      this.signIn = !this.signIn; // Изменение состояния через 'this'
      console.log(this.signIn); // Вывод текущего значения в консоль
    },
  },
});
