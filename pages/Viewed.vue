<template>
  <div class="px-4 sm:px-8 lg:px-[60px]">
    <nav class="mb-6 mt-6">
      <ul class="flex gap-2 px-8">
        <li>
          <NuxtLink to="/" class="text-[#005DCA] cursor-pointer transition"
            >Home /</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to=""
            class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition"
            >You used to watch
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <h1
      class="text-[32px] px-8 sm:text-[40px] lg:text-[50px] font-medium leading-[40px] sm:leading-[50px] text-left"
    >
      You used to watch
    </h1>

    <div class="flex flex-wrap gap-4 mt-4 sm:gap-6 lg:gap-8 mt-[70px]">
      <CardPlate v-for="plate in viewedPlates" :key="plate.id" v-bind="plate" />
      <div>
        <!-- Добавляем пагинацию -->
        <!-- <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="currentPage"
                @update:page="onPageChange" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const viewedPlates = reactive<ViewedPlate[]>([]);

interface ViewedPlate {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  type: string;
  datePosted: string;
  views: number;
}

onMounted(() => {
  const viewedPlatesDataString = localStorage.getItem("viewedPlates");
  const viewedPhonesDataString = localStorage.getItem("viewedPhones");

  // plates
  if (viewedPlatesDataString) {
    try {
      const parsedData = JSON.parse(viewedPlatesDataString);
      if (Array.isArray(parsedData)) {
        fetchViewedNumbers(parsedData, true);
      }
    } catch (e) {
      console.error("Failed to parse viewedPlates from localStorage", e);
    }
  }

  //phones
  if (viewedPhonesDataString) {
    try {
      const parsedData = JSON.parse(viewedPhonesDataString);
      if (Array.isArray(parsedData)) {
        fetchViewedNumbers(parsedData, false);
      }
    } catch (e) {
      console.error("Failed to parse viewedPlates from localStorage", e);
    }
  }
});

const fetchViewedNumbers = async (
  plates: ViewedPlate[],
  numberIsPlate: boolean
) => {
  console.log("is number a plate? ", numberIsPlate);
  plates.map((plate) => {
    fetchAndPushViewedPlate(plate, numberIsPlate);
  });
};

const fetchAndPushViewedPlate = async (
  plate: ViewedPlate,
  numberIsPlate: boolean
) => {
  try {
    const response = await axios.get(
      // `https://api.dev.numbers.ae/v1/catalog/plate/${plate}`
      `https://api.dev.numbers.ae/v1/catalog/${
        numberIsPlate ? "plate" : "phone"
      }/${plate}`
    );
    viewedPlates.push(response.data);
  } catch (err) {
    console.error(err, "ошибка фетча");
  }
};
// export default {
//     components: {
//         CardPlate,
//         SimilarNumber,
//         SimilarNumberLowPrice,
//         Card,
//     },
//     setup() {
//         const totalPages = ref(10); // Общее количество страниц
//         const currentPage = ref(1);  // Текущая страница

//         const onPageChange = (page) => {
//             currentPage.value = page;
//             console.log('Текущая страница:', currentPage.value);
//         };

//         return {
//             totalPages,
//             currentPage,
//             onPageChange,
//         };
//     },
// };
</script>
