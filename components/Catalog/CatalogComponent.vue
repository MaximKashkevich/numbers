<template>
  <div class="container-input pt-[150px]">
    <h1
      v-if="route.fullPath.includes('plate')"
      class="tw-page-heading w-[100%] lg:w-[900px] mb-10"
    >
      Buy and Sell Car Registration Plates in the UAE
    </h1>
    <h1 v-else class="tw-page-heading w-[100%] lg:w-[900px] mb-10">
      Buy and Sell Mobile Numbers in the UAE
    </h1>
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
      <CatalogPlateFilters v-if="plateStore.selectedPlateType" />
      <!-- <div
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
      </div> -->
      <!-- <ButtonBlue
        @click="
          () => {
            dropdownStore.closeAllDropdowns();
          }
        "
        class="flex self-end justify-center font-bold max-w-[220px]"
      >
        Show {{ plateStore.plateNumbers.length }} numbers
      </ButtonBlue> -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate
        v-if="plateStore.selectedPlateType"
        v-for="item in plateStore.plateNumbers"
        :key="item.id"
        v-bind="item"
        :is-featured-class="false"
      />
      <CardPlate
        v-if="!plateStore.selectedPlateType"
        v-for="item in plateStore.mobileNumbers"
        :key="item.id"
        v-bind="item"
        :is-featured-class="false"
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
import BaseDropdown from "../ui/BaseDropdown.vue";
import Pagination from "../Pagination/Pagination.vue";
import CatalogPlateFilters from "./CatalogPlateFilters.vue";
const dropdownStore = useDropdownStore();
const plateStore = usePlateStore();
const router = useRouter();
const route = useRoute();

const filterParams = ref({
  emirate: "Dubai",
  code: "AA",
  sort: "Latest",
  page: 1,
});

const sortTypeList = ref([
  { id: 1, name: "Latest" },
  { id: 2, name: "Earliest" },
]);

const mobileNumbers = computed(() => {
  return plateStore.mobileNumbers;
});

onMounted(() => {
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

onMounted(() => {
  handleRouteChange();
});

// watch(
//   () => route.query.numberType,
//   () => {
//     handleRouteChange();
//   }
// );

// watch(
//   () => filterParams.value,
//   () => {
//     ComputedFiltered();
//   },
//   { deep: true }
// );

const ComputedFiltered = () => {
  const emirateId = dropdownStore.emirateList.find(
    (emirate) => emirate.name === filterParams.value.emirate
  );
  const plateCodeId = dropdownStore.plateCodeList.find(
    (code) => code.name === filterParams.value.code
  );
  const tempParams = {
    emirate: emirateId ? emirateId.id : null,
    // code: plateCodeId ? plateCodeId.id : null,
    order: filterParams.value.sort === "Latest" ? "desc" : "asc",
    page: filterParams.value.page,
  };
  plateStore.fetchPlate(tempParams);
};

const handleRouteChange = () => {
  const numberType = route.query.numberType || "plate";
  if (numberType === "plate") {
    plateStore.handleNumberTypeChange(true);
    plateStore.fetchPlate();
  } else {
    plateStore.handleNumberTypeChange(false);
    plateStore.fetchPhone();
  }

  // router.push({
  //   query: {
  //     emirate: "Dubai",
  //     code: "AA",
  //     sort: "Latest",
  //     page: 1,
  //   },
  // });
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
