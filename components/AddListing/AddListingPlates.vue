<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mb-[30px]">
    <!-- emirate select -->
    <div>
      <BaseDropdown
        label="Emirate:"
        :option-list="dropdownStore.emirateList"
        v-model="listingParams.emirate"
      />
      <label class="flex items-center gap-[10px] w-fit mt-[10px]">
        <div class="checkbox">
          <input type="checkbox" v-model="listingParams.hide_series" />
          <img class="checkmark" src="/assets/img/icons/check.svg" alt="hide price" />
          <div class="checkmark__off"></div>
        </div>
        <p>Hide series</p>
      </label>
    </div>

    <BaseDropdown
      label="Code:"
      :option-list="dropdownStore.plateCodeList"
      v-model="listingParams.code"
    />
    <!-- code select -->
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between">
    <!-- price input -->
    <div class="option option__input">
      <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="emirate">
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
          <img class="checkmark" src="/assets/img/icons/check.svg" alt="hide price" />
          <div class="checkmark__off"></div>
        </div>
        <p class="top-[10%]">Hide price</p>
      </label>

      <!-- checkbox discount -->
      <label class="flex items-center gap-[10px] w-fit mt-[10px]">
        <div class="checkbox">
          <input type="checkbox" v-model="checkAddDiscount" />
          <img class="checkmark" src="/assets/img/icons/check.svg" alt="hide price" />
          <div class="checkmark__off"></div>
        </div>
        <p>Add a discount</p>
      </label>
    </div>
    <div class="option">
      <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="emirate">
        Number:
      </label>
      <input
        class="input_number pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
        type="text"
        v-model="listingParams.number"
        @input="handleNumberInput"
        maxlength="5"
      />
      <!-- <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="checkHideNumber" />
            <img class="checkmark" src="/assets/img/icons/check.svg" alt="hide price" />
            <div class="checkmark__off"></div>
          </div>
          <p>Hide number</p>
        </label> -->
    </div>
    <!-- design select -->
    <!-- <BaseDropdown label="Design" :option-list="designList" v-model="listingParams.design" /> -->
  </div>

  <!-- price with discount -->

  <!-- number/hide number and preview -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mt-[20px]">
    <div>
      <div class="option option__input input_discount" v-show="checkAddDiscount">
        <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="emirate">
          Price with discount:
        </label>
        <input
          class="pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px]"
          type="text"
          v-model="listingParams.discount"
          @input="handleDiscountPriceInput"
        />
      </div>
    </div>

    <div>
      <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="emirate">
        Preview:
      </label>
      <div
        class="relative h-[235px] flex-grow border-[1px] border-[#bfbfbf] rounded-[10px] bg-[#fff]"
      >
        <img
          v-if="previewImg"
          class="preview__number max-w-[95%]"
          :src="previewImg"
          alt="preview"
        />
      </div>
    </div>
    <ButtonBlue @click="handleAddPlate" class="w-fit">Add Plate Number</ButtonBlue>
  </div>
</template>
<script setup>
import { onMounted, watch } from 'vue';
import BaseDropdown from '../ui/BaseDropdown.vue';
import { useDropdownStore } from '~/stores/dropdownStore';
import { useAuthStore } from '~/stores/auth';
import axios from 'axios';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
const authStore = useAuthStore();
const authToken = authStore.token;
const dropdownStore = useDropdownStore();
dropdownStore.fetchDropdownData();
const previewImg = ref('');
const checkAddDiscount = ref(false);

const listingParams = ref({
  code: 'A',
  emirate: 'Dubai',
  number: '',
  price: '',
  hide_series: false,
  price_hide: false,
  description: '',
  discount: '',
});

// price input

const handlePriceInput = () => {
  const numericValue = listingParams.value.price.replace(/\D/g, '');

  listingParams.value.price = formatPrice(numericValue);
};

