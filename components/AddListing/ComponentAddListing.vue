<template>
  <div class="w-[100%] h-[100%]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap mb-[70px]">
      <!-- buttons -->
      <button
        :class="[
          'option button__filter w-[130px] h-[51.2px] rounded-[100px] border-[3px] font-roboto text-[20px] font-bold leading-[19.2px] flex justify-center items-center text-center',
          listingTypePlate
            ? 'border-[#000] border-[3px] text-[#000]'
            : 'border-[#bfbfbf] text-[#bfbfbf]',
        ]"
        @click="toggleListingType(), dropdownStore.closeAllDropdowns()"
      >
        PLATE NUMBER
      </button>
      <button
        :class="[
          'option button__filter w-[130px] h-[51.2px] rounded-[100px] border-[3px] font-roboto text-[20px] font-bold leading-[19.2px] flex justify-center items-center text-center',
          !listingTypePlate
            ? 'border-[#000] border-[3px] text-[#000]'
            : 'border-[#bfbfbf] text-[#bfbfbf]',
        ]"
        @click="toggleListingType(), dropdownStore.closeAllDropdowns()"
      >
        PHONE NUMBER
      </button>
    </div>
    <AddListingPlates v-if="listingTypePlate" />
    <AddListingPhones v-if="!listingTypePlate" />
  </div>
</template>
<script setup>
import { useDropdownStore } from '~/stores/dropdownStore';
import AddListingPlates from './AddListingPlates.vue';
import AddListingPhones from './AddListingPhones.vue';
const dropdownStore = useDropdownStore();
dropdownStore.fetchDropdownData();
const listingTypePlate = ref(true);

// "add listing" type
const toggleListingType = () => {
  listingTypePlate.value = !listingTypePlate.value;
};
</script>
<style scoped>
.option {
  width: 100%;
  transition: none;
  position: relative;
}

.button__filter:hover {
  color: #000;
}

.option__input::after {
  content: 'AED';
  display: block;
  position: absolute;
  right: 30px;
  top: 26%;
}

.input_discount::after {
  top: 49%;
}

/* checkbox */
.checkbox {
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  justify-content: center;
  user-select: none;
}

.checkbox input {
  display: none;
}

.checkbox .checkmark {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.checkbox input:checked + .checkmark {
  opacity: 1;
}

.checkbox .checkmark {
  opacity: 0;
}

.checkmark__off {
  border: 1px solid #bfbfbf;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  position: absolute;
  z-index: -1;
}

/* preview img */

.preview__number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.preview__number.symbols {
  transform: translate(-35%, -47%);
  font-family: 'LicensePlate', sans-serif;
  font-size: 55px;
}
</style>
