<template>
  <NuxtLink>
    <div
      class="hover:shadow-2xl hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00]"
    >
      <img
        :src="favorites.favorites.photo"
        class="mt-[40px] px-[20px]"
        alt="Image"
      />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1
            class="flex items-center text-[19px] font-bold leading-[24px]"
            v-html="favorites.favorites.price"
          ></h1>
        </div>
        <div>
          <img
            @click="toggleLike"
            width="24px"
            :src="likes ? '/assets/likeTrue.png' : '/assets/like.svg'"
            alt="favorite"
          />
        </div>
      </div>
      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            Emirate:
          </p>
          <p class="ext-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ favorites.favorites.emirate }}
          </p>
        </div>
        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            Posted Today {{ favorites.favorites.datePosted }}
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ favorites.favorites.views }} Views
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { useFavoritesStore } from "~/stores/favoritesStore";

const favorites = useFavoritesStore();
</script>
