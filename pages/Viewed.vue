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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
  plates.map((plate) => {
    fetchAndPushViewedPlate(plate, numberIsPlate);
    console.log("this is a plate id!", plate, typeof plate);
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
    const tempNumber = { ...response.data, id: plate };
    viewedPlates.push(tempNumber);
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
