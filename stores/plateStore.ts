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

interface IQuery {
  type: string;
  [key: string]: any;
}

export const usePlateStore = defineStore("plateStore", () => {
  const plateNumbers = ref<IPlate[]>([]);
  const isLoading = ref(false);

  const fetchPlate = async (query: IQuery) => {
    isLoading.value = true;
    console.log(query);
    try {
      const { data } = await axios.get<IPlate[]>(
        `https://api.dev.numbers.ae/v1/catalog/${query.type}?page=${query.page}&order=${query.sort}`
      );
      const filteredPlateNumbers = data.filter(
        (plate) => plate.emirate.toLowerCase() === query.emirate.toLowerCase()
      );
      if (query.type === "plate") {
        plateNumbers.value = filteredPlateNumbers;
      } else {
        plateNumbers.value = data;
      }
      console.log(plateNumbers.value);
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return { plateNumbers, isLoading, fetchPlate };
});
