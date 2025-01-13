import { defineStore } from "pinia";
import axios from "axios";

interface DropdownOption {
  id: number;
  name: string;
}

export const useDropdownStore = defineStore("dropdownStore", {
  state: () => ({
    openDropdowns: [] as number[], // Список открытых дропдаунов
    plateCodeList: [] as DropdownOption[],
    emirateList: [] as DropdownOption[],
  }),
  actions: {
    async fetchDropdownData() {
      try {
        const plateCodesResponse = await axios.get(
          "https://api.dev.numbers.ae/v1/account/plate/codes/list"
        );
        console.log(plateCodesResponse, "коды");
        this.plateCodeList = plateCodesResponse.data.result.items;
        const regionsResponse = await axios.get(
          "https://api.dev.numbers.ae/v1/account/regions/list"
        );
        this.emirateList = regionsResponse.data.result.items;
      } catch (error) {
        console.log(error);
      }
    },
    closeAllDropdowns() {
      this.openDropdowns = []; // Закрыть все дропдауны
    },
    registerDropdown(id: number) {
      // Зарегистрировать дропдаун как открытый
      if (!this.openDropdowns.includes(id)) {
        this.openDropdowns.push(id);
      }
    },
    unregisterDropdown(id: number) {
      // Удалить дропдаун из списка открытых
      this.openDropdowns = this.openDropdowns.filter(
        (dropdownId: number) => dropdownId !== id
      );
    },
    isDropdownOpen(id: number) {
      // Проверить, открыт ли конкретный дропдаун
      return this.openDropdowns.includes(id);
    },
  },
});
