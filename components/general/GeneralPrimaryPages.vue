<template>

    <Header />
    <nav class="my-5  ml-[60px] ">
        <NuxtLink class="text-blue-500 cursor-pointer">
            Home
        </NuxtLink>
        <span class="text-gray-300 mt-8 flex-wrap">/ My Dashboard</span>
        <main class="flex flex-wrap justify-between items-center">
            <SideBar class="mr-20" />
            <section class="flex flex-col flex-wrap">
                <div class="dashboard">
                    <h1 class="text-[50px] leading-[50px] font-medium">My Dashboard</h1>
                    <div class="flex space-x-[100px] items-center flex-wrap ">
                        <p class="text-[20px] leading-6 text-gray-400 my-10">Subscription up to: <span
                                class="text-black">October
                                10, 2023</span></p>
                        <div class="flex flex-wrap justify-center items-center">
                            <ButtonBlue class="py-[14px] px-[50px] btn">
                                Extend subscription
                            </ButtonBlue>
                        </div>
                    </div>

                    <h2 class="text-[35px] leading-[42px] font-medium">My featured numbers:</h2>
                </div>
                <div class="my-[10px] card">
                    <CardPlate />
                </div>
            </section>
        </main>

        <main class="flex flex-wrap">
            <h3 class="text-[35px] leading-[42px] font-medium justify-center flex mr-48 my-10 textNumbers">
                My mobile numbers
            </h3>
            <div class="flex flex-wrap justify-end items-center gap-4">
                <div v-for="(width, index) in numbersWidth" :key="index">
                    <SimilarNumber class="container" />
                </div>

            </div>
        </main>
    </nav>
</template>

<script setup>
import Header from '../Header.vue'
import SideBar from './SideBar.vue';
import CardPlate from '../CardPlate/CardPlate.vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import SimilarNumber from '../SimilarNumbers/SimilarNumber.vue';
import Card from '../Card.vue'
import { reactive } from 'vue';

const numbersWidth = reactive([
    '64', '64', '40', '64'
])

</script>

<style scoped>
@media(max-width:800px) {
    .textNumbers {
        margin-right: 0;
    }
}

@media(max-width:927px) {
    .container {
        justify-content: center;
        align-items: center;
        display: flex;
    }
}

@media(max-width:1100px) {
    .dashboard {
        padding-top: 20px;
    }
}

@media(max-width:510px) {
    .card {
        width: 200px;
    }
}

@media(max-width:510px) {
    .btn {
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 25px;
        padding-right: 25px;
    }
}
</style>
