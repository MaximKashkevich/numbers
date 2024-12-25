<template>
  <NuxtLink>
    <div
      class="flex-1 h-[300px] rounded-[20px] bg-white border-[2px] border-[#BFBFBF]"
    >
      <img :src="props.imageSrc" class="mt-[40px] px-[20px]" alt="" />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1
            class="w-[110px] h-[24px] text-[20px] font-medium leading-[24px]"
            v-html="props.price"
          ></h1>
        </div>
      </div>

      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            Emirate:
          </p>
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            {{ props.emirate }}
          </p>
        </div>

        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            Posted Today {{ props.datePosted }}
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ props.views }} Views
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { number } from "yup";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  emirate: {
    type: String,
    required: true,
  },
  datePosted: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
@media (max-width: 500px) {
  .img-like {
    margin-left: -70px;
  }
}

@media (max-width: 400px) {
  .mini-img-like {
    margin-left: -120px;
  }
}
</style>