const handleDiscountPriceInput = () => {
  const numericValue = listingParams.value.discount.replace(/\D/g, '');

  listingParams.value.discount = formatPrice(numericValue);
  console.log(listingParams.value.discount, 'discount');
  console.log(typeof listingParams.value.discount);
};

const formatPrice = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    useGrouping: true,
  });

  return value ? formatter.format(Number(value)).replace(/,/g, ' ') : '';
};

// number input
const handleNumberInput = () => {
  listingParams.value.number = listingParams.value.number.replace(/\D/g, '');
};

// превью
const handleHiddenNumberInput = () => {
  const allow = new Set(['X', 'x']); // Разрешенные заменители
  let xCount = 0; // Счетчик символов X

  // Проверяем каждый символ
  listingParams.value.hiddenNumber = listingParams.value.hiddenNumber
    .split('')
    .map((char, index) => {
      if (allow.has(char)) {
        // Если символ X или его вариации, увеличиваем счетчик
        if (xCount === 0) {
          xCount++;
          return char;
        } else {
          // Если символ X уже был, удаляем его
          return '';
        }
      }
      // Если символ совпадает с символом первого инпута
      if (char === listingParams.value.number[index]) {
        return char;
      }
      // Удаляем некорректные символы
      return '';
    })
    .join('');

  // Ограничиваем длину до длины первого инпута
  listingParams.value.number = listingParams.value.number.slice(
    0,
    listingParams.value.number.length
  );
};

const getPlatePreview = async () => {
  try {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (region) => region.name === listingParams.value.emirate
    );
    const selectedCode = toRaw(dropdownStore.plateCodeList).find(
      (code) => code.name === listingParams.value.code
    );
    const previewResponse = await axios.post(
      `https://api.dev.numbers.ae/v1/account/plate/generate`,
      {
        code: selectedCode.id,
        number: listingParams.value.number === '' ? 99999 : listingParams.value.number,
        region: selectedEmirate.id,
        version: 0,
        // hide_series: listingParams.hide_series === true ? 0 : 1,
        hide_series: listingParams.value.hide_series === true ? 1 : 0,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    previewImg.value = `https://api.dev.numbers.ae${previewResponse.data.default}`;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await dropdownStore.fetchPlateCodeDropdownData(1);
  getPlatePreview();
});

watch(
  () => listingParams.value,
  () => {
    getPlatePreview();
  },
  { deep: true }
);

watch(
  () => listingParams.value.emirate,
  async (newEmirate) => {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (item) => item.name === newEmirate
    );
    await dropdownStore.fetchPlateCodeDropdownData(selectedEmirate.id);

    // После получения данных устанавливаем значение
    // listingParams.value.code = dropdownStore.toggleDefaultCode;
    listingParams.value.code = dropdownStore.defaultPlateCode;
  }
);

const handleAddPlate = async () => {
  try {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (region) => region.name === listingParams.value.emirate
    );
    const selectedCode = toRaw(dropdownStore.plateCodeList).find(
      (code) => code.name === listingParams.value.code
    );
    const formattedPrice = listingParams.value.price.replace(/\s/g, '');
    const formattedDiscount = Number(listingParams.value.discount.replace(/\s/g, ''));
    //////////////////
    console.log(
      {
        code: selectedCode.id,
        emirate: String(selectedEmirate.id),
        number: listingParams.value.number,
        price: formattedPrice,
        series_hide: listingParams.value.hide_series,
        price_hide: listingParams.value.price_hide,
        description: '',
        discount: formattedDiscount,
      },
      'pre add listing'
    );
    /////////////////
    const addListingResponse = await axios.post(
      `https://api.dev.numbers.ae/v1/account/plate/add`,
      {
        code: selectedCode.id,
        emirate: String(selectedEmirate.id),
        number: listingParams.value.number,
        price: formattedPrice,
        series_hide: listingParams.value.hide_series,
        price_hide: listingParams.value.price_hide,
        description: '',
        discount: formattedDiscount,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(addListingResponse);
  } catch (error) {
    console.error(error);
  }
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
