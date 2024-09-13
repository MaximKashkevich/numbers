<template>
    <div class="pl-[60px] pr-[60px] mt-[150px]">
        <h1 class="w-[1320px] h-[200px] text-[100px] font-high leading-[100px] text-left title-2">
            PLATE AND MOBILE NUMBERS IN UAE
        </h1>

        <div class="mt-[100px] containres">
            <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
            <div class="flex gap-[50px] pt-[30px] pb-[30px] items-center flex-wrap">
                <h2 class="w-[400px] h-[36px] text-[30px] font-normal leading-[36px] uppercase">
                    Total plate numbers:
                </h2>
                <p class="w-[70px] h-[36px] text-[30px] font-normal leading-[36px] uppercase text-1">
                    {{ totalPlateNumbers }}
                </p>

                <ButtonBlue class="w-[140px] h-[52px] flex items-center justify-center ml-auto">
                    BUY
                </ButtonBlue>
            </div>

            <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

            <div class="flex gap-[50px] pt-[30px] pb-[30px] items-center flex-wrap">
                <h2 class="w-[400px] h-[36px] text-[30px] font-normal leading-[36px] uppercase">
                    Total mobile numbers:
                </h2>
                <p class="w-[70px] h-[36px] text-[30px] font-normal leading-[36px] uppercase text-1">
                    {{ totalMobileNumbers }}
                </p>

                <ButtonBlue class="w-[140px] h-[52px] flex items-center justify-center ml-auto">
                    BUY
                </ButtonBlue>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

        <img class="w-full pt-[70px] img-bg" src="../../public/assets/bacround.png" alt="">

        <div class="container-input mt-[150px]">
            <h3 class="w-[1320px] h-[60px] text-[50px] font-normal leading-[60px] text-left title-input mb-[50px]">
                Choose your number
            </h3>
            <div class="flex gap-[20px] items-center flex-wrap">
                <div>
                    <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
                        for="type">Type:</label>
                    <div class="mt-[10px] flex gap-[10px]">
                        <NuxtLink
                        to="/BuyNumbers"
                            class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center  items-center text-center">Plate</NuxtLink>
                        <NuxtLink
                          to="/BuyNumbers2"
                            class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center">Mobile</NuxtLink>
                    </div>
                </div>
                <div>
                    <label for="emirate"
                        class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Operator:</label>
                    <select id="emirate" name="emirate "
                        class="js-choices mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option class="option" value="city">Etosalat</option>
                        <option class="option" value="city">Virgin mobile</option>
                        <option class="option" value="city">Du</option>

                    </select>
                </div>
                <div>
                    <label for="code"
                        class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Prefix:</label>
                    <select id="emirate" name="code"
                        class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option>050</option>

                    </select>
                </div>
                <div>
                    <label for="sort" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Sort
                        by:</label>
                    <select id="emirate" name="sort"
                        class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option>Latest</option>
                    </select>
                </div>
                <ButtonBlue class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]">
                    Show 1234 numbers
                </ButtonBlue>
            </div>
        </div>

        <div>
            <h3
                class="text-[16px] w-full font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]">
                Similar numbers:
            </h3>
            <div
                class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <ButtonBlue class="w-[428px] mt-[50px] uppercase blue-button">
                View 7508 more plate numbers
            </ButtonBlue>
        </div>


    </div>



</template>

<script setup lang="ts">
import { onMounted } from 'vue';


import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import Card from '../components/Card.vue';
import { ref } from 'vue';

interface Input {
    title: string;
    type: 'text' | 'number' | 'textarea';
    value: string;
    placeholder: string;
}

// Массив input полей
const inputTitle = ref<Input[]>([
    { title: '', type: 'text', value: '', placeholder: 'Your name' },
    { title: ' ', type: 'number', value: '', placeholder: '+7 (___) ___-___-___' },
    { title: ' ', type: 'textarea', value: '', placeholder: 'Write your question or suggestion' },
]);

;

const props = defineProps({
    totalMobileNumbers: {
        type: Number,
        default: 3028,
    },
    totalPlateNumbers: {
        type: Number,
        default: 7353,
    },
});
</script>



<style>
.hidden {
    display: none;
}

.option {}


@media (max-width: 324px) {
    .text-1 {
        padding-top: 50px;
    }
}

@media (max-width: 500px) {
    .img-bg {
        display: none;
    }

    .container-input {
        margin-top: 150px;
    }
}

@media (max-width: 920px) {
    .title-2 {
        width: 500px;
        font-size: 50px;
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {
    .title-2 {
        width: 370px;
        font-size: 50px;
        flex-wrap: wrap;
    }

    .containres {
        margin-top: 350px;
    }

    .blue-button {
        width: 300px;
        font-size: 16px;
    }

    .orange-button {
        width: 300px;
        font-size: 16px;
    }

    .title-input {
        width: 400px;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .form-title {
        margin-bottom: 50px;
    }
}


@media (max-width: 1120px) {
    .order-list {
        width: 395px;
        font-size: 20px
    }

    .mini-text {
        width: 500px;
        font-size: 14px;
        margin-top: 50px;
        margin-bottom: 50px
    }

    .mini-title {
        width: 700px;
        font-size: 35px;
        font-weight: 700;
        line-height: 40px;


    }


    @media (max-width: 850px) {
        .order-list {
            width: 250px;
            font-size: 15px;
            margin-top: -10px;
        }

        .mini-text {
            width: 250px;
            font-size: 15px;

        }

        .mini-title {
            width: 300px;
            font-size: 25px;
            font-weight: 700;
            line-height: 30px;

        }

        .text-container {
            padding-right: 30px;
        }

        .text-show {}
    }


}

#emirate {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../../public/assets/Polygon 3.svg');
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 10px;
}

.button-black:active {
    border-color: #BFBFBF;
    color: #BFBFBF;
}

.button-black:hover {
    border-color: #BFBFBF;
    color: #BFBFBF;
}

.grid-2 {
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
}
</style>
