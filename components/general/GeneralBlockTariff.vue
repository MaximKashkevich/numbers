<template>

    <!-- Доработать -->

    <Header />
    <div class="pl-[60px]">

        <NuxtLink>
            <p class="leading-[16.8px] text-blue-500 cursor-pointer">Home / My Dashboard / <span
                    class="leading-[16.8px] text-gray-300">Add
                    listing</span></p>
        </NuxtLink>
    </div>



    <main>
        <section class="flex justify-between items-center">
            <nav class="pl-[60px] items-center ">
                <SideBar />
            </nav>
            <nav>
                <h1 class="font-medium leading-[50px] text-[50px]">Add listing</h1>
                <nav class="w-[830px] h-[580px] rounded-[20px] px-[50px] py-[40px] mt-14 bg-white  ">
                    <h3 class="font-medium text-[35px] leading-[42px]">
                        To publish an ad you first need <br />
                        to license to the service.
                    </h3>
                    <p class="leading-[19.2px] mt-2">Once you pay the rate you want, you can add listings right away.
                    </p>
                    <nav class="grid grid-cols-3 mt-6 gap-6">
                        <div
                            class="w-[230px] h-[358px] py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <h2 class="font-medium text-[50px] leading-[50px]">FREE</h2>
                            <p class="leading-[19.2px] my-6">1 month</p>
                            <ol>
                                <li>Plate or phone</li>
                                <li>1 ad for sale</li>
                                <li>No update</li>
                            </ol>
                            <ButtonBlue class="py-[14px] px-[25px] mt-6">
                                FREE 1 MONTH
                            </ButtonBlue>
                        </div>
                        <div
                            class="w-[230px] h-[358px] py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$69</span>
                            <p class="leading-[19.2px] my-6">5 month</p>
                            <ol>
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="py-[14px] px-[30px] mt-6">
                                PAY 5 MONTH
                            </ButtonBlue>
                        </div>
                        <div
                            class="w-[230px] h-[358px] py-[30px] px-[20px] border rounded-[20px] bg-white hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$109</span>
                            <p class="leading-[19.2px] my-6">1 year</p>
                            <ol>
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="py-[14px] px-[40px] mt-6">
                                PAY 1 YEAR
                            </ButtonBlue>

                        </div>
                    </nav>
                    <!-- <CardLicenses /> -->

                </nav>
            </nav>
        </section>



    </main>
    <Footer />

</template>

<script setup>
import Header from '../Header.vue'
import SideBar from './SideBar.vue';
import Footer from '../Footer.vue'
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import CardLicenses from '../CardLicenses/CardLicenses.vue'

</script>

<style scoped></style>
