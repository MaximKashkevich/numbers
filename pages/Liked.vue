<template>
    <div class="px-4 sm:px-8 lg:px-[60px]">
        <nav class="mb-6 mt-6">
            <ul class="flex gap-2">
                <li>
                    <NuxtLink href="/BuyNumbers" class="text-[#005DCA] cursor-pointer transition">Home /</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="#" class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition">You used to
                        watch</NuxtLink>
                </li>
            </ul>
        </nav>

        <h1 class="text-[32px] sm:text-[40px] lg:text-[50px] font-medium leading-[40px] sm:leading-[50px] text-left">
            You used to watch
        </h1>

        <LikedPlateCard v-for="item in favorites.favorites" :key="item.id" />

        <div>
            <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="currentPage"
                @update:page="onPageChange" />
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Pagination from '../components/Pagination/Pagination.vue';
import { useFavoritesStore } from '~/stores/favoritesStore';
import LikedPlateCard from './LikedPlateCard.vue';

const favorites = useFavoritesStore()

console.log(favorites.favorites)

// Стейт и методы
const totalPages = ref(10);
const currentPage = ref(1);


const onPageChange = (page) => {
    currentPage.value = page;
    console.log('Текущая страница:', currentPage.value);
};
;

</script>
