<template>

    <Header />
    <nav class="my-5 flex flex-wrap  ml-[60px] ">
        <NuxtLink class="text-blue-500 cursor-pointer">
            Home
        </NuxtLink>
        <span class="text-gray-300 mt-8 ">/ My Dashboard</span>
        <main class="flex blockDashboard justify-between items-center">
            <SideBar class="mr-20 flex flex-wrap sideBar" />
            <section class="flex flex-col ">
                <div class="dashboard">
                    <h1 class="text-[50px] leading-[50px] font-medium">My Dashboard</h1>
                    <div class="flex space-x-[100px] items-center dachBtn ">
                        <p class="text-[20px] leading-6 text-gray-400 my-10">Subscription up to: <span
                                class="text-black">October
                                10, 2023</span></p>
                        <div class="flex justify-center items-center">
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
            <div class="flex flex-col w-full">
                <h3 class="text-[35px] leading-[42px] font-medium text-center mr-48 my-10 textNumbers">
                    My mobile numbers
                </h3>
                <div class="flex flex-wrap blockContent justify-end items-center gap-4">
                    <div v-for="(index) in numbersWidth" :key="index">
                        <SimilarNumber class="container" />
                    </div>
                </div>
            </div>

            <div class="flex flex-col w-full">
                <h3 class="text-[35px]  leading-[42px] font-medium text-center mr-48 my-10 textNumbers">
                    My plate numbers
                </h3>
                <div class="flex flex-wrap blockContent justify-end items-center gap-4">
                    <div v-for="(index) in card" :key="index" class="flex items-center">
                        <Card class="container" />
                    </div>
                </div>
            </div>
        </main>

    </nav>
    <Footer />
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import SideBar from './SideBar.vue';
import CardPlate from '../CardPlate/CardPlate.vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import SimilarNumber from '../SimilarNumbers/SimilarNumber.vue';
import Card from '../Card.vue'

import { reactive } from 'vue';

const numbersWidth = reactive([
    '64', '64', '40', '64'
])

const card = reactive([1, 2])
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

@media(max-width:1070px) {
    .blockDashboard {
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .sideBar {
        width: 500px;
    }
}

@media(max-width:485px) {
    .sideBar {
        width: 300px;
        height: 500px;
    }
}

@media(max-width:1050px) {
    .blockContent {
        justify-content: center;
        align-items: center;
        display: flex;
    }
}

@media(max-width:927px) {
    .card {
        justify-content: center;
        display: flex;
        align-items: center;
    }
}

@media(max-width:927px) {
    .textNumbers {
        text-align: center;
        display: flex;
    }
}
</style>
