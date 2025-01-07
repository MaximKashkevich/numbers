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
        @click="toggleListingType(), closeDropdowns()"
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
        @click="toggleListingType(), closeDropdowns()"
      >
        PHONE NUMBER
      </button>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mb-[50px]"
    >
      <!-- emirate select -->
      <BaseDropdown
        label="Emirate:"
        :option-list="dropdownStore.emirateList"
        v-model="listingParams.emirate"
      />
      <BaseDropdown
        label="Code:"
        :option-list="dropdownStore.plateCodeList"
        v-model="listingParams.code"
      />
      <!-- code select -->
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between"
    >
      <!-- price input -->
      <div class="option option__input">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Price:
        </label>
        <input
          class="pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
          type="text"
          v-model="listingParams.price"
          @input="handlePriceInput"
        />

        <!-- checkbox price -->
        <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="listingParams.price_hide" />
            <img
              class="checkmark"
              src="/assets/img/icons/check.svg"
              alt="hide price"
            />
            <div class="checkmark__off"></div>
          </div>
          <p class="top-[10%]">Hide price</p>
        </label>

        <!-- checkbox discount -->
        <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="checkAddDiscount" />
            <img
              class="checkmark"
              src="/assets/img/icons/check.svg"
              alt="hide price"
            />
            <div class="checkmark__off"></div>
          </div>
          <p>Add a discount</p>
        </label>
      </div>

      <!-- design select -->
      <BaseDropdown
        label="Design"
        :option-list="designList"
        v-model="listingParams.design"
      />
    </div>

    <!-- price with discount -->
    <div
      v-show="checkAddDiscount"
      class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mt-[20px]"
    >
      <div class="option option__input input_discount">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Price with discount:
        </label>
        <input
          class="pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
          type="text"
          v-model="listingParams.discountPrice"
          @input="handleDiscountPriceInput"
        />
      </div>
    </div>

    <!-- number/hide number and preview -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mt-[20px]"
    >
      <div>
        <div class="option">
          <label
            class="font-roboto text-[16px] font-normal leading-[19.2px]"
            for="emirate"
          >
            Number:
          </label>
          <input
            class="input_number pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
            type="text"
            v-model="listingParams.number"
            @input="handleNumberInput"
            maxlength="5"
          />
          <label class="flex items-center gap-[10px] w-fit mt-[10px]">
            <div class="checkbox">
              <input type="checkbox" v-model="checkHideNumber" />
              <img
                class="checkmark"
                src="/assets/img/icons/check.svg"
                alt="hide price"
              />
              <div class="checkmark__off"></div>
            </div>
            <p>Hide number</p>
          </label>
        </div>
        <div v-show="checkHideNumber" class="option">
          <input
            class="input_number mt-[20px] pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
            type="text"
            v-model="listingParams.hiddenNumber"
            @input="handleHiddenNumberInput"
            maxlength="5"
          />
          <p class="text-[#bfbfbf] text-sm">
            You can hide only one digit in the number.<br />
            Simply replace the digit with the letter X.
          </p>
        </div>
      </div>
      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Preview:
        </label>
        <div
          class="relative h-[235px] flex-grow border-[1px] border-[#bfbfbf] rounded-[10px] bg-[#fff]"
        >
          <img
            class="preview__number max-w-[95%]"
            src="/assets/img/platePreview.png"
            alt="preview"
          />
          <h3 class="preview__number symbols">
            {{ listingParams.hiddenNumber || listingParams.number }}
          </h3>
        </div>
      </div>
    </div>
    <ButtonBlue
      @click="
        () => {
          handleAccept();
        }
      "
      class="flex self-end justify-center font-bold max-w-[250px] mt-[50px]"
    >
      Add plate number
    </ButtonBlue>
  </div>
</template>
<script setup>
import BaseDropdown from "../ui/BaseDropdown.vue";
import { useDropdownStore } from "~/stores/dropdownStore";
const dropdownStore = useDropdownStore();
dropdownStore.fetchDropdownData();

const designList = ref([
  { id: 1, name: "Default" },
  { id: 2, name: "Alternative" },
  { id: 3, name: "New" },
]);
const listingTypePlate = ref(true);
const listingParams = ref({
  emirate: "Dubai",
  code: "AA",
  price: "",
  price_hide: false,
  price_discount: "",
  design: "Default",
  number: "",
  hiddenNumber: "",
});

// checkboxes

const checkAddDiscount = ref(false);
const checkHideNumber = ref(false);

// "add listing" type
const toggleListingType = () => {
  listingTypePlate.value = !listingTypePlate.value;
};

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
  content: "AED";
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
  font-family: "LicensePlate", sans-serif;
  font-size: 55px;
}
</style>
