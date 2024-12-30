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
      <div @click="toggleEmirateDropdown" class="relative option">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Emirate:
        </label>
        <button
          class="text-[16px] w-[100%] leading-[19.2px] text-left bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
          :class="{ select: true, select__open: isEmirateDropdownOpen }"
        >
          {{ selectedEmirate || "Dubai" }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': isEmirateDropdownOpen }"
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
          v-show="isEmirateDropdownOpen"
          class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2 dropdown1"
          :class="{ select: true, dropdown__open: isEmirateDropdownOpen }"
        >
          <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
            <li
              v-for="region in emirateList"
              :key="region.id"
              @click="handleEmirateChange(region.name)"
              class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
            >
              {{ region.name }}
            </li>
          </div>
        </ul>
      </div>

      <!-- code select -->
      <div @click="toggleCodeDropdown" class="relative option">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Code:
        </label>
        <button
          class="text-[16px] w-[100%] leading-[19.2px] text-left bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
          :class="{ select: true, select__open: isCodeDropdownOpen }"
        >
          {{ selectedCode || "AA" }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': isCodeDropdownOpen }"
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
          v-show="isCodeDropdownOpen"
          class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2 dropdown1"
          :class="{ select: true, dropdown__open: isCodeDropdownOpen }"
        >
          <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
            <li
              v-for="code in codeList"
              :key="code.id"
              @click="handleCodeChange(code.name)"
              class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
            >
              {{ code.name }}
            </li>
          </div>
        </ul>
      </div>
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
          v-model="rawPrice"
          @input="handlePriceInput"
        />

        <!-- checkbox price -->
        <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="checkHidePrice" />
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
      <div @click="toggleDesignDropdown" class="relative option">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="emirate"
        >
          Design:
        </label>
        <button
          class="text-[16px] w-[100%] leading-[19.2px] text-left bg-[#FAFAFA] border border-[#BFBFBF] py-[15px] px-[20px] flex items-center justify-between"
          :class="{ select: true, select__open: isDesignDropdownOpen }"
        >
          {{ selectedDesign || "Default" }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': isEmirateDropdownOpen }"
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
          v-show="isDesignDropdownOpen"
          class="absolute w-full bg-white border border-[#BFBFBF] shadow-lg overflow-hidden pb-2 dropdown1"
          :class="{ select: true, dropdown__open: isDesignDropdownOpen }"
        >
          <div class="max-h-60 ml-5 mr-1 overflow-y-scroll">
            <li
              class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
              @click="handleDesignChange('Default')"
            >
              Default
            </li>
            <li
              class="py-2 hover:bg-gray-200 cursor-pointer font-medium select__option cursor-pointer"
              @click="handleDesignChange('Alternative')"
            >
              Alternative
            </li>
          </div>
        </ul>
      </div>
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
          v-model="rawDiscountPrice"
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
            v-model="selectedNumber"
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
            v-model="selectedHiddenNumber"
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
            {{ selectedHiddenNumber || selectedNumber }}
          </h3>
        </div>
      </div>
    </div>
    <ButtonBlue
      v-if="!acceptPayment"
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
const listingTypePlate = ref(true);

// dropdowns
const isEmirateDropdownOpen = ref(false);
const isCodeDropdownOpen = ref(false);
const isDesignDropdownOpen = ref(false);

//selected values
const selectedEmirate = ref("");
const selectedCode = ref("");
const selectedDesign = ref("");
const selectedNumber = ref("");
const selectedHiddenNumber = ref("");

// fetching data lists
const emirateList = ref("");
const codeList = ref("");

// formatting
const rawPrice = ref("");
const rawDiscountPrice = ref("");

// checkboxes

const checkHidePrice = ref(false);
const checkAddDiscount = ref(false);
const checkHideNumber = ref(false);

// "add listing" type
const toggleListingType = () => {
  listingTypePlate.value = !listingTypePlate.value;
};

// emirate
const handleEmirateChange = (emirate) => {
  selectedEmirate.value = emirate;
};

const toggleEmirateDropdown = () => {
  isEmirateDropdownOpen.value = !isEmirateDropdownOpen.value;

  isCodeDropdownOpen.value = false;
  isDesignDropdownOpen.value = false;
};

// code
const handleCodeChange = (code) => {
  selectedCode.value = code;
};

const toggleCodeDropdown = () => {
  isCodeDropdownOpen.value = !isCodeDropdownOpen.value;

  isEmirateDropdownOpen.value = false;
  isDesignDropdownOpen.value = false;
};

// design

const handleDesignChange = (design) => {
  selectedDesign.value = design;
};

const toggleDesignDropdown = () => {
  isDesignDropdownOpen.value = !isDesignDropdownOpen.value;
  isEmirateDropdownOpen.value = false;
  isCodeDropdownOpen.value = false;
};

// shared
const closeDropdowns = () => {
  isCodeDropdownOpen.value = false;
  isEmirateDropdownOpen.value = false;
  isDesignDropdownOpen.value = false;
};

const { data: regions } = useAsyncData("regions", () =>
  $fetch("https://api.dev.numbers.ae/v1/account/regions/list")
);

const { data: codes } = useAsyncData("codes", () =>
  $fetch("https://api.dev.numbers.ae/v1/account/plate/codes/list")
);

if (regions.value) {
  emirateList.value = regions.value.result.items;
}

if (codes.value) {
  codeList.value = codes.value.result.items;
}

// price input

const handlePriceInput = () => {
  const numericValue = rawPrice.value.replace(/\D/g, "");

  rawPrice.value = formatPrice(numericValue);
};

const handleDiscountPriceInput = () => {
  const numericValue = rawDiscountPrice.value.replace(/\D/g, "");

  rawDiscountPrice.value = formatPrice(numericValue);
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
  selectedNumber.value = selectedNumber.value.replace(/\D/g, "");
};

const handleHiddenNumberInput = () => {
  const allow = new Set(["X", "x", "Х", "х"]); // Разрешенные заменители
  let xCount = 0; // Счетчик символов X

  // Проверяем каждый символ
  selectedHiddenNumber.value = selectedHiddenNumber.value
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
      if (char === selectedNumber.value[index]) {
        return char;
      }
      // Удаляем некорректные символы
      return "";
    })
    .join("");

  // Ограничиваем длину до длины первого инпута
  selectedHiddenNumber.value = selectedHiddenNumber.value.slice(
    0,
    selectedNumber.value.length
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
