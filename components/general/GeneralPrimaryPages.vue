<template>

    <Header />
    <nav class="my-5  ml-[60px] ">
        <NuxtLink class="text-blue-500 cursor-pointer">
            Home
        </NuxtLink>
        <span class="text-gray-300">/ My Dashboard</span>
        <main class="flex justify-between items-center">
            <SideBar class=" ml-[0px] mt-6" />
            <section class="flex flex-col">
                <div>
                    <h1 class="text-[50px] leading-[50px] font-medium">My Dashboard</h1>
                    <div class="flex space-x-[100px] items-center">
                        <p class="text-[20px] leading-6 text-gray-400 my-10">Subscription up to: <span
                                class="text-black">October
                                10, 2023</span></p>
                        <ButtonBlue class="w-[322px] h-[52px] justify-center flex items-center">
                            Extend subscription
                        </ButtonBlue>
                    </div>

                    <h2 class="text-[35px] leading-[42px] font-medium">My featured numbers:</h2>
                </div>
                <div class="my-[10px]">
                    <CardPlate />
                </div>
            </section>
        </main>

        <main>
            <h3 class="text-[35px] leading-[42px] font-medium justify-center flex my-10">
                My mobile numbers
            </h3>
            <div class="flex justify-end items-center ">
                <SimilarNumber class="mr-5" />
                <SimilarNumber class="mr-5" />
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


</script>