<template>
  <NuxtLink>
    <div
      class="hover:shadow-2xl hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[100%] p-[5px] h-[100%] rounded-[20px] bg-white border-[3px] border-[#FF9C00]">
      <img :src="props.photo" class="mt-[40px] px-[20px]" alt="Image" />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1 class="flex items-center text-[19px] font-bold leading-[24px]" v-html="props.price"></h1>
        </div>
        <div>
          <div @click.stop.prevent="toggleLike(props)">
            <img width="24px" :src="favorites.likes[props.id] ? '/assets/likeTrue.png' : '/assets/like.svg'"
              alt="favorite">
          </div>
        </div>
      </div>
      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">{{ props.emirate }}</p>
        </div>
        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Posted Today {{ props.postedAt }}</p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">{{ props.views }} Views</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useFavoritesStore } from '~/stores/favoritesStore';
import type { IFavorites } from '~/stores/favoritesStore';

const favorites = useFavoritesStore();

const props = defineProps<IFavorites>(); // Получаем пропсы типа IFavorites

const toggleLike = (favorite: IFavorites) => {
  favorites.toggleLike(favorite);
};
</script>

<style>
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
