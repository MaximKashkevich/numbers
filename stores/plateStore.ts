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

export interface IDetails {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  type: string;
  postedAt: string;
}

export const usePlateStore = defineStore("plate", () => {
  const plateNumbers = ref<IPlate[]>([]);
  const regions = ref<IRegions[]>([]);
  const codes = ref<ICode[]>([]);
  const selectedEmirate = ref("Dubai"); // Инициализация с "Dubai"
  const selectedCode = ref("050");
  const plateDetails = ref<IDetails | null>(null);

  // Fetch plate numbers
  const fetchPlate = async (query?: any) => {
    try {
      const { data } = await axios.get<IPlate[]>(
        "https://api.dev.numbers.ae/v1/catalog/plate",
        { params: query }
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

  // Fetch codes
  const fetchCodes = async () => {
    try {
      const { data } = await axios.get(
        "https://api.dev.numbers.ae/v1/account/operators/codes/list"
      );
      codes.value = data.result.items;
    } catch (e) {
      console.log("Error fetching codes:", e);
    }
  };

  // Fetch plate details by ID
  const fetchPlateDetails = async (id: number) => {
    try {
      const { data } = await axios.get<IDetails>(
        `https://api.dev.numbers.ae/v1/catalog/plate/${id}`
      );
      plateDetails.value = data; // Сохраняем детали выбранной карточки
      console.log("Детали номера:", plateDetails.value);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  // Handle emirate change
  const handleEmirateChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedEmirate.value = target.value;
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

  const selectedPlateId = ref<null | number>(0); // Состояние для хранения выбранного ID

  // Обработчик клика для получения ID и деталей карточки
  const handleClick = async (id: number) => {
    selectedPlateId.value = id; // Сохраняем выбранный ID
    await fetchPlateDetails(id); // Получаем детали для выбранного ID
  };

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
    selectedCode,
    handleClick,
    selectedPlateId,
    plateDetails,
    fetchPlateDetails,
  };
});
