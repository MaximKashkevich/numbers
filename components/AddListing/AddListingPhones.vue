<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between mb-[50px]">
    <BaseDropdown
      label="Operator:"
      :option-list="dropdownStore.operatorList"
      v-model="listingParams.operator"
    />
    <BaseDropdown
      label="Code:"
      :option-list="dropdownStore.operatorCodeList"
      v-model="listingParams.code"
    />
    <!-- code select -->
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] flex-wrap justify-between">
    <!-- price input -->
    <div class="flex flex-col justify-between">
      <div class="option option__input mb-[20px]">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] flex gap-4 mb-[6px]"
          for="price"
        >
          <h4>Price:</h4>
        </label>
        <input
          class="pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px] cursor-text"
          :class="{ 'border-red-500': priceErrors !== '' }"
          type="text"
          v-model="listingParams.price"
          @input="handlePriceInput"
        />
        <p class="text-red-500" v-show="priceErrors.price !== ''">{{ priceErrors }}</p>
        <!-- checkbox price -->
        <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="listingParams.price_hide" />
            <img class="checkmark" src="/assets/img/icons/check.svg" alt="hide price" />
            <div class="checkmark__off"></div>
          </div>
          <p class="top-[10%] user-select-none">Hide price</p>
        </label>

        <!-- checkbox discount -->
        <label class="flex items-center gap-[10px] w-fit mt-[10px]">
          <div class="checkbox">
            <input type="checkbox" v-model="checkAddDiscount" />
            <img class="checkmark" src="/assets/img/icons/check.svg" alt="add a discount" />
            <div class="checkmark__off"></div>
          </div>
          <p class="user-select-none">Add a discount</p>
        </label>
      </div>
      <div class="option option__input input_discount" :class="{ 'opacity-40': !checkAddDiscount }">
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px]"
          for="price with discount"
        >
          Price with discount:
        </label>
        <input
          class="pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px] cursor-text"
          :class="{ 'border-red-500': discountErrors, 'cursor-default': !checkAddDiscount }"
          type="text"
          v-model="listingParams.discount"
          @input="handleDiscountPriceInput"
          :disabled="!checkAddDiscount"
        />
        <p class="text-red-500" v-show="discountErrors !== ''">{{ discountErrors }}</p>
      </div>
    </div>
    <div class="h-fit">
      <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="preview">
        Preview:
      </label>
      <div
        class="relative h-[235px] flex-grow border-[1px] border-[#bfbfbf] rounded-[10px] bg-[#fff]"
      >
        <PhoneListingPreview :number="formattedPhone" :operator="listingParams.operator" />
      </div>
    </div>
  </div>
  <div class="gap-[20px] mt-[20px] block md:flex">
    <div class="option mb-[20px]">
      <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="plate number">
        Number:
      </label>
      <div class="relative flex items center">
        <div class="w-full">
          <input
            class="pl-[85px] input_number pl-5 pr-[70px] w-[100%] h-[51.2px] rounded-[100px] border-[1px] border-[#bfbfbf] font-roboto text-[16px] leading-[19.2px] cursor-text"
            :class="{ 'border-red-500': numberErrors }"
            type="text"
            v-model="listingParams.number"
            @input="handleNumberInput"
          />
          <h3 class="absolute left-[14px] top-[13.5px] text-[16px]">
            +971 {{ listingParams.code }}
          </h3>
        </div>
        {{ numberErrors.number }}
      </div>
      <p class="text-red-500" v-show="numberErrors">{{ numberErrors }}</p>
      <h4 class="text-[12px] text-[#bfbfbf] font-light mt-[10px]">Up to 7 digits</h4>
    </div>
  </div>
  <div class="mb-[30px]">
    <label class="font-roboto text-[16px] font-normal leading-[19.2px]" for="description">
      Description:
    </label>
    <textarea
      name="message"
      v-model="listingParams.description"
      class="h-[150px] w-full max-h-[150px] border-[#bfbfbf] border-[1px] pl-[15px] pr-[12px] pt-[12px] placeholder:text-gray-400 placeholder:opacity-80 overflow-hidden resize-none rounded-[20px]"
      placeholder="Write something important that the buyer needs to know"
    ></textarea>
  </div>
  <ButtonBlue @click="formatListing" class="w-fit">Add Phone Number</ButtonBlue>
</template>
<script setup>
import { computed } from 'vue';
import BaseDropdown from '../ui/BaseDropdown.vue';
import { useDropdownStore } from '~/stores/dropdownStore';
import PhoneListingPreview from './PhoneListingPreview.vue';
import axios from 'axios';
import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore();
const dropdownStore = useDropdownStore();
dropdownStore.fetchDropdownData();

