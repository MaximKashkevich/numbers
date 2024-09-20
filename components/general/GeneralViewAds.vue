<template>
    <!-- Мутный фон -->
    <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" aria-hidden="true"></div>

    <div class="fixed inset-0 flex items-center justify-center z-20 py-[10px]" role="dialog"
        aria-labelledby="dialog-title">
        <div class="w-[900px] h-full bg-white py-[30px] rounded-[20px] flex generalBlock relative">
            <div>
                <NuxtLink class="cursor-pointer absolute top-[20px] right-[20px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5667 0.268722C1.20841 -0.0895738 0.627502 -0.0895739 0.269208 0.268722C-0.0890854 0.627017 -0.0890848 1.20793 0.269209 1.56622L8.70342 10.0005L0.269829 18.4341C-0.0884646 18.7924 -0.0884647 19.3733 0.269829 19.7316C0.628122 20.0899 1.20903 20.0899 1.56733 19.7316L10.0009 11.298L18.4341 19.7313C18.7924 20.0896 19.3734 20.0896 19.7316 19.7313C20.0899 19.373 20.0899 18.7921 19.7316 18.4338L11.2984 10.0005L19.7323 1.56658C20.0906 1.20828 20.0906 0.62737 19.7323 0.269075C19.374 -0.0892205 18.7931 -0.08922 18.4348 0.269075L10.0009 8.70297L1.5667 0.268722Z"
                            fill="#BFBFBF" />
                    </svg>

                </NuxtLink>
            </div>
            <main>
                <section class="mt-3 ml-10">
                    <h1 class="font-bold text-[20px] leading-6 text-black ">
                        PLATE NUMBER
                    </h1>
                    <nav class="flex justify-between items-center">
                        <div class="">
                            <h3 class="text-[35px] leading-[42px] font-medium text-black my-3">Dubai plate number for
                                sale:
                                <br />AA 14611
                            </h3>
                            <span class="opacity-30 leading-[16.8px]">ID: 65131</span>
                        </div>
                        <div class="px-10 mb-[60px]">
                            <h3 class="text-[35px] leading-[42px] font-medium text-black ">to 20 000 AED</h3>
                        </div>
                    </nav>
                </section>
                <section class="justify-between flex items-center mt-3 ml-10">
                    <nav class="gap-[10px]">
                        <p class="leading-[19.2px] opacity-30">pecifications Requested:</p>
                        <div>
                            <button
                                class="py-[10px] px-[20px] border-[1px] border-gray-400 rounded-[10px] my-2 text-black">4
                                digits</button>
                            <button
                                class="py-[10px] px-[20px] border-[1px] border-gray-400 rounded-[10px] mx-2 my-2 text-black">Dubai</button>
                        </div>
                    </nav>
                    <nav class="px-10 ">
                        <NuxtLink>
                            <img src="/public/assets/cart.png" alt="cart">
                        </NuxtLink>
                    </nav>
                </section>
                <section class="px-10 mt-5">
                    <p class="leading-[19.2px] opacity-30 mb-2">Description:</p>
                    <p class="leading-[19.2px] ">Car licence plate not classic any city number has to be 51255 or 5125
                        Тут может быть довольно большое описание, если покупатель посчитаен нужным расписать прям очень
                        подробные условия, которые ему нужны. Тут может быть довольно большое описание, если покупатель
                        посчитаен нужным расписать прям очень подробные условия, которые ему нужны. Тут может быть
                        довольно большое описание, если покупатель посчитаен нужным расписать прям очень подробные
                        условия, которые ему нужны.</p>
                </section>
                <section class="px-10 mt-3">
                    <p class="leading-[19.2px] opacity-30">Сollection:</p>
                    <p class="leading-[19.2px]">My numbers 123</p>
                </section>
                <section class="px-10 mt-3 justify-between flex items-center">
                    <div>
                        <p class="leading-[19.2px] opacity-30">Emirate: Dubai</p>
                        <p class="leading-[19.2px] opacity-30">Posted Today 12 Views</p>
                    </div>
                    <div>
                        <ButtonBlue class="w-[174px] h-[52px] items-center justify-center flex">
                            Edit ad
                        </ButtonBlue>
                    </div>
                </section>

            </main>
        </div>
    </div>

</template>

<script setup>
import ButtonBlue from '../Button-blue/ButtonBlue.vue';

</script>

<style scoped></style>