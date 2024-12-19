<template>
    <div class="px-8 sm:px-8 ">
        <nav class="mb-6 mt-6">
            <ul class="flex gap-2 px-8">
                <li>
                    <NuxtLink href="/BuyNumbers" class="text-[#005DCA] cursor-pointer transition">Home /</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="#" class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition ">You used
                        to
                        watch</NuxtLink>
                </li>
            </ul>
        </nav>

        <h1
            class="text-[32px] px-8 sm:text-[40px] lg:text-[50px] font-medium leading-[40px] sm:leading-[50px] text-left">
            You used to watch
        </h1>

        <div class="flex flex-wrap gap-4 mt-4 sm:gap-6 lg:gap-8 mt-[70px]">
            <!-- <CardPlate />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <Card />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <Card />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <Card />
            <SimilarNumber />
            <SimilarNumberLowPrice />
            <Card />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumberLowPrice />
            <CardPlate />
            <SimilarNumberLowPrice />
            <Card /> -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <ViewedPlate v-for="plate in viewedPlates" :key="plate.id" :id="plate.id" :photo="plate.photo"
                    :emirate="plate.emirate" :price="plate.price" :postedAt="plate.postedAt" :views="plate.views" />
            </div>


        </div>

        <div>
            <!-- Добавляем пагинацию -->
            <!-- <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="currentPage"
                @update:page="onPageChange" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import CardPlate from '~/components/CardPlate/CardPlate.vue';
import SimilarNumber from '../components/SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue';
import Pagination from '../components/Pagination/Pagination.vue';
import Card from '../components/Card.vue';
import ViewedPlates from '~/components/ViewedPlates.vue';
import type { IDetails } from '~/stores/plateStore';
import axios from 'axios';

interface ViewedPlates {
    id: number;
    photo: string;
    emirate: string;
    price: number;
    isFeatured: boolean;
    type: string;
    postedAt: string;
    views: number
}

const viewedPlates = ref<ViewedPlates[]>([]);

onMounted(() => {
    const viewedPlateDataString = localStorage.getItem('viewedPlates');
    if (viewedPlateDataString) {
        try {
            const parsedData = JSON.parse(viewedPlateDataString);
            if (Array.isArray(parsedData)) {
                viewedPlates.value = parsedData;
            }
            console.log(viewedPlates.value)
        } catch (e) {
            console.error('Failed to parse viewedPlates from localStorage', e);
        }
    }
});

// export default {
//     components: {
//         CardPlate,
//         SimilarNumber,
//         SimilarNumberLowPrice,
//         Card,
//     },
//     setup() {
//         const totalPages = ref(10); // Общее количество страниц
//         const currentPage = ref(1);  // Текущая страница

//         const onPageChange = (page) => {
//             currentPage.value = page;
//             console.log('Текущая страница:', currentPage.value);
//         };

//         return {
//             totalPages,
//             currentPage,
//             onPageChange,
//         };
//     },
// };
</script>
