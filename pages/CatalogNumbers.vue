<template>
  <NuxtPage />
  <div class="px-[60px]">
    <nav class="mb-[30px] mt-[30px] navigation">
      <ul class="flex gap-[5px]">
        <li>
          <NuxtLink
            href="/BuyNumbers"
            class="text-[#005DCA] transition cursor-pointer"
          >
            Home /
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            href=""
            class="text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer"
          >
            Plate numbers
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- Входные данные и фильтры -->
    <Catalog />
    <SimilarNumbersList />
  </div>

  <div class="px-[60px] flex flex-col gap-[50px]">
    <div v-if="isPlateSelected && filteredPlates.length > 0" class="mt-[40px]">
      <ul class="flex gap-[20px] flex-wrap">
        <li
          class="hover:shadow-2xl py-[30px] px-[30px] hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00]"
          v-for="(plate, index) in filteredPlates"
          :key="index"
        >
          <div>
            <p>Plate: {{ plate.plate }}</p>
            <p
              class="w-[180px] h-[24px] text-[20px] font-medium leading-[24px]"
            >
              Price: <span v-html="plate.price"></span>
            </p>
            <p
              class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3] pt-16"
            >
              Emirate12: {{ plate.emirate }}
              12312
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div
      v-if="!isPlateSelected && filteredPlates2.length > 0"
      class="mt-[40px]"
    >
      <ul class="flex gap-[20px] flex-wrap">
        <li
          class="flex-1 min-w-[300px] max-w-[426px] h-auto p-4 rounded-[20px] bg-white border-[2px] border-[#B3B3B3] flex flex-col justify-between"
          v-for="(phone, index) in filteredPlates2"
          :key="index"
        >
          <p>Phone: {{ phone.phone }}</p>
          <p class="w-[180px] h-[24px] text-[20px] font-medium leading-[24px]">
            Price: <span v-html="phone.price"></span>
          </p>
          <p
            class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3] pt-16"
          >
            Emirate: {{ phone.emirate }}
          </p>
        </li>
      </ul>
    </div>
  </div>

  <!-- Пагинация -->
  <div>
    <Pagination
      class="mt-[70px] px-[50px]"
      :total-pages="totalPages"
      :current-page="page"
      @update:page="onPageChange"
    />
    <!-- <button @click="increaseTotalPages"  class="w-[100px] h-[52px] bg-[#fff] rounded-[20px] border-[1px] border-[#BFBFBF]">add page</button>
        <button @click="decreaseTotalPages" class="w-[100px] h-[52px] bg-[#fff] rounded-[20px] border-[1px] border-[#BFBFBF]">delete page</button> -->
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import CardPlate from "../components/Card.vue";
import SimilarNumber from "../components/SimilarNumbers/SimilarNumber.vue";
import SimilarNumberLowPrice from "../components/LowSimilarNumbers/SimilarNumberLowPrice.vue";
import Pagination from "../components/Pagination/Pagination.vue";
import MiniButton from "../components/MiniButton/MiniButton.vue";
import Card from "../components/Card.vue";
import { useAuthStore } from "@/stores/auth";
import SimilarNumbersList from "../components/SimilarNumbersList.vue";

