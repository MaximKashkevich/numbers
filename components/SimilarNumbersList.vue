<template>
  <div>
    <h3
      class="text-[16px] w-full font-normal leading-[19.2px] text-left text-[#BFBFBF] mt-[100px]"
    >
      Similar numbers:
    </h3>
    <div
      class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px]"
    >
      <SimilarNumber />
      <SimilarNumber />
      <SimilarNumber />
      <SimilarNumberLowPrice />
      <SimilarNumberLowPrice />
      <SimilarNumberLowPrice />
      <SimilarNumberLowPrice />
      <SimilarNumberLowPrice />
      <SimilarNumberLowPrice />
      <SimilarNumber />
      <SimilarNumber />
    </div>
    <ButtonBlue class="w-[428px] mt-[50px] uppercase blue-button">
      View 7508 more plate numbers
    </ButtonBlue>
  </div>
</template>
<script setup lang="ts">
import SimilarNumber from "../components/SimilarNumbers/SimilarNumber.vue";
import SimilarNumberLowPrice from "../components/LowSimilarNumbers/SimilarNumberLowPrice.vue";
</script>
