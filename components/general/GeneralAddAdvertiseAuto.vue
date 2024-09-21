<template>

    <Header />
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
                        <!-- <svg class="svg" width="400" height="200" viewBox="0 0 426 200" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect x="0.5" y="0.5" width="425" height="199" rx="9.5" fill="white" />
                            <rect x="0.5" y="0.5" width="425" height="199" rx="9.5" stroke="#BFBFBF" />
                            <rect x="32" y="60" width="362" height="80" rx="10" fill="url(#pattern0_74_2583)" />
                            <defs>
                                <pattern id="pattern0_74_2583" patternContentUnits="objectBoundingBox" width="1"
                                    height="1">
                                    <use xlink:href="#image0_74_2583"
                                        transform="matrix(0.00159744 0 0 0.00722843 0 -0.63125)" />
                                </pattern>
                                <image id="image0_74_2583" width="626" height="313"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg> -->
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
            <section class="mt-4">
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
    <Footer />


</template>

<script setup lang="ts">
import Header from '../Header.vue'
import SideBar from './SideBar.vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import Footer from '../Footer.vue'

import { ref } from 'vue';


const bluerCard = ref<Boolean>(false)
const bluerValue = ref<Boolean>(false)
const bluerPrice = ref<Boolean>(false)
const price = ref<Number>(0)

const onChangePrice = (event) => {
    price.value = parseInt(event.target.value)
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