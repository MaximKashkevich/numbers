import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export interface IPlate {
  id: number;
  photo: string;
  emirate: string;
  price: string;
  isFeatured: boolean;
  type: string;
  datePosted: string;
}

export interface IPhone {
  id: number;
  phone: string;
  emirate: string;
  price: string;
  discount: boolean;
  isFeatured: boolean;
  type: string;
  views: number;
  datePosted: string;
}

export interface IDetails {
  id: number;
  photo: string;
  emirate: string;
  price: string;
  isFeatured: boolean;
  type: string;
  datePosted: string;
  views: string;
}

export const usePlateStore = defineStore("plate", () => {
  const plateNumbers = ref<IPlate[][]>([]);
  const phoneNumbers = ref<IPhone[][]>([]);
  const plateDetails = ref<IDetails[]>([]);
  const viewedPlates = ref<IPlate[]>([]);
  const isPlatesLoading = ref(false);
  const isPhonesLoading = ref(false);
  const showMore = ref(0);

  const selectedPlateType = ref(true);
  // Fetch plate numbers
  const fetchPlate = async (query?: any) => {
    console.log("plates loading in store");
    if (isPlatesLoading.value) return;
    try {
      isPlatesLoading.value = true;
      const { data } = await axios.get(
        "https://api.dev.numbers.ae/v1/catalog/plate",
        {
          params: {
            emirate: query ? query.emirate : 1,
            code: query ? query.code : "A",
            order: query ? query.order : "desc",
            page: plateNumbers.value.length + 1,
          },
        }
      );
      plateNumbers.value.push(data.data);
      showMore.value = data.pagination.totalCount - 12;
    } catch (e) {
      console.log("Error fetching plates:", e);
    } finally {
      isPlatesLoading.value = false;
    }
  };

  // Fetch phone numbers
  const fetchPhone = async (query?: any) => {
    if (isPhonesLoading.value) return;
    try {
      isPhonesLoading.value = true;
      const { data } = await axios.get(
        "https://api.dev.numbers.ae/v1/catalog/phone",
        {
          params: {
            operator: query ? query.operator : 1,
            code: query ? query.code : "052",
            order: query ? query.order : "desc",
            page: plateNumbers.value.length + 1,
          },
        }
      );
      phoneNumbers.value.push(data.data);
      showMore.value = data.pagination.totalCount - 12;
    } catch (error) {
      console.error("Error fetching plates:", error);
    } finally {
      isPhonesLoading.value = false;
    }
  };

  const resetCatalogData = () => {
    phoneNumbers.value = [];
    plateNumbers.value = [];
  };
  // Fetch plate details by ID
  const fetchPlateDetails = async (id: number) => {
    try {
      const { data } = await axios.get<IDetails[]>(
        `https://api.dev.numbers.ae/v1/catalog/plate/${id}`
      );
      plateDetails.value = data;
      console.log("Детали номера:", plateDetails.value);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  const handleNumberTypeChange = (numberType: boolean) => {
    selectedPlateType.value = numberType;
  };

  const selectedPlateId = ref<null | number>(0);

  const handleClick = async (id: number) => {
    selectedPlateId.value = id;
    await fetchPlateDetails(id);
  };
  return {
    plateNumbers,
    phoneNumbers,
    fetchPlate,
    fetchPhone,
    selectedPlateType,
    handleNumberTypeChange,
    handleClick,
    selectedPlateId,
    plateDetails,
    fetchPlateDetails,
    viewedPlates,
    showMore,
    resetCatalogData,
  };
});
