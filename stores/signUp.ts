// stores/signUp.ts
import { defineStore } from "pinia";

interface SignUpState {
  signUp: Boolean;
}

export const useSignUpStore = defineStore("signUp", {
  state: (): SignUpState => ({
    signUp: false,
  }),
  actions: {
    onClickSignUP() {
      this.signUp = !this.signUp; // Изменение состояния через 'this'
      console.log(this.signUp); // Вывод текущего значения в консоль
    },
  },
});
