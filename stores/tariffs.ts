// import { defineStore } from "pinia";
// import axios from "axios";
// import { ref } from "vue";

// export interface ITariff {
//   id: number;
//   photo: string;
//   emirate: string;
//   price: number;
//   isFeatured: boolean;
//   type: string;
// }

// export const usePlateStore = defineStore("plateStore", () => {
//   const plateNumbers = ref<ITariff[]>([]);

//   const fetchPlate = async () => {
//     try {
//       const { data } = await axios.get<IPlate[]>(
//         "https://api.dev.numbers.ae/v1/catalog/plate"
//       );
//       plateNumbers.value = data;
//       console.log(plateNumbers.value);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return { plateNumbers, fetchPlate };
// });
