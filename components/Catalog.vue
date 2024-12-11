<template>
  <div class="container-input mt-[150px]">
    <h3 class="2text-xl leading-[60px] text-left title-input mb-[50px]">
      Choose your number
    </h3>
    <div class="flex gap-[20px] items-center flex-wrap">
      <div class="flex mt-[10px]  gap-[10px]">
        <button @click="goToLink('/CatalogNumbers')" :class="[
          'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
          toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
        ]">
          Plate
        </button>
        <button @click="goToLink('/BuyNumbers2')" :class="[
          'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
          !toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
        ]">
          Mobile
        </button>
      </div>

      <div>
        <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]" for="emirate">
          Emirate:
        </label>
        <div @click="toggleEmirateDropdown" class="relative">
          <button
            class="mt-[10px] text-[16px] leading-[19.2px] text-left  w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px] flex items-center justify-between">
            {{ selectedEmirate || 'Dubai' }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isEmirateDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul v-if="isEmirateDropdownOpen"
            class="absolute mt-[5px] w-full bg-white border border-[#BFBFBF] rounded-md shadow-lg max-h-60 overflow-hidden">
            <li v-for="region in regions" :key="region.id" @click="handleEmirateChange(region.name)"
              class="py-2 px-4 hover:bg-gray-200 cursor-pointer font-medium ">
              {{ region.name }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]" for="code">
          Code:
        </label>
        <div @click="toggleCodeDropdown" class="relative">
          <button
            class="mt-[10px] text-[16px] leading-[19.2px] text-left w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px] flex items-center justify-between">
            {{ selectedCode || '050' }} <!-- Начальное значение -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isCodeDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul v-if="isCodeDropdownOpen"
            class="absolute mt-[5px] w-full bg-white border border-[#BFBFBF] rounded-md shadow-lg max-h-60 overflow-hidden">
            <li v-for="code in codes" @click="handleCodesChange(code.code)" :key="code.id"
              class="py-2 px-4 hover:bg-gray-200 cursor-pointer font-medium">
              {{ code.code }}
            </li>
          </ul>
        </div>
      </div>

      <div>
        <label for="sort" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Sort by:</label>
        <select id="emirate" name="sort"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
          <option value="desc">Latest</option>
          <option value="asc">Earliest</option>
        </select>
      </div>
      <ButtonBlue class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]">
        Show {{ plateStores.plateNumbers.length }} numbers
      </ButtonBlue>
    </div>
    <h3 class="text-[16px] font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]">
      Featured:
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate v-for="item in filteredPlateNumbers" @click="handleClick(item.id)" :key="item.id"
        :to="`/PlateNUmberCard`" v-bind="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { usePlateStore } from "~/stores/plateStore";
import { useRouter } from "vue-router";

const toggleOptionIsNumbers = ref(true);

const router = useRouter();

const goToLink = (page: string) => {
  router.push(page);
  toggleOptionIsNumbers.value = page === '/plate'; // Обновляем состояние, чтобы отобразить правильный стиль кнопки
};

const plateStores = usePlateStore();
const selectedEmirate = ref("Dubai");
const selectedCode = ref("050")
const isEmirateDropdownOpen = ref(false);
const isCodeDropdownOpen = ref(false);
const codes = ref(plateStores.codes);
const regions = ref(plateStores.regions);
const selectedPlateIdIndex = ref(0); // Индекс выбранного ID

const handleClick = (id: number) => {
  plateStores.handleClick(id); // Вызываем обработчик клика для получения деталей
};
// Обработчик изменения эмирата
const handleEmirateChange = (emirate: string) => {
  selectedEmirate.value = emirate;
  plateStores.selectedEmirate = emirate; // Обновляем состояние в store
  isEmirateDropdownOpen.value = false; // Закрыть дропдаун
  // console.log(isDropdownOpen.value)
};

const handleCodesChange = (codes: string) => {
  selectedCode.value = codes;
  plateStores.selectedCode = codes; // Обновляем состояние в store
  isEmirateDropdownOpen.value = false; // Закрыть дропдаун
  // console.log(isDropdownOpen.value)
}

const toggleEmirateDropdown = () => {
  isEmirateDropdownOpen.value = !isEmirateDropdownOpen.value;
};

const toggleCodeDropdown = () => {
  isCodeDropdownOpen.value = !isCodeDropdownOpen.value;
};

const filteredPlateNumbers = computed(() => {
  return plateStores.filteredPlateNumbers;
});

onMounted(() => {
  plateStores.fetchRegions();
  plateStores.fetchCodes();
  plateStores.fetchPlate();
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
</style>
