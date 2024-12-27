<template>
  <NuxtLink
    :to="
      props.type === 'plate'
        ? `/number/plate/${props.id}`
        : `/number/phone/${props.id}`
    "
  >
    <div
      class="transition flex-1 p-[5px] pb-[20px] h-[100%] rounded-[20px] bg-white border-[3px] border-[#bfbfbf]"
      :class="{ featured: props.isFeatured }"
    >
      <img
        v-if="props.photo"
        :src="props.photo"
        class="mt-[40px] px-[20px]"
        alt="Image"
      />
      <div
        v-if="!props.photo"
        class="w-[90%] mx-[auto] mt-[30px] flex gap-[15px] items-center"
      >
        <img
          class="phone__img w-[60px] h-[60px]"
          src="/public/assets/etisalat.png"
          alt="etisalat logo"
        />
        <h1 class="phone__text text-[#70a136]">{{ props.phone }}</h1>
      </div>
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1
            class="flex items-center text-[19px] font-bold leading-[24px]"
            v-html="props.price"
          ></h1>
        </div>
        <ButtonLike :id="props.id" :type="props.type" />
      </div>
      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            Emirate:
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
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
import type { IFavorites } from "~/stores/favoritesStore";

const props = defineProps<
  {
    isFeaturedClass?: boolean;
    photo?: string;
    phone?: string;
  } & IFavorites
>();
</script>

<style>
.featured {
  border-color: #ff9c00;
}

.phone__text {
  font-size: clamp(22px, 3vw, 55px);
}

@media (max-width: 1023px) {
  .phone__text {
    font-size: 40px;
  }
}

@media (max-width: 500px) {
  .img-like {
    margin-left: -70px;
  }
  .phone__text {
    font-size: 24px;
  }
  .phone__img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 400px) {
  .mini-img-like {
    margin-left: -120px;
  }
}
</style>
