<template>
  <div>
    <h2 class="leading-[42px] text-[35px] font-medium mb-[30px]">
      My {{ numberType ? 'plate' : 'phone' }} numbers
    </h2>
    <section v-if="listedNumbersStore.listedPlates.length < 1" class="py-[70px]">
      <nav class="border-[3px] bg-[#FFFFFF] rounded-[20px] p-[16px] md:p-[50px] transition">
        <p class="text-[clamp(12px,7vw,35px)] mt-[20px] font-medium text-dash">
          You don’t have any {{ numberType ? 'plate' : 'phone' }} number listings yet :(
        </p>
        <ButtonBlue
          @click="() => {}"
          class="w-[100%] h-fit lg:w-[382px] justify-center flex items-center mx-auto mt-[50px]"
        >
          <h4 class="text-[clamp(7px,4vw,22px)]">
            Sell the {{ numberType ? 'plate' : 'phone' }} number
          </h4>
        </ButtonBlue>
      </nav>
    </section>
    <section v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6 w-full">
        <CardPlateListed
          v-if="numberType"
          v-for="number in listedNumbersStore.listedPlates"
          v-bind="number"
        />
        <CardPlateListed v-else v-for="number in listedNumbersStore.listedPhones" v-bind="number" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CardPlateListed from '../CardPlate/CardPlateListed.vue';
import { useListedNumbersStore } from '~/stores/listedNumbersStore';
const listedNumbersStore = useListedNumbersStore();

const props = defineProps({
  numberType: {
    // if true, type = plate
    type: Boolean,
    default: true,
  },
});
</script>
