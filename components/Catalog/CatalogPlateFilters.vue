<template>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Emirate :"
      :option-list="dropdownStore.emirateList"
      v-model="plateFetchStore.filterParams.emirate"
    />
  </div>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Code :"
      :option-list="dropdownStore.plateCodeList"
      v-model="plateFetchStore.filterParams.code"
    />
  </div>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Sort by :"
      :option-list="sortTypeList"
      v-model="plateFetchStore.filterParams.sort"
    />
  </div>
</template>
<script setup>
import { useDropdownStore } from "~/stores/dropdownStore";
import { usePlateStore } from "~/stores/plateStore";
import BaseDropdown from "../ui/BaseDropdown.vue";
import { onMounted, toRaw } from "vue";
import { usePlateFetchStore } from "~/stores/plateFetchStore";
const plateStore = usePlateStore();
const dropdownStore = useDropdownStore();
const plateFetchStore = usePlateFetchStore();

const sortTypeList = ref([
  { id: 1, name: "Latest" },
  { id: 2, name: "Earliest" },
]);

onMounted(() => {
  console.log(plateFetchStore.filterParams, "12321");
});

watch(
  () => plateFetchStore.filterParams.emirate,
  async (newEmirate) => {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (emirate) => emirate.name === newEmirate
    );

    if (selectedEmirate) {
      // Ждём завершения асинхронного запроса
      await dropdownStore.fetchPlateCodeDropdownData(selectedEmirate.id);

      // После получения данных устанавливаем значение
      plateFetchStore.filterParams.code = dropdownStore.defaultPlateCode;
      plateStore.plateNumbers = [];
      plateStore.phoneNumbers = [];
      plateFetchStore.fetchFilteredPlates();
    }
  }
);

watch(
  [
    () => plateFetchStore.filterParams.code,
    () => plateFetchStore.filterParams.sort,
  ],
  () => {
    plateStore.plateNumbers = [];
    plateStore.phoneNumbers = [];
    plateFetchStore.fetchFilteredPlates();
  }
);

onMounted(async () => {
  await dropdownStore.fetchPlateCodeDropdownData(1);
  await dropdownStore.fetchDropdownData();
  plateFetchStore.fetchFilteredPlates();
});
</script>
