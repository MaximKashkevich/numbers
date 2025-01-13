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

export interface IMobile {
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
  const plateNumbers = ref<IPlate[]>([]);
  const mobileNumbers = ref<IMobile[]>([]);
  const plateDetails = ref<IDetails[]>([]);
  const viewedPlates = ref<IPlate[]>([]);

  const selectedPlateType = ref(true);
  const selectedEmirate = ref("Dubai");
  const selectedCode = ref("050");
  const selectedSort = ref("Latest");

  // Fetch plate numbers
  const fetchPlate = async (query?: any) => {
    // const formattedQuery = {
    //   ...query,
    //   order: query.sort === "Latest" ? "desc" : "asc",
    // };
    try {
      const { data } = await axios.get<IPlate[]>(
        "https://api.dev.numbers.ae/v1/catalog/plate",
        { params: query }
      );
      plateNumbers.value = data;
      console.log(data, "data");
    } catch (e) {
      console.log("Error fetching plates:", e);
    }
    const response = await axios.get(
      "https://api.dev.numbers.ae/v1/catalog/plate"
    );
    console.log(response.headers, "headers");
  };

  const fetchPhone = async (query?: any) => {
    try {
      const { data } = await axios.get<IMobile[]>(
        "https://api.dev.numbers.ae/v1/catalog/phone",
        { params: query }
      );
      mobileNumbers.value = data.map((item) => ({
        ...item, // сохраняем остальные свойства объекта
        phone: item.phone.replace(/[\s_-]+/g, "").toUpperCase(),
      }));
    } catch (e) {
      console.log("Error fetching mobile plates:", e);
    }
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

  // Handle emirate change
  const handleEmirateChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    selectedEmirate.value = target.value;
  };

  const handleNumberTypeChange = (numberType: boolean) => {
    selectedPlateType.value = numberType;
  };

  const handleSortChange = (sortType: string) => {
    selectedSort.value = sortType;
  };

  const selectedPlateId = ref<null | number>(0);

  const handleClick = async (id: number) => {
    selectedPlateId.value = id;
    console.log(selectedPlateId.value);
    await fetchPlateDetails(id);
  };
  return {
    plateNumbers,
    mobileNumbers,
    fetchPlate,
    fetchPhone,
    selectedEmirate,
    selectedPlateType,
    selectedSort,
    handleNumberTypeChange,
    handleEmirateChange,
    handleSortChange,
    selectedCode,
    handleClick,
    selectedPlateId,
    plateDetails,
    fetchPlateDetails,
    viewedPlates,
  };
});
