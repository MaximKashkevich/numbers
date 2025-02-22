<template>
  <div
    class="w-[100%] rounded-[20px] p-[40px_20px_30px_20px] border border-[#bfbfbf] overflow-hidden"
  >
    <div v-if="type === 'plate'">
      <img :src="photo" alt="number" />
    </div>
    <div v-else class="mb-[30px]"><CardPhoneNumber :phone="phone" /></div>
    <div class="flex justify-between">
      <h4 class="tw-text-middle font-medium" v-html="price"></h4>
      <ButtonLike :id="id" :type="type" />
    </div>
    <h4 class="text-[#b0b0b0] text-[16px]">Emirate: {{ emirate }}</h4>
    <div class="flex">
      <h4 class="text-[#b0b0b0] text-[16px] mr-[30px]">{{ datePosted }}</h4>
      <h4 class="text-[#b0b0b0] text-[16px]">{{ views }}</h4>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardPhoneNumber from './CardPhoneNumber.vue';
import type { listedNumber } from '~/stores/listedNumbersStore';
const props = defineProps<listedNumber>();
</script>
