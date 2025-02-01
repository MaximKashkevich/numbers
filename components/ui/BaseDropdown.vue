<template>
  <div @click="toggleDropdown" class="relative option w-[100%]">
    <label
      class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#b3b3b3]"
    >
      {{ label }}
    </label>
    <button
      class="text-[16px] w-[100%] leading-[19.2px] text-left bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
      :class="{ select: true, select__open: isDropdownOpen }"
    >
      {{ modelValue }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
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
      v-show="isDropdownOpen"
      class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2 dropdown1"
      :class="{ select: true, dropdown__open: isDropdownOpen }"
    >
      <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
        <li
          v-for="option in optionList"
          :key="option.id"
          @click="handleOptionChange(option.name || option.code)"
          class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
        >
          {{ option.name || option.code }}
        </li>
      </div>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDropdownStore } from "~/stores/dropdownStore";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  optionList: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const isDropdownOpen = ref(false);

const dropdownStore = useDropdownStore();

// Уникальный ID для текущего дропдауна
const dropdownId = Math.random().toString(36).slice(2, 11);

const toggleDropdown = () => {
  if (!isDropdownOpen.value) {
    // Закрываем все остальные дропдауны перед открытием
    dropdownStore.closeAllDropdowns();
    // Открываем текущий дропдаун
    dropdownStore.registerDropdown(dropdownId);
  } else {
    // Закрываем текущий дропдаун
    dropdownStore.unregisterDropdown(dropdownId);
  }

  // Переключаем состояние
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Слушаем изменения в списке открытых дропдаунов
watch(
  () => dropdownStore.openDropdowns,
  (newOpenDropdowns) => {
    // Закрываем дропдаун, если он был удалён из глобального состояния
    if (!newOpenDropdowns.includes(dropdownId)) {
      isDropdownOpen.value = false;
    }
  }
);

const handleOptionChange = (optionName) => {
  emit("update:modelValue", optionName);
  isDropdownOpen.value = true;
  // router.push({
  //   query: {
  //     ...route.query, // сохраняем существующие параметры
  //     plateType: newPlateType, // изменяем или добавляем параметр plateType
  //   },
  // });
};
</script>
