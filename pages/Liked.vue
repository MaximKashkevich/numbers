<template>
    <div class="px-4 sm:px-8 lg:px-[60px]">
        <nav class="mb-6 mt-6">
            <ul class="flex gap-2">
                <li>
                    <NuxtLink href="/BuyNumbers" class="text-[#005DCA] cursor-pointer transition">Home /</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="#" class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition">You used to watch</NuxtLink>
                </li>
            </ul>
        </nav>

        <h1 class="text-[32px] sm:text-[40px] lg:text-[50px] font-medium leading-[40px] sm:leading-[50px] text-left">
            You used to watch
        </h1>

        <div class="flex flex-wrap gap-4 mt-4 sm:gap-6 lg:gap-8 mt-[70px]">
            <div>
                <div class="card-container">
                    <div v-for="(card, index) in cards" :key="card.id" class="card">
                        <component :is="card.type" :liked="isLiked(card)" @update:liked="(val) => handleLike(card, val)" />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="currentPage" @update:page="onPageChange" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLikedStore } from '../stores/likedCards'; 
import CardPlate from '../components/CardPlate/CardPlate.vue';
import SimilarNumber from '../components/SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue';
import Pagination from '../components/Pagination/Pagination.vue';
import Card from '../components/Card.vue';

// Определение компонентов
const components = {
    CardPlate,
    SimilarNumber,
    SimilarNumberLowPrice,
    Card
};

// Стейт и методы
const totalPages = ref(10);
const currentPage = ref(1);

const cards = ref([
    { id: 1, type: 'CardPlate' },
    { id: 2, type: 'SimilarNumber' },
    { id: 3, type: 'SimilarNumberLowPrice' },
    { id: 4, type: 'Card' }
]);

const likedStore = useLikedStore();

const onPageChange = (page) => {
    currentPage.value = page;
    console.log('Текущая страница:', currentPage.value);
};

const isLiked = (card) => {
    return likedStore.likedCards.some(likedCard => likedCard.id === card.id);
};

const handleLike = (card, liked) => {
    if (liked) {
        likedStore.addCard(card); // Добавляем карточку в магазин
    } else {
        likedStore.likedCards = likedStore.likedCards.filter(likedCard => likedCard.id !== card.id); // Убираем карточку из магазина
    }
};
</script>

<style scoped>
/* Ваши стили остаются без изменений */
</style>