export default {
  components: {
    CardPlate,
    SimilarNumber,
    SimilarNumberLowPrice,
    Pagination,
    Card,
  },
  setup() {
    const route = useRoute();
    const isExactMatch = ref(false);
    const exactMatchValue = ref("");
    const phoneCatalog = ref([]);
    const plateCatalog = ref([]);
    const filteredPhoneCatalog = computed(() => {
      if (exactMatchValue.value.trim() === "") {
        return phoneCatalog.value;
      }
      return phoneCatalog.value.filter(
        (phone) =>
          phone.phone.includes(exactMatchValue.value) ||
          phone.price.toString().includes(exactMatchValue.value) ||
          phone.emirate.includes(exactMatchValue.value)
      );
    });

    const filteredPlateCatalog = computed(() => {
      if (exactMatchValue.value.trim() === "") {
        return plateCatalog.value;
      }
      return plateCatalog.value.filter(
        (plate) =>
          plate.plate.includes(exactMatchValue.value) ||
          plate.price.toString().includes(exactMatchValue.value) ||
          plate.emirate.includes(exactMatchValue.value)
      );
    });

    const showMore = ref(false);
    const isChecked = ref(false);
    const priceFrom = ref("");
    const priceTo = ref("");
    const selectedDigits = ref([]);
    const postedDate = ref("Today");
    const isPlateSelected = ref(true);
    const activeButton = ref(null);
    const totalPages = ref(0);
    const page = ref(1);
    const itemsPerPage = 3;
    const stateinput = ref("");
    const isActive = ref(false);
    const authStore = useAuthStore();
    const token = authStore.authToken;

    const maxprice = ref("150000");
    const pricelow = ref("2000");
    const isActiveinput = ref(false);

    const filteredPlates2 = computed(() => {
      const from = pricelow2.value ? parseFloat(pricelow2.value) : 0;
      const to = maxprice2.value ? parseFloat(maxprice2.value) : Infinity;

      return phoneCatalog.value.filter((item) => {
        const priceString = item.price.replace(/[^0-9.]/g, "");
        const price = parseFloat(priceString);

        if (isNaN(price)) {
          console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
          return false;
        }

        return price >= from && price <= to;
      });
    });

    const maxprice2 = ref("");
    const pricelow2 = ref("");

    const filteredPlates = computed(() => {
      const from = pricelow.value ? parseFloat(pricelow.value) : 0;
      const to = maxprice.value ? parseFloat(maxprice.value) : Infinity;

      return plateCatalog.value.filter((item) => {
        const priceString = item.price.replace(/[^0-9.]/g, "");
        const price = parseFloat(priceString);

        if (isNaN(price)) {
          console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
          return false;
        }

        return price >= from && price <= to;
      });
    });

    const enableInput = () => {
      isReadonly.value = false;
    };

    const onPageChange = (newPage) => {
      page.value = newPage;
      fetchPhoneCatalog(page.value);
      fetchPlateCatalog(page.value);
    };

    const shoNumbers = (num) => {
      stateinput.value += num;
    };

    const showPlate = () => {
      isPlateSelected.value = true;
    };

    const showMobile = () => {
      isPlateSelected.value = false;

      const filteredPlates2 = computed(() => {
        const from = pricelow2.value ? parseFloat(pricelow2.value) : 0;
        const to = maxprice2.value ? parseFloat(maxprice2.value) : Infinity;

        return phoneCatalog.value.filter((item) => {
          const priceString = item.price.replace(/[^0-9.]/g, "");
          const price = parseFloat(priceString);

          if (isNaN(price)) {
            console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
            return false;
          }

          return price >= from && price <= to;
        });
      });

      const maxprice2 = ref("4000");
      const pricelow2 = ref("1000");
    };

    const seeMore = () => {
      showMore.value = !showMore.value;
    };

    const setActive = (buttonType) => {
      activeButton.value = buttonType;
    };

    watch(
      () => route.query.numberType, // Следим за изменением параметра `numberType`, он может быть Mobile или plate
      (newValue) => {
        if (newValue === "plate") {
          showPlate();
          setActive("Plate");
        } else if (newValue === "Mobile") {
          showMobile();
          setActive("Mobile");
        }
      },
      { immediate: true } // Срабатывает сразу при монтировании
    );
    const getButtonClass = (buttonType) => {
      return {
        "border-[#000000] text-[#000000]": activeButton.value === buttonType,
        "border-[#BFBFBF] text-[#BFBFBF]": activeButton.value !== buttonType,
      };
    };

    const clearFilters = () => {
      stateinput.value = "";
      selectedDigits.value = [];
      postedDate.value = "Today";
      isExactMatch.value = false;
      exactMatchValue.value = "";
    };

    const fetchPhoneCatalog = async (pageNumber) => {
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/catalog/phone?page=${pageNumber}&order=desc`
        );
        phoneCatalog.value = response.data.items || response.data;
        totalPages.value = Math.ceil(
          (phoneCatalog.value?.length || 0) / itemsPerPage
        );
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    };

    const fetchPlateCatalog = async (pageNumber) => {
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/catalog/plate?page=${pageNumber}&order=desc`
        );
        plateCatalog.value = response.data.items || response.data;

        totalPages.value = Math.ceil(phoneCatalog.value.length / itemsPerPage);
      } catch (error) {
        console.error("Error fetching plate data:", error);
      }
    };
    const phoneCatalogLoaded = computed(
      () => phoneCatalog.value && phoneCatalog.value.length > 0
    );
    const plateCatalogLoaded = computed(
      () => plateCatalog.value && plateCatalog.value.length > 0
    );

    const getSettingForSelect = async () => {
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/account/operators/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error("проблемы брат", error);
      }
    };

    const getOperatorList = async () => {
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/account/operators/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.success) {
          const operators = response.data.result.items;
          const selectElement = document.getElementById("emirate");

          selectElement.innerHTML = "";

          operators.forEach((operator) => {
            const option = document.createElement("option");
            option.value = operator.id;
            option.textContent = operator.name;
            selectElement.appendChild(option);
          });
        }
      } catch (e) {
        console.error("Ошибка при получении операторов:", e);
      }
    };

    const getNumberList = async () => {
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/account/operators/codes/list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.success) {
          const codes = response.data.result.items;
          const selectElement = document.getElementById("code-list");
          selectElement.innerHTML = "";
          codes.forEach((code) => {
            const option = document.createElement("option");
            option.value = code.id;
            option.textContent = code.name || code.code;
            selectElement.appendChild(option);
          });
        }
      } catch (e) {
        console.error("Ошибка при получении кодов:", e);
      }
    };

    const getPlatesForPage = computed(() => {
      const start = (page.value - 1) * itemsPerPage;
      return plateCatalog.value.slice(start, start + itemsPerPage);
    });

    const getPhonesForPage = computed(() => {
      const start = (page.value - 1) * itemsPerPage;
      return phoneCatalog.value.slice(start, start + itemsPerPage);
    });

    onMounted(() => {
      fetchPhoneCatalog(page.value);
      fetchPlateCatalog(page.value, 1);
      getSettingForSelect();
      getOperatorList();
      getNumberList();
    });

    return {
      isExactMatch,
      exactMatchValue,
      showMore,
      isChecked,
      priceFrom,
      priceTo,
      selectedDigits,
      postedDate,
      isPlateSelected,
      activeButton,
      totalPages,
      page,
      onPageChange,
      showPlate,
      showMobile,
      seeMore,
      setActive,
      getButtonClass,
      clearFilters,
      phoneCatalog,
      plateCatalog,
      fetchPlateCatalog,
      getPlatesForPage,
      getPhonesForPage,
      stateinput,
      shoNumbers,
      stateinput,
      isReadonly,
      enableInput,
      stateinput,
      isActive,
      maxprice,
      pricelow,
      filteredPlates,
      filteredPlates2,
    };
  },
};
</script>
<style>
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.dots span {
  width: 10px;
  height: 10px;
  background-color: #2b4dbd;
  border-radius: 50%;
  animation: blink 1.5s infinite ease-in-out;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  80%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

::placeholder {
  color: #c2c2c2;
}

.custom-checkbox {
  width: 30px;
  height: 25px;
  border: 1px solid #bfbfbf;
  background-color: #fafafa;
  border-radius: 6px;
  appearance: none;
  /* Убирает стандартный стиль браузера */
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-block;
}

.custom-checkbox:checked {
  background-color: #fafafa;
  border-color: #bfbfbf;
}

.custom-checkbox:checked::before {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  color: #4a90e2;
  font-size: 16px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox:focus {
  box-shadow: none;
}

.custom-label {
  font-size: 16px;
  color: #333;
  cursor: pointer;
  margin-left: 10px;
}

@media (max-width: 1024px) {
  .button-container {
    margin-top: 40px;
    margin-left: -1px;
  }

  .button--1 {
    margin-left: -1px;
  }

  .choice {
    margin-top: 30px;
    margin-left: -1px;
  }

  .text-checkbox {
    font-size: 16px;
    margin-bottom: 5px;
    width: 300px;
  }

  .checkbox-container {
    margin-bottom: 20px;
  }
}

@media (max-width: 530px) {
  .dots {
    margin-top: 80px;
  }
}
</style>
