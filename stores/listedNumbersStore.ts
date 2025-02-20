import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from './auth';

export interface listedNumber {
  datePosted: string;
  description?: string | null;
  discount: boolean | string;
  emirate: string;
  id: number;
  isFeatured: false;
  photo?: string;
  phone?: string | undefined;
  price: string;
  status: number;
  type: string;
  views: string | number | null;
}

export const useListedNumbersStore = defineStore('listedNumbers', {
  state: () => ({
    listedPlates: ref<listedNumber[]>([]),
    listedPhones: ref<listedNumber[]>([]),
  }),
  actions: {
    async fetchListedNumbers() {
      const authStore = useAuthStore();
      const token = authStore.token;
      try {
        const platesResponse = await axios.get(
          `https://api.dev.numbers.ae/v1/account/plate/my/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        this.listedPlates = platesResponse.data.data;
      } catch (error) {
        console.log(error);
      }

      try {
        const phonesResponse = await axios.get(
          `https://api.dev.numbers.ae/v1/account/mobile/my/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        this.listedPhones = phonesResponse.data.data;
        console.log(phonesResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
