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
    operatorList: [] as DropdownOption[],
    operatorCodeList: [] as DropdownOption[],
    defaultPlateCode: "not" as string,
    defaultPhoneCode: "not" as string,
  }),
  actions: {
    async fetchDropdownData() {
      try {
        const regionsResponse = await axios.get(
          "https://api.dev.numbers.ae/v1/account/regions/list"
        );
        this.emirateList = regionsResponse.data.result.items;
        //
        const operatorResponse = await axios.get(
          "https://api.dev.numbers.ae/v1/account/operators/list"
        );
        this.operatorList = operatorResponse.data.result.items;
        const operatorCodeResponse = await axios.get(
          "https://api.dev.numbers.ae/v1/account/operators/codes/list"
        );
        this.operatorCodeList = operatorCodeResponse.data.result.items;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPlateCodeDropdownData(emirateId: string) {
      try {
        const plateCodesResponse = await axios.get(
          `https://api.dev.numbers.ae/v1/account/plate/codes/list?emirate_id=${emirateId}`
        );
        this.plateCodeList = plateCodesResponse.data.items;
        this.defaultPlateCode = String(this.plateCodeList[0].name);
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
