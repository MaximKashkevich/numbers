<template>
  <div class="px-4 sm:px-8 lg:px-[60px]">
    <nav class="mb-6 mt-6">
      <ul class="flex gap-2">
        <li>
          <NuxtLink href="/" class="text-[#005DCA] cursor-pointer transition">Home /</NuxtLink>
        </li>
        <li>
          <NuxtLink href="#" class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition"
            >Favorites</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <h1
      class="text-[32px] sm:text-[40px] lg:text-[50px] font-medium leading-[40px] sm:leading-[50px] text-left"
    >
      Favorites
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <CardPlate v-for="plate in favoriteStore.favoritesData" :key="plate.id" v-bind="plate" />
    </div>

    <!-- <div>
      <Pagination
        class="mt-[70px] px-[50px]"
        :total-pages="totalPages"
        :current-page="currentPage"
        @update:page="onPageChange"
      />
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Pagination from '../components/Pagination/Pagination.vue';
import { useFavoritesStore } from '~/stores/favoritesStore';

const favoriteStore = useFavoritesStore();

// Стейт и методы
const totalPages = ref(10);
const currentPage = ref(1);

const onPageChange = (page) => {
  currentPage.value = page;
  console.log('Текущая страница:', currentPage.value);
};

onMounted(() => {
  favoriteStore.fetchFavorites();
});
</script>
