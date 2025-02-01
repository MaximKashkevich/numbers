<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mb-[50px]"
  >
    <BaseDropdown
      label="Operator:"
      :option-list="dropdownStore.operatorList"
      v-model="listingParams.operator"
    />
    <BaseDropdown
      label="Code:"
      :option-list="dropdownStore.operatorCodeList"
      v-model="listingParams.operatorCode"
    />
    <!-- code select -->
  </div>
</template>
<script setup>
import BaseDropdown from "../ui/BaseDropdown.vue";
import { useDropdownStore } from "~/stores/dropdownStore";
const dropdownStore = useDropdownStore();
dropdownStore.fetchDropdownData();

const listingParams = ref({
  price: "",
  price_hide: false,
  price_discount: "",
  design: "Default",
  number: "",
  hiddenNumber: "",
  operator: "Du",
  operatorCode: "050",
});

// checkboxes

const checkAddDiscount = ref(false);
const checkHideNumber = ref(false);

// price input

const handlePriceInput = () => {
  const numericValue = listingParams.value.price.replace(/\D/g, "");

  listingParams.value.price = formatPrice(numericValue);
};

const handleDiscountPriceInput = () => {
  const numericValue = listingParams.value.discountPrice.replace(/\D/g, "");

  listingParams.value.discountPrice = formatPrice(numericValue);
};

const formatPrice = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    useGrouping: true,
  });

  return value ? formatter.format(Number(value)).replace(/,/g, " ") : "";
};

// number input
const handleNumberInput = () => {
  listingParams.value.number = listingParams.value.number.replace(/\D/g, "");
};

const handleHiddenNumberInput = () => {
  const allow = new Set(["X", "x"]); // Разрешенные заменители
  let xCount = 0; // Счетчик символов X

  // Проверяем каждый символ
  listingParams.value.hiddenNumber = listingParams.value.hiddenNumber
    .split("")
    .map((char, index) => {
      if (allow.has(char)) {
        // Если символ X или его вариации, увеличиваем счетчик
        if (xCount === 0) {
          xCount++;
          return char;
        } else {
          // Если символ X уже был, удаляем его
          return "";
        }
      }
      // Если символ совпадает с символом первого инпута
      if (char === listingParams.value.number[index]) {
        return char;
      }
      // Удаляем некорректные символы
      return "";
    })
    .join("");

  // Ограничиваем длину до длины первого инпута
  listingParams.value.number = listingParams.value.number.slice(
    0,
    listingParams.value.number.length
  );
};
</script>
