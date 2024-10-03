<template>

    <NuxtPage />
    <div class="pl-[60px] mt-6">

        <NuxtLink>
            <p class="leading-[16.8px] text-blue-500 cursor-pointer">Home / My Dashboard / <span
                    class="leading-[16.8px] text-gray-300">Add
                    listing</span></p>
        </NuxtLink>
    </div>
    <main class="generalBlock justify-between flex items-center flex-wrap">
        <section class="pl-[60px] mt-10 side">
            <SideBar />
        </section>
        <section class="block1">
            <h1 class="text-[50px] leading-[50px] font-medium generalText">
                ADD LISTING
            </h1>
            <section class="mr-4">
                <nav class="genBtn my-[50px]">
                    <button
                        class="btn w-[400px] h-[52px] mr-3 py-[14px] px-[50px] border-[2px] border-slate-900 text-black font-bold text-[20px] leading-5 rounded-[100px] hover:text-gray-400 hover:border-gray-400 transition">PLATE
                        NUMBER</button>
                    <button
                        class="btn w-[400px] h-[52px] py-[14px] px-[50px] border-[2px] border-slate-900 text-black font-bold text-[20px] leading-5 rounded-[100px] hover:text-gray-400 hover:border-gray-400 transition">
                        PHONE NUMBER
                    </button>
                </nav>
                <section class="selects justify-between flex items-center">
                    <nav>
                        <p>Emirate:</p>
                        <select
                            class="selectAndInputs w-[400px] h-[50px] rounded-[100px] border border-gray-400 py-[10px] px-[20px]">
                            <option>Dubai</option>
                        </select>
                    </nav>
                    <nav class="flex flex-col">
                        <div class="mt-8">
                            <p>Code:</p>
                            <select
                                class="selectAndInputs w-[400px] h-[50px]  rounded-[100px] border border-gray-400 py-[10px] px-[20px]">
                                <option>AA</option>
                            </select>
                        </div>
                        <div class="flex items-center mt-2">
                            <input type="checkbox"
                                class="checked px-[3px] py-[3px] w-5 h-5 border-gray-300 focus:ring-0">
                            <label for="remember-me" class="ml-2">Hide code</label>
                        </div>
                    </nav>
                </section>
            </section>
            <section class="selects2 justify-between flex flex-wrap items-center mt-14 mr-4">
                <section>
                    <nav>
                        <p>Price:</p>
                        <div class="flex items-center">
                            <input
                                class="selectAndInputs w-[400px] h-[50px] rounded-[100px] border border-gray-400 py-[10px] px-[20px] -mr-1 placeholder:text-black placeholder:text-right"
                                placeholder="AED" @change="onChangePrice" :value="bluerPrice ? '' : price" />

                        </div>
                        <div class="flex items-center mt-2">
                            <input @click="bluerPriceFalse" type="checkbox"
                                class="checked px-[3px] py-[3px] w-5 h-5 border-gray-300 focus:ring-0" />
                            <label for="remember-me" class="ml-2">Hide price</label>
                        </div>
                        <div class="flex items-center mt-2">
                            <input type="checkbox"
                                class="checked px-[3px] py-[3px] w-5 h-5 border-gray-300 focus:ring-0" />
                            <label for="remember-me" class="ml-2">Add a discount</label>
                        </div>
                    </nav>
                </section>
                <section class="mb-[60px]">
                    <nav class="items-center">
                        <p>Design:</p>
                        <div class="flex items-center">
                            <select
                                class="selectAndInputs w-[400px] h-[50px] rounded-[100px] border border-gray-400 py-[10px] px-[20px]">
                                <option>Base</option>
                            </select>
                        </div>
                    </nav>
                </section>
            </section>
            <section class="selectJustify justify-between items-center flex mr-4">
                <nav>
                    <div class="mt-8">
                        <p>Number:</p>
                        <input
                            class="selectAndInputs w-[400px] h-[50px]  rounded-[100px] border border-gray-400 py-[10px] px-[20px]"
                            :value="bluerValue ? '' : '21721'" />
                    </div>
                    <div class="flex items-center mt-2">
                        <input v-model="bluerValue" @click="bluerValueFalse" type="checkbox"
                            class=" px-[3px] py-[3px] w-5 h-5  focus:ring-0" />
                        <label for="remember-me" class="ml-2">Hide number</label>
                    </div>
                    <nav class="mt-36">
                        <div>
                            <p>Add to collection:</p>
                            <select
                                class="selectAndInputs w-[400px] h-[50px]  rounded-[100px] border border-gray-400 py-[10px] px-[20px]">
                                <option>None</option>
                            </select>
                        </div>
                    </nav>
                </nav>
                <nav class="selectJustify2">
                    <p>Preview:</p>
                    <NuxtLink class="cursor-pointer">

                        <template v-if="bluerCard">
                            <img src="/public/assets/bluerCard.png" width="400" alt="bluerCard">
                        </template>

                        <template v-else>
                            <img src="/public/assets/unBluerCard.png" width="400" alt="unBluerCard">
                        </template>
                    </NuxtLink>
                    <div class="my-20"></div>
                    <nav class="">
                        <ButtonBlue @click="bluerCardFalse"
                            class="btn2 w-[400px] h-[52px] flex items-center justify-center">
                            {{ bluerCard ? "PREVIEW" : "REFRESH" }}
                            <template v-if="bluerCard">
                                <svg class="ml-2" width="31" height="30" viewBox="0 0 31 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.68789 19.9528L4.68787 19.9527C2.46927 17.7341 1.47063 15.5212 1.42692 15.4225M4.68789 19.9528L29.4816 14.6203M4.68789 19.9528C7.6465 22.9102 11.3855 24.475 15.5 24.475C19.6145 24.475 23.3535 22.9102 26.3121 19.9528L26.3121 19.9527C28.5307 17.7341 29.5293 15.5212 29.5731 15.4225M4.68789 19.9528L29.4816 15.382M1.42692 15.4225L1.51835 15.382L1.42697 15.4227C1.42695 15.4226 1.42694 15.4226 1.42692 15.4225ZM1.42692 15.4225C1.36796 15.2899 1.3375 15.1463 1.3375 15.0012C1.3375 14.8564 1.36779 14.7133 1.42642 14.5809C1.47579 14.4623 2.48067 12.2556 4.68787 10.0484C7.64649 7.08981 11.3855 5.525 15.5 5.525C19.6145 5.525 23.3535 7.08981 26.3121 10.0484C28.5307 12.267 29.5294 14.4812 29.5731 14.5798M29.5731 14.5798L29.4816 14.6203M29.5731 14.5798C29.573 14.5798 29.573 14.5797 29.573 14.5797L29.4816 14.6203M29.5731 14.5798C29.632 14.7125 29.6625 14.856 29.6625 15.0012C29.6625 15.1463 29.632 15.2899 29.5731 15.4225M29.4816 14.6203C29.5349 14.7402 29.5625 14.87 29.5625 15.0012C29.5625 15.1324 29.5349 15.2621 29.4816 15.382M29.5731 15.4225L29.4816 15.382M29.5731 15.4225C29.573 15.4226 29.573 15.4226 29.573 15.4227L29.4816 15.382M15.5001 9.275H15.5C14.3677 9.275 13.2608 9.61077 12.3193 10.2398C11.3779 10.8689 10.6441 11.763 10.2108 12.8091C9.77747 13.8552 9.66409 15.0063 9.88499 16.1169C10.1059 17.2274 10.6511 18.2475 11.4518 19.0482C12.2525 19.8488 13.2726 20.3941 14.3831 20.615C15.4936 20.8359 16.6447 20.7225 17.6909 20.2892C18.737 19.8559 19.6311 19.1221 20.2602 18.1806C20.8892 17.2392 21.225 16.1323 21.225 15V14.9999C21.2234 13.482 20.6197 12.0268 19.5465 10.9535C18.4732 9.88024 17.0179 9.27658 15.5001 9.275ZM15.5 22.4C11.9199 22.4 8.7939 21.0995 6.20366 18.5326C5.15312 17.4878 4.25742 16.2982 3.54368 15C4.25715 13.7016 5.15289 12.512 6.20368 11.4674C8.79392 8.9005 11.9199 7.6 15.5 7.6C19.0801 7.6 22.2061 8.90053 24.7964 11.4675C25.8491 12.512 26.7468 13.7017 27.4623 15.0004C26.5743 16.6386 22.9176 22.4 15.5 22.4ZM15.5 18.65C14.7781 18.65 14.0724 18.4359 13.4722 18.0349C12.8719 17.6338 12.4041 17.0637 12.1278 16.3968C11.8516 15.7298 11.7793 14.996 11.9201 14.2879C12.061 13.5799 12.4086 12.9295 12.919 12.4191C13.4295 11.9086 14.0799 11.561 14.7879 11.4201C15.4959 11.2793 16.2298 11.3516 16.8968 11.6278C17.5637 11.9041 18.1338 12.3719 18.5349 12.9722C18.9359 13.5724 19.15 14.2781 19.15 15C19.15 15.968 18.7654 16.8964 18.0809 17.5809C17.3964 18.2654 16.468 18.65 15.5 18.65Z"
                                        fill="#005DCA" stroke="#005DCA" stroke-width="0.2" />
                                </svg>

                            </template>
                            <template v-else>
                                <svg class="ml-3" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.833333" y="0.833333" width="18.3333" height="18.3333" rx="9.16667"
                                        stroke="#005DCA" stroke-width="1.66667" />
                                    <path
                                        d="M7.49927 7.49811C8.13886 6.85852 8.99821 6.48923 9.89985 6.46375V8.18052V8.42194L10.0706 8.25123L12.4948 5.82698L12.5655 5.75627L12.4948 5.68556L10.0706 3.26132L9.89985 3.09061V3.33203V5.05122C8.62364 5.07699 7.40517 5.59517 6.50074 6.49959C5.57272 7.42761 5.05137 8.68628 5.05137 9.9987C5.05137 10.97 5.33602 11.8733 5.81843 12.6341L5.8853 12.7395L5.97359 12.6512L6.85844 11.7664L6.91095 11.7139L6.87587 11.6484C6.60397 11.1412 6.46227 10.5744 6.46349 9.99891V9.9987C6.46349 9.0608 6.83607 8.16131 7.49927 7.49811ZM14.1813 7.36333L14.1144 7.25788L14.0261 7.34617L13.1413 8.23102L13.0893 8.283L13.1234 8.34813C13.3831 8.84398 13.5362 9.40998 13.5362 9.9987C13.5362 10.9366 13.1636 11.8361 12.5004 12.4993C11.8608 13.1389 11.0015 13.5082 10.0999 13.5336V11.8169V11.5755L9.92914 11.7462L7.5049 14.1704L7.43419 14.2411L7.5049 14.3118L9.92914 16.7361L10.0999 16.9068V16.6654V14.9462C11.3761 14.9204 12.5945 14.4022 13.499 13.4978C14.427 12.5698 14.9483 11.3111 14.9483 9.9987C14.9483 9.02735 14.6637 8.12405 14.1813 7.36333Z"
                                        fill="#005DCA" stroke="#005DCA" stroke-width="0.2" />
                                </svg>

                            </template>

                        </ButtonBlue>
                    </nav>
                </nav>
            </section>
            <section class="mt-4 flex flex-wrap">
                <p>Description:</p>
                <input type="text" placeholder="Write something important that the buyer needs to know"
                    class="inp w-[800px] h-[200px] rounded-[10px] py-[14px] px-[20px] border-[2px] border-gray-300 placeholder-gray-400  text-gray-300 focus:border-gray-300" />
                <p class="text-gray-300">500 Symbols remaining for the description</p>
                <nav class="mt-16 mb-12">
                    <ButtonBlue class="btn w-[291px] py-[14px] px-[50px] h-[52px] flex items-center justify-center">
                        Add plate number
                    </ButtonBlue>
                </nav>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
