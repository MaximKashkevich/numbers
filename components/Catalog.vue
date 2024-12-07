<template>
  <div class="container-input mt-[150px]">
    <h3 class="w-[1320px] h-[60px] leading-[60px] text-left title-input mb-[50px]">
      Choose your number
    </h3>
    <div class="flex gap-[20px] items-center flex-wrap">
      <div>
        <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]" for="type">Type:</label>
        <div class="mt-[10px] flex gap-[10px]">
          <button @click="setTogglePlate" :class="[
            'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
            toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
          ]">
            Plate
          </button>
          <button @click="setToggleMobile" :class="[
            'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
            !toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
          ]">
            Mobile
          </button>
        </div>
      </div>
      <div>
        <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]" for="emirate">
          Emirate:
        </label>
        <select
          class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]"
          id="emirate" v-model="selectedEmirate" @change="handleEmirateChange">
          <option v-for="region in regions" :key="region.id" :value="region.name">
            {{ region.name }}
          </option>
        </select>
      </div>
      <div v-if="toggleOptionIsNumbers">
        <label for="code" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Code:</label>
        <select id="emirate" name="code" v-model="toggleQuery.code"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
          <option v-for="code in codes" :key="code.id" :value="code.name">
            {{ code.code }}
          </option>
        </select>
      </div>
      <div>
        <label for="sort" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Sort by:</label>
        <select id="emirate" name="sort" v-model="toggleQuery.sort"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
          <option value="desc">Latest</option>
          <option value="asc">Earliest</option>
        </select>
      </div>
      <ButtonBlue @click="useToggleQuery"
        class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]">
        Show 1234 numbers
      </ButtonBlue>
    </div>
    <h3 class="text-[16px] font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]">
      Featured:
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate v-for="item in filteredPlateNumbers" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"
import { usePlateStore } from "/stores/plateStore";

// if toggleNumbers === plate return true
// else if mobile return false


const plateStores = usePlateStore();
const selectedEmirate = ref(plateStores.selectedEmirate);
const codes = ref(plateStores.codes)
const regions = ref(plateStores.regions);

onMounted(() => {
  plateStores.fetchRegions();
  plateStores.fetchCodes();
  plateStores.fetchPlate(toggleQuery);
})

// Обработчик изменения эмирата
const handleEmirateChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  selectedEmirate.value = target.value;
  plateStores.selectedEmirate = selectedEmirate.value; // Обновляем состояние в store
};

const filteredPlateNumbers = computed(() => {
  return plateStores.filteredPlateNumbers;
});


let currentPage = ref(1);
let toggleOptionIsNumbers = ref(true);
let toggleQuery = {
  type: "plate",
  emirate: "dubai",
  code: "aa",
  sort: "desc",
};

const useToggleQuery = () => {
  plateStores.fetchPlate({ ...toggleQuery, page: currentPage.value });
};
watch(currentPage, () => {
  useToggleQuery();
});
const setTogglePlate = () => {
  toggleOptionIsNumbers.value = true;
  toggleQuery.type = "plate";
  useToggleQuery();
};
const setToggleMobile = () => {
  toggleOptionIsNumbers.value = false;
  toggleQuery.type = "phone";
  useToggleQuery();
};

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
