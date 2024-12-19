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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <ViewedPlates />
        </div>

        <div>
            <!-- Добавляем пагинацию -->
            <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="currentPage"
                @update:page="onPageChange" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import CardPlate from '../components/CardPlate/CardPlate.vue';
import SimilarNumber from '../components/SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue';
import Pagination from '../components/Pagination/Pagination.vue';
import Card from '../components/Card.vue';
import ViewedPlates from '~/components/ViewedPlates.vue';

export default {
    components: {
        CardPlate,
        SimilarNumber,
        SimilarNumberLowPrice,
        Card,
    },
    setup() {
        const totalPages = ref(10); // Общее количество страниц
        const currentPage = ref(1);  // Текущая страница

        const onPageChange = (page) => {
            currentPage.value = page;
            console.log('Текущая страница:', currentPage.value);
        };

        return {
            totalPages,
            currentPage,
            onPageChange,
        };
    },
};
</script>