import SideBar from '../components/general/SideBar.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';

import { ref } from 'vue';

const bluerCard = ref<Boolean>(false)
const bluerValue = ref<Boolean>(false)
const bluerPrice = ref<Boolean>(false)
const price = ref<Number | String>(0)

const onChangePrice = (event) => {
    if (isNaN(parseInt(event.target.value))) {
        price.value = 'Некорректно веденная цена'
    } else {
        price.value = parseInt(event.target.value)
    }
}

const bluerCardFalse = () => {
    bluerCard.value = !bluerCard.value;
}

const bluerValueFalse = () => {
    bluerValue.value = !bluerValue.value;
}

const bluerPriceFalse = () => {
    bluerPrice.value = !bluerPrice.value;

}

</script>

<style scoped>
@media(max-width:400px) {

    .block1 {
        margin-top: 20px;
    }

    .btn2 {
        width: 100px;
    }
}

@media(min-width:1200px) {
    .side {
        height: 1350px;
    }
}

/* @media(max-width:1000px) {
    .selectJustify {
        flex-direction: column-reverse;
    }
} */

@media(max-width:500px) {
    /* .selectJustify2 {
        flex-direction: column;
        display: flex;
    }
        */

    .selectAndInputs {
        width: 350px;
        display: flex;
        justify-content: center;
    }

    .genBtn {
        margin-top: 5px;
        align-items: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        width: 250px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
    }

    .svg {
        width: 360px;
    }

    .selects {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .selects2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .inp {
        width: 400px;
    }

    .selectJustify2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
    }

    .selectJustify {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .btn2 {
        width: 100px;
    }

}


@media(max-width:650px) {
    .selectAndInputs {
        width: 500px;
        display: flex;
        justify-content: center;
    }

    .generalText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .btn {
        width: 500px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
    }

    .svg {
        width: 510px;
        margin-top: 20px;
    }

    .selects {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .selects2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }


    .inp {
        width: 550px;
    }

    .selectJustify2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
    }

    .selectJustify {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    /* .generalBlock {
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .side {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn2 {
        width: 200px;
    }

}

@media(max-width:800px) {

    .genBtn {
        width: 600px;
        display: flex;
        align-items: center;
        align-items: flex-start
    }

    .selectAndInputs {
        width: 650px;
        display: flex;
        justify-content: center;
    }

    .generalText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .btn {
        width: 550px;
    }

    .svg {
        width: 660px;
        margin-top: 20px;
    }

    .selects {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: flex-start;
    }

    .selects2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .inp {
        width: 700px;
    }

    .selectJustify2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
    }

    .selectJustify {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }


    .side {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn2 {
        width: 650px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
}

@media(max-width:1000px) {

    .side {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .generalText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .genBtn {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .btn {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        width: 150px;
    }

}

@media(max-width:1200px) {
    .generalText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .genBtn {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 150px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inp {
        width: 900px;
    }

    .selectJustify {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}

@media(max-width:1244px) {
    .generalText {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }

    .genBtn {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        width: 550px;
    }

    .side {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>