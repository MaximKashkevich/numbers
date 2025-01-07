<template>
  <div class="container-input mt-[150px]">
    <h3 class="2text-xl leading-[60px] text-left title-input mb-[50px]">
      Choose your number
    </h3>
    <div class="flex gap-[20px] items-center justify-between flex-wrap">
      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="type"
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
            @click="changeTypePlate"
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
            @click="changeTypePhone"
          >
            Mobile
          </button>
        </div>
      </div>
      <div
        class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
      >
        <BaseDropdown
          label="Emirate :"
          :option-list="dropdownStore.emirateList"
          v-model="filterParams.emirate"
        />
      </div>
      <div
        class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
      >
        <BaseDropdown
          label="Code :"
          :option-list="dropdownStore.plateCodeList"
          v-model="filterParams.code"
        />
      </div>
      <div
        class="text-[16px] text-left w-[250px] h-[85px] bg-[#FAFAFA] flex items-end justify-between"
      >
        <BaseDropdown
          label="Sort by :"
          :option-list="sortTypeList"
          v-model="filterParams.sort"
        />
      </div>
      <ButtonBlue
        @click="
          () => {
            dropdownStore.closeAllDropdowns();
          }
        "
        class="flex self-end justify-center font-bold max-w-[220px]"
      >
        Show {{ filteredPlateNumbers.length }} numbers
      </ButtonBlue>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate
        v-if="plateStore.selectedPlateType"
        v-for="item in filteredPlateNumbers"
        :key="item.id"
        v-bind="item"
        :is-featured-class="false"
      />
      <CardPlate
        v-if="!plateStore.selectedPlateType"
        v-for="item in mobileNumbers"
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
        v-for="item in filteredFeaturedPlateNumbers"
        :key="item.id"
        v-bind="item"
        :is-featured-class="true"
        :to="
          item.type === 'plate'
            ? `/number/plate/${item.id}`
            : `/number/phone/${item.id}`
        "
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { usePlateStore } from "~/stores/plateStore";
import { useRouter, useRoute } from "vue-router";
import { watch } from "vue";
import { useDropdownStore } from "~/stores/dropdownStore";
import BaseDropdown from "./ui/BaseDropdown.vue";
const dropdownStore = useDropdownStore();
const plateStore = usePlateStore();
const router = useRouter();
const route = useRoute();

const filterParams = ref({ emirate: "Dubai", code: "AA", sort: "Latest" });

const sortTypeList = ref([
  { id: 1, name: "Latest" },
  { id: 2, name: "Earliest" },
]);

const filteredPlateNumbers = computed(() => {
  return plateStore.filteredPlateNumbers;
});
const filteredFeaturedPlateNumbers = computed(() => {
  return plateStore.filteredFeaturedPlateNumbers;
});
const mobileNumbers = computed(() => {
  return plateStore.mobileNumbers;
});

onMounted(() => {
  plateStore.fetchPlate();
  dropdownStore.fetchDropdownData();
});

const changeTypePlate = () => {
  plateStore.handleNumberTypeChange(true);
  dropdownStore.closeAllDropdowns();
  plateStore.fetchPlate();
  changeNumberType("plate");
};

const changeTypePhone = () => {
  plateStore.handleNumberTypeChange(false);
  dropdownStore.closeAllDropdowns();
  plateStore.fetchPhone();
  changeNumberType("phone");
};

const changeNumberType = (type: string) => {
  router.replace({
    query: {
      ...route.query,
      numberType: type,
    },
  });
};

watch(
  () => route.query.numberType,
  (newValue) => {
    if (newValue === "plate") {
      changeTypePlate();
    } else {
      changeTypePhone();
    }
  }
);
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
  background-color: #fff !important;
}

.dropdown1 {
  z-index: 3;
}

.dropdown2 {
  z-index: 2;
}
</style>
