import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export interface IPlate {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  type: string;
  postedAt: string;
  views: string;
}

export const usePlateStore = defineStore("plateStore", () => {
  const plateNumbers = ref<IPlate[]>([]);
  const isLoading = ref(false);

  const fetchPlate = async (type: string) => {
    isLoading.value = true;
    try {
      const { data } = await axios.get<IPlate[]>(
        `https://api.dev.numbers.ae/v1/catalog/${type}`
      );
      plateNumbers.value = data;
      console.log(plateNumbers.value);
      console.log("успешно");
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return { plateNumbers, isLoading, fetchPlate };
});
