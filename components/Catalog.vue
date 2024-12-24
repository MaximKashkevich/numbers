<template>
  <div class="container-input mt-[150px]">
    <h3 class="2text-xl leading-[60px] text-left title-input mb-[50px]">
      Choose your number
    </h3>
    <div class="flex gap-[20px] items-center justify-between flex-wrap">
      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="emirate"
        >
          Type:
        </label>
        <div class="flex mt-[10px] gap-[10px]">
          <button
            :class="[
              'button__filter w-[130px] h-[51.2px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
              plateStore.selectedPlateType
                ? 'border-[#000]'
                : 'border-[#bfbfbf]',
            ]"
            @click="
              () => {
                plateStore.handleNumberTypeChange(true);
              }
            "
          >
            Plate
          </button>
          <button
            :class="[
              'button__filter w-[130px] h-[51.2px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
              !plateStore.selectedPlateType
                ? 'border-[#000]'
                : 'border-[#bfbfbf]',
            ]"
            @click="
              () => {
                plateStore.handleNumberTypeChange(false);
              }
            "
          >
            Mobile
          </button>
        </div>
      </div>

      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="emirate"
        >
          Emirate:
        </label>
        <div @click="toggleEmirateDropdown" class="relative">
          <button
            class="mt-[10px] text-[16px] leading-[19.2px] text-left w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
            :class="{ select: true, select__open: isEmirateDropdownOpen }"
          >
            {{ selectedEmirate || "Dubai" }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isEmirateDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="isEmirateDropdownOpen"
            class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2"
            :class="{ select: true, dropdown__open: isEmirateDropdownOpen }"
          >
            <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
              <li
                v-for="region in plateStore.regions"
                :key="region.id"
                @click="handleEmirateChange(region.name)"
                class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
              >
                {{ region.name }}
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="code"
        >
          Code:
        </label>
        <div @click="toggleCodeDropdown" class="relative">
          <button
            class="mt-[10px] text-[16px] leading-[19.2px] text-left w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
            :class="{ select: true, select__open: isCodeDropdownOpen }"
          >
            {{ selectedCode || "050" }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isCodeDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="isCodeDropdownOpen"
            class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2"
            :class="{ dropdown__open: isCodeDropdownOpen }"
          >
            <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
              <li
                v-for="code in plateStore.codes"
                @click="handleCodesChange(code.name)"
                :key="code.id"
                class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
              >
                {{ code.name }}
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <label
          for="sort"
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >Sort by:</label
        >
        <div @click="toggleSortDropdown" class="relative">
          <button
            class="mt-[10px] text-[16px] leading-[19.2px] text-left w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
            :class="{ select: true, select__open: isSortDropdownOpen }"
          >
            {{ plateStore.selectedSort || "Latest" }}
            <!-- Начальное значение -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isSortDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="isSortDropdownOpen"
            class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2"
            :class="{ dropdown__open: isSortDropdownOpen }"
          >
            <li
              @click="
                () => {
                  plateStore.handleSortChange('Latest');
                }
              "
              class="py-2 px-5 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
            >
              Latest
            </li>
            <li
              @click="
                () => {
                  plateStore.handleSortChange('Earliest');
                }
              "
              class="py-2 px-5 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
            >
              Earliest
            </li>
          </ul>
        </div>
      </div>
      <ButtonBlue class="flex self-end font-bold">
        Show {{ filteredPlateNumbers.length }} numbers
      </ButtonBlue>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate
        to="/PlateNUmberCard"
        v-for="item in filteredPlateNumbers"
        @click="handleClick(item.id)"
        :key="item.id"
        v-bind="item"
        :is-featured-class="false"
      />
    </div>
    <h3
      class="text-[16px] font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]"
    >
      Featured:
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate
        to="/PlateNUmberCard"
        v-for="item in filteredFeaturedPlateNumbers"
        @click="handleClick(item.id)"
        :key="item.id"
        v-bind="item"
        :is-featured-class="true"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from "vue";
import { usePlateStore } from "~/stores/plateStore";
import { useRouter } from "vue-router";

const router = useRouter();

// const goToLink = (page: string) => {
//   router.push(page);
//   toggleOptionIsNumbers.value = page === "/plate"; // Обновляем состояние, чтобы отобразить правильный стиль кнопки
// };

const plateStore = usePlateStore();
const selectedEmirate = ref("Dubai");
const selectedCode = ref("AA");
const isEmirateDropdownOpen = ref(false);
const isCodeDropdownOpen = ref(false);
const isSortDropdownOpen = ref(false);

const handleClick = (id: number) => {
  plateStore.handleClick(id); // Вызываем обработчик клика для получения деталей
};
// Обработчик изменения эмирата
const handleEmirateChange = (emirate: string) => {
  selectedEmirate.value = emirate;
  plateStore.selectedEmirate = emirate;
  isEmirateDropdownOpen.value = true;
};

const handleCodesChange = (codes: string) => {
  selectedCode.value = codes;
  plateStore.selectedCode = codes; // Обновляем состояние в store
  isEmirateDropdownOpen.value = false; // Закрыть дропдаун
};

const toggleEmirateDropdown = () => {
  isEmirateDropdownOpen.value = !isEmirateDropdownOpen.value;
};

const toggleCodeDropdown = () => {
  isCodeDropdownOpen.value = !isCodeDropdownOpen.value;
};

const toggleSortDropdown = () => {
  isSortDropdownOpen.value = !isSortDropdownOpen.value;
};

const filteredPlateNumbers = computed(() => {
  return plateStore.filteredPlateNumbers;
});
const filteredFeaturedPlateNumbers = computed(() => {
  return plateStore.filteredFeaturedPlateNumbers;
});

onMounted(() => {
  plateStore.fetchRegions();
  plateStore.fetchCodes();
  plateStore.fetchPlate();
});
</script>

<style>
.button__filter {
  transition: border 0.3s;
}

.button__filter:hover {
  border-color: #000;
}

h3 {
  font-size: clamp(32px, 10vw, 56px);
}

.select {
  border-radius: 25px;
}

.select__open {
  border-radius: 25px 25px 0 0;
  border-bottom: none;
}

.dropdown__open {
  border-radius: 0 0 25px 25px;
  border-top: none;
}

.select__option:hover {
  background-color: #fff;
}
</style>
