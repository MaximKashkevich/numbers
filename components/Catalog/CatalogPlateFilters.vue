<template>
  <div
    class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Emirate :"
      :option-list="dropdownStore.emirateList"
      v-model="plateFilterParams.emirate"
    />
  </div>
  <div
    class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Code :"
      :option-list="dropdownStore.plateCodeList"
      v-model="plateFilterParams.code"
    />
  </div>
  <div
    class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Sort by :"
      :option-list="sortTypeList"
      v-model="plateFilterParams.sort"
    />
  </div>
</template>
<script setup>
import { useDropdownStore } from "~/stores/dropdownStore";
import { usePlateStore } from "~/stores/plateStore";
import BaseDropdown from "../ui/BaseDropdown.vue";
import { onMounted, toRaw } from "vue";
const plateStore = usePlateStore();
const dropdownStore = useDropdownStore();

const plateFilterParams = ref({
  emirate: "Dubai",
  code: "Без кода",
  sort: "Latest",
  page: 1,
});

const sortTypeList = ref([
  { id: 1, name: "Latest" },
  { id: 2, name: "Earliest" },
]);

// watch(
//   () => plateFilterParams.value,
//   () => {
//     fetchFilteredPlates();
//   },
//   { deep: true }
// );

const fetchFilteredPlates = () => {
  const selectedEmirate = toRaw(dropdownStore.emirateList).find(
    (item) => item.name === plateFilterParams.value.emirate
  );

  console.log(plateFilterParams.value.code, "value code");
  plateStore.fetchPlate(
    toRaw({ ...plateFilterParams.value, emirate: selectedEmirate.id })
  );
};

watch(
  () => plateFilterParams.value.emirate,
  async (newEmirate) => {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (emirate) => emirate.name === newEmirate
    );

    if (selectedEmirate) {
      // Ждём завершения асинхронного запроса
      await dropdownStore.fetchPlateCodeDropdownData(selectedEmirate.id);

      // После получения данных устанавливаем значение
      plateFilterParams.value.code = dropdownStore.toggleDefaultCode;
      fetchFilteredPlates();
    }
  }
);

onMounted(async () => {
  await dropdownStore.fetchPlateCodeDropdownData(1);
  await dropdownStore.fetchDropdownData();
  fetchFilteredPlates();
});
</script>
