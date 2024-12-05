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
}

export interface IRegions {
  id: number;
  name: string;
  totalCount: number;
  totalPage: number;
}

export const usePlateStore = defineStore("plate", () => {
  const plateNumbers = ref<IPlate[]>([]);
  const regions = ref<IRegions[]>([]);
  const selectedEmirate = ref("Dubai");

  // Fetch plate numbers
  const fetchPlate = async () => {
    try {
      const { data } = await axios.get<IPlate[]>(
        "https://api.dev.numbers.ae/v1/catalog/plate"
      );
      plateNumbers.value = data;
      console.log(plateNumbers.value);
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
  };
});