const listingParams = ref({
  code: '050',
  emirate: '',
  operator: 'Du',
  number: '',
  body: '',
  price: '',
  price_hide: false,
  description: '',
  discount: '',
});

const formattedPhone = computed(() => {
  return `${listingParams.value.code} ${listingParams.value.number}`;
});

const priceErrors = ref('');
const discountErrors = ref('');
const numberErrors = ref('');

// checkboxes
const checkAddDiscount = ref(false);

// price input
const handlePriceInput = () => {
  const numericValue = listingParams.value.price.replace(/\D/g, '');

  listingParams.value.price = formatPrice(numericValue);
  handlePriceErrors();
};

const handleDiscountPriceInput = () => {
  const numericValue = listingParams.value.discount.replace(/\D/g, '');

  listingParams.value.discount = formatPrice(numericValue);
  handleDiscountErrors();
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
  let value = listingParams.value.number.replace(/\D/g, ''); // Оставляем только цифры

  if (value.length > 7) value = value.slice(0, 7); // Ограничиваем 9 цифрами

  if (value.length <= 3) {
    listingParams.value.number = value;
  } else if (value.length <= 6) {
    listingParams.value.number = `${value.slice(0, 3)} ${value.slice(3)}`;
  } else {
    listingParams.value.number = `${value.slice(0, 3)} ${value.slice(3, 7)}`;
  }

  if (value.length === 7) {
    numberErrors.value = '';
  }
};

// обработка ошибок инпута прайса
const handlePriceErrors = () => {
  const formattedPrice = listingParams.value.price.replace(/\s/g, '');
  if (formattedPrice.length < 1) {
    priceErrors.value = 'Price is required';
  } else if (formattedPrice.length > 9) {
    priceErrors.value = 'The price is too high';
  } else {
    priceErrors.value = '';
  }
};

// обработка ошибок инпута скидки
const handleDiscountErrors = () => {
  const formattedDiscount = listingParams.value.discount.replace(/\s/g, '');
  const formattedPrice = listingParams.value.price.replace(/\s/g, '');
  if (checkAddDiscount.value) {
    if (Number(formattedDiscount) >= Number(formattedPrice)) {
      discountErrors.value = 'The discount must be lower than the price';
    } else {
      discountErrors.value = '';
    }
  }
};

const handleNumberErrors = () => {
  const formattedNumber = listingParams.value.number.replace(/\s/g, '');
  if (formattedNumber.length !== 7) {
    numberErrors.value = 'Provide the full number';
  } else {
    numberErrors.value = '';
  }
};

const formatListing = () => {
  handlePriceErrors();
  handleDiscountErrors();
  handleNumberErrors();
  if (!priceErrors.value && !discountErrors.value && !numberErrors.value) {
    handleAddPlate();
    console.log('handle add phone');
  }
};

const handleAddPlate = async () => {
  try {
    const selectedEmirate = toRaw(dropdownStore.emirateList).find(
      (region) => region.name === listingParams.value.emirate
    );
    const selectedOperator = toRaw(dropdownStore.operatorList).find(
      (operator) => operator.name === listingParams.value.operator
    );

    const formattedNumber = listingParams.value.number.replace(/\D/g, '');
    const formattedPrice = listingParams.value.price.replace(/\s/g, '');
    const formattedDiscount = Number(listingParams.value.discount.replace(/\s/g, ''));

    const authToken = authStore.token;
    console.log(
      {
        code: listingParams.value.code,
        // emirate: String(selectedEmirate.id) | '1',
        operator: selectedOperator.id,
        number: formattedNumber,
        body: 'Description...',
        price: formattedPrice,
        price_hide: listingParams.value.price_hide,
        description: listingParams.value.description,
        discount: formattedDiscount,
      },
      'request preview'
    );

    const addListingResponse = await axios.post(
      `https://api.dev.numbers.ae/v1/account/mobile/add`,
      {
        code: listingParams.value.code,
        // emirate: String(selectedEmirate.id) | '1',
        operator: selectedOperator.id,
        number: formattedNumber,
        body: 'Description...',
        price: formattedPrice,
        price_hide: listingParams.value.price_hide,
        description: listingParams.value.description,
        discount: formattedDiscount,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(addListingResponse, 'ответ на add listing');
    if (addListingResponse.status === 200) {
      alert('Plate successfully added');
    } else {
      alert('Could not add plate');
    }
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

.option__input::after {
  content: 'AED';
  display: block;
  position: absolute;
  right: 30px;
  top: 38px;
}

/* user select */
.user-select-none {
  user-select: none;
}
</style>
