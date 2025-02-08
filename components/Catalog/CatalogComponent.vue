<template>
  <div class="container-input pt-[150px]">
    <div
      class="flex gap-[20px] items-center justify-between flex-wrap md:flex-nowrap"
    >
      <div class="w-full md:w-[30%] min-w-[250px]">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="type"
        >
          Type:
        </label>
        <div class="flex mt-[10px] gap-[20px]">
          <button
            :class="[
              'button__filter w-[50%] h-[51.2px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
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
              'button__filter w-[50%] h-[51.2px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
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
      <CatalogPhoneFilters v-else />
    </div>
    <div class="min-w-[100%] min-h-[100vh]">
      <CatalogPage
        v-if="plateStore.selectedPlateType"
        v-for="(catalogPage, index) in plateStore.plateNumbers"
        :page-data="catalogPage"
        page-type="plates"
      />
      <CatalogPage
        v-else
        v-for="(catalogPage, index) in plateStore.phoneNumbers"
        :page-data="catalogPage"
        page-type="phones"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { usePlateStore } from "~/stores/plateStore";
import { useRouter, useRoute } from "vue-router";
import { useDropdownStore } from "~/stores/dropdownStore";
import CatalogPlateFilters from "./CatalogPlateFilters.vue";
import CatalogPage from "./CatalogPage.vue";
import CatalogPhoneFilters from "./CatalogPhoneFilters.vue";
const dropdownStore = useDropdownStore();
const plateStore = usePlateStore();
const route = useRoute();

onMounted(() => {
  dropdownStore.fetchDropdownData();
});

const changeTypePlate = () => {
  plateStore.resetCatalogData();
  plateStore.handleNumberTypeChange(true);
  dropdownStore.closeAllDropdowns();
};

const changeTypePhone = () => {
  plateStore.resetCatalogData();
  plateStore.handleNumberTypeChange(false);
  dropdownStore.closeAllDropdowns();
};

watch(
  () => route.query.numberType,
  () => {
    handleRouteChange();
  }
);

const handleRouteChange = async () => {
  if (route.query.numberType === "plate") {
    plateStore.handleNumberTypeChange(true);
    // plateStore.fetchPlate();
  } else {
    plateStore.handleNumberTypeChange(false);
    // plateStore.fetchPhone();
  }
};

onMounted(() => {
  handleRouteChange();
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
  background-color: #fff !important;
}

.dropdown1 {
  z-index: 3;
}

.dropdown2 {
  z-index: 2;
}
</style>
