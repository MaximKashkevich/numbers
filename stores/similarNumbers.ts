import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export interface ISimilar {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  type: string;
  views: number;
  datePosted: string;
}

export const useSimilarNumbersStore = defineStore("similarNumbers", () => {
  const similarNumbers = ref<ISimilar[]>([]);

  const fetchSimilar = async () => {
    try {
      const { data } = await axios.get<ISimilar[]>(
        "https://api.dev.numbers.ae/v1/catalog/phone"
      );
      similarNumbers.value = data;
      //   console.log(similarNumbers.value);
    } catch (e) {
      console.error("Error fetching plates:", e);
    }
  };

  return {
    similarNumbers,
    fetchSimilar,
  };
});
