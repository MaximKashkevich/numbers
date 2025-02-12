<template>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Operator :"
      :option-list="dropdownStore.operatorList"
      v-model="phoneFetchStore.filterParams.operator"
    />
  </div>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Prefix :"
      :option-list="dropdownStore.operatorCodeList"
      v-model="phoneFetchStore.filterParams.code"
    />
  </div>
  <div
    class="text-[16px] text-left w-[100%] md:w-[300px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
  >
    <BaseDropdown
      label="Sort by :"
      :option-list="sortTypeList"
      v-model="phoneFetchStore.filterParams.sort"
    />
  </div>
</template>
<script setup>
import { useDropdownStore } from "~/stores/dropdownStore";
import { usePlateStore } from "~/stores/plateStore";
import BaseDropdown from "../ui/BaseDropdown.vue";
import { onMounted, toRaw } from "vue";
import { usePhoneFetchStore } from "~/stores/phoneFetchStore";
const plateStore = usePlateStore();
const dropdownStore = useDropdownStore();
const phoneFetchStore = usePhoneFetchStore();

const sortTypeList = ref([
  { id: 1, name: "Latest" },
  { id: 2, name: "Earliest" },
]);

watch(
  () => phoneFetchStore.filterParams.operator,
  async (newOperator) => {
    const selectedOperator = toRaw(dropdownStore.operatorList).find(
      (operator) => operator.name === newOperator
    );

    if (selectedOperator) {
      phoneFetchStore.filterParams.code = "052";
      plateStore.plateNumbers = [];
      plateStore.phoneNumbers = [];
      phoneFetchStore.fetchFilteredPhones();
    }
  }
);

watch(
  [
    () => phoneFetchStore.filterParams.code,
    () => phoneFetchStore.filterParams.sort,
  ],
  () => {
    plateStore.plateNumbers = [];
    plateStore.phoneNumbers = [];
    // phoneFetchStore.fetchFilteredPhones();
  }
);

onMounted(async () => {
  await dropdownStore.fetchPlateCodeDropdownData(1);
  await dropdownStore.fetchDropdownData();
  phoneFetchStore.fetchFilteredPhones();
});
</script>
