import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export interface IPlate {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  type: string;
  postedAt: string;
}

export interface IRegions {
  id: number;
  name: string;
  totalCount: number;
  totalPage: number;
}

export interface ICode {
  id: number;
  code: string;
  totalCount: number;
  totalPage: number;
}

export const usePlateStore = defineStore("plate", () => {
  const plateNumbers = ref<IPlate[]>([]);
  const regions = ref<IRegions[]>([]);
  const codes = ref<ICode[]>([]);
  const selectedEmirate = ref("Dubai"); // Инициализация с "Dubai"

  // Fetch plate numbers
  const fetchPlate = async (query?: any) => {
    try {
      const { data } = await axios.get<IPlate[]>(
        "https://api.dev.numbers.ae/v1/catalog/plate",
        { params: query } // Используйте query как параметры, если они есть
      );
      plateNumbers.value = data;
    } catch (e) {
      console.log("Error fetching plates:", e);
    }
  };

  // Fetch regions
  const fetchRegions = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dev.numbers.ae/v1/account/regions/list"
      );
      regions.value = data.result.items;
    } catch (e) {
      console.error("Error fetching regions:", e);
    }
  };

  const fetchCodes = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dev.numbers.ae/v1/account/operators/codes/list"
      );
      codes.value = data.result.items;
      console.log(codes.value);
    } catch (e) {
      console.log("Error fetching codes:", e);
    }
  };

  // Handle emirate change
  const handleEmirateChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedEmirate.value = target.value;
    console.log("Selected Emirate:", selectedEmirate.value);
  };

  // Filtered plate numbers based on selected emirate
  const filteredPlateNumbers = computed(() => {
    if (selectedEmirate.value) {
      return plateNumbers.value.filter(
        (item) => item.emirate === selectedEmirate.value
      );
    }
    return plateNumbers.value;
  });

  return {
    plateNumbers,
    fetchPlate,
    regions,
    fetchRegions,
    selectedEmirate,
    handleEmirateChange,
    filteredPlateNumbers,
    fetchCodes,
    codes,
  };
});
