<template>
    <div class="pl-[60px] mt-[33px]">
        <NuxtLink>
            <p class="leading-[16.8px] text-blue-500 cursor-pointer">
                <NuxtLink to="/">
                    Home
                </NuxtLink> /
                <NuxtLink to="/GeneralEmpty">
                    My Dashboard
                </NuxtLink> /
                <span class="leading-[16.8px] text-gray-300">Add listing</span>
            </p>
        </NuxtLink>
    </div>

    <main>
        <section class="flex flex-col md:flex-row justify-between items-start mt-4">
            <nav class="pl-[60px] w-full md:w-auto md:order-1">
                <SideBar />
            </nav>
            <nav class="flex-1 md:ml-6 md:order-2">
                <h1 class="font-medium leading-[50px] text-[32px] md:text-[50px]">Add listing</h1>
                <div class="w-full max-w-[830px] h-auto rounded-[20px] px-[20px] py-[40px] mt-14 bg-white">
                    <div class="text-left md:text-center">
                        <h3 class="font-medium text-[28px] md:text-[35px] leading-[42px]">
                            To publish an ad you first need <br />
                            to license to the service.
                        </h3>
                        <p class="leading-[19.2px] mt-2">
                            Once you pay the rate you want, you can add listings right away.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                        <div
                            class="w-full h-auto py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <h2 class="font-medium text-[50px] leading-[50px]">FREE</h2>
                            <p class="leading-[19.2px] my-6">1 month</p>
                            <ol class="list-disc pl-5">
                                <li>Plate or phone</li>
                                <li>1 ad for sale</li>
                                <li>No update</li>
                            </ol>
                            <ButtonBlue class="w-[250px] px-2 h-[50px] flex items-center justify-center mt-6 md:w-auto">
                                FREE 1 MONTH</ButtonBlue>
                        </div>
                        <div
                            class="w-full h-auto py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$69</span>
                            <p class="leading-[19.2px] my-6">5 month</p>
                            <ol class="list-disc pl-5">
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="w-[250px] px-2 h-[50px] flex items-center justify-center mt-6 md:w-auto">
                                PAY 5 MONTH</ButtonBlue>
                        </div>
                        <div
                            class="w-full h-auto py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$109</span>
                            <p class="leading-[19.2px] my-6">1 year</p>
                            <ol class="list-disc pl-5">
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="w-[250px] px-2 h-[50px] flex items-center justify-center mt-6 md:w-auto">
                                PAY 1 YEAR</ButtonBlue>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </main>
</template>

<script setup>
import SideBar from '../components/general/SideBar.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';

</script>

<style scoped></style>
