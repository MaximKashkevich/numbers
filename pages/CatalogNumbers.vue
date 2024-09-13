<template>
    <div class="px-[60px]">

        <nav class="mb-[30px] mt-[30px] navigation">
            <ul class="flex gap-[5px] ">
                <li>
                    <a href="/BuyNumbers" class="text-[#005DCA] transition cursor-pointer"> Home /</a>
                </li>
                <li>
                    <a href="" class=" text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer"> Plate numbers
                    </a>
                </li>

            </ul>
        </nav>
        <!-- Входные данные и фильтры -->
        <div class="mt-[77px]">
            <h3
                class="w-[1320px] h-[60px] text-[50px] font-medium leading-[60px] text-left title-input mb-[50px] uppercase">
                Plate Numbers
            </h3>
            <div class="flex gap-[20px] items-center flex-wrap">
                <div>
                    <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
                        for="type">Type:</label>
                    <div class="mt-[10px] flex gap-[10px]">
                        <button
                            class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] text-center"
                            @click="showPlate">
                            Plate
                        </button>
                        <button
                            class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] text-center"
                            @click="showMobile">
                            Mobile
                        </button>
                    </div>
                </div>
                <div>
                    <label for="emirate"
                        class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Operator:</label>
                    <select id="emirate" name="emirate"
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


                <button @click="seeMore"
                    class="w-[52px] h-[52px] border-[#BFBFBF] font-bold flex items-center justify-center rounded-full border-[1.5px] mt-[30px]">
                    <img src="../public/assets/setings.svg" alt="">
                </button>

                <ButtonBlue class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]">
                    Show 1234 numbers
                </ButtonBlue>

                <!-- Точки, отображаемые при скрытом контенте -->


                <!-- Контент, который можно скрыть -->
                <transition name="fade-slide">
                    <div v-if="showMore" id="more">
                        <div class="container px-2 flex flex-col gap-8">
                            <div class="flex flex-col gap-6 mt-8">
                                <!-- Price Range -->
                                <div class="flex flex-wrap gap-4">
                                    <div class="flex flex-col">
                                        <label
                                            class="font-roboto text-lg font-normal leading-[19.2px] text-[#B3B3B3] mb-2">Price:</label>
                                        <div class="flex gap-4 flex-wrap">
                                            <input type="text" v-model="priceFrom" placeholder="From"
                                                class="w-full sm:w-[220px] h-[50px] rounded-full border border-[#BFBFBF] bg-[#FAFAFA] text-lg text-[#C2C2C2] font-normal leading-[19.2px] pl-4" />
                                            <input type="text" v-model="priceTo" placeholder="Up to"
                                                class="w-full sm:w-[220px] h-[50px] rounded-full border border-[#BFBFBF] bg-[#FAFAFA] text-lg text-[#C2C2C2] font-normal leading-[19.2px] pl-4" />
                                        </div>
                                    </div>

                                    <!-- Number of digits -->
                                    <div>
                                        <label
                                            class="font-roboto text-lg font-normal leading-[19.2px] text-[#B3B3B3]">Number
                                            of digits:</label>
                                        <div class="flex gap-2 button-container pt-1 mb-2 ml-5 flex-wrap">
                                            <MiniButton @click="setNumberOfDigits(1)">1</MiniButton>
                                            <MiniButton @click="setNumberOfDigits(2)">2</MiniButton>
                                            <MiniButton @click="setNumberOfDigits(3)">3</MiniButton>
                                            <MiniButton @click="setNumberOfDigits(4)">4</MiniButton>
                                            <MiniButton @click="setNumberOfDigits(5)">5</MiniButton>
                                        </div>
                                        <button @click="clearNumberOfDigits"
                                            class="w-full sm:w-[461px] h-[50px] px-5 py-2.5 rounded-full border border-[#BFBFBF] text-lg ml-5 button--1">
                                            Any number of digits
                                        </button>
                                    </div>

                                    <!-- Add posted -->
                                    <div class="flex flex-col ml-5 choice">
                                        <label for="sort"
                                            class="font-roboto text-lg font-normal leading-[19.2px] text-[#B3B3B3] mb-2">Add
                                            posted:</label>
                                        <select id="emirate" v-model="postedDate"
                                            class="w-full sm:w-[310px] h-[50px] rounded-full border border-[#BFBFBF] bg-[#FAFAFA] text-lg font-normal leading-[19.2px] pl-4 ml-5">
                                            <option>Today</option>
                                            <option>Tomorrow</option>
                                            <option>Don't know</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Checkboxes и кнопка -->
                            <div class="w-full px-2 flex justify-between mt-12 flex-wrap">
                                <div class="flex items-center gap-2">
                                    <input type="checkbox" v-model="isExactMatch" class="custom-checkbox" />
                                    <label
                                        class="w-full h-[16px] text-lg font-medium leading-[19.2px] text-left text-checkbox">
                                        Search by exact digits match
                                    </label>
                                </div>
                                <button @click="clearFilters"
                                    class="w-full sm:w-[308px] h-[50px] rounded-full border border-[#000000] mt-4 sm:mt-0">
                                    Clear all filters
                                </button>
                            </div>

                            <!-- Exact match search -->
                            <transition name="fade-slide">
                                <div v-if="isExactMatch" class="flex flex-col mt-5 checkbox-container">
                                    <label
                                        class="font-roboto text-lg font-normal leading-[19.2px] text-[#B3B3B3] mb-2">Match:</label>
                                    <input type="search" v-model="exactMatchValue"
                                        class="w-full sm:w-[510px] h-[50px] rounded-full border border-[#BFBFBF] pl-4 text-lg text-[#BFBFBF] bg-[#FAFAFA]" />
                                </div>
                            </transition>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>



    <!-- Похожие номера -->
    <h3
        class="text-[16px] w-full font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px] px-[50px]">
        Similar numbers:
    </h3>
    <div
        class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px] px-[50px]">
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
        <CardPlate />
    </div>

    <!-- Ещё похожие номера -->
    <h3
        class="text-[16px] w-full font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px] px-[50px]">
        Similar numbers:
    </h3>
    <div v-if="isPlateSelected"
        class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px] px-[50px]">
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumber />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumber />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
        <SimilarNumberLowPrice />
    </div>
    <div v-if="!isPlateSelected"
        class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px] px-[50px]">
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
        <Card />
        <Card />
        <Card />
        <Card />

    </div>



    <!-- Пагинация -->
    <Pagination class="mt-[70px] px-[50px]" :total-pages="10" :current-page="1" @update:page="onPageChange" />


</template>

<script>
import CardPlate from '../components/Card.vue';
import SimilarNumber from '../components/SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue';
import Pagination from '../components/Pagination/Pagination.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import Card from '../components/Card.vue';


export default {
    components: {
        CardPlate,
        SimilarNumber,
        SimilarNumberLowPrice,
        Pagination,
        Card,
    },
    data() {
        return {
            isExactMatch: false,
            exactMatchValue: '',
            showMore: false,
            showDots: true,
            isChecked: false,
            priceFrom: '',
            priceTo: '',
            digits: [1, 2, 3, 4, 5], // Возможные числа для выбора
            selectedDigits: [], // Выбранные числа
            postedDate: 'Today', // Значение по умолчанию для даты
            matchDigits: '', // Значение поиска по цифрам
            isPlateSelected: true,
        };
    },
    methods: {

        showPlate() {
            this.isPlateSelected = true; // Устанавливаем состояние для отображения контейнера с Plate
        },
        showMobile() {
            this.isPlateSelected = false; // Устанавливаем состояние для отображения контейнера с Mobile
        },
        seeMore() {
            this.showMore = !this.showMore;
            this.showDots = !this.showDots;
        },
        selectDigit(digit) {
            if (this.selectedDigits.includes(digit)) {
                this.selectedDigits = this.selectedDigits.filter(d => d !== digit);
            } else {
                this.selectedDigits.push(digit);
            }
        },
        selectAnyDigits() {
            this.selectedDigits = [];
        },
        clearFilters() {
            this.priceFrom = '';
            this.priceTo = '';
            this.selectedDigits = [];
            this.postedDate = 'Today';
            this.isChecked = false;
            this.matchDigits = '';
        }
    }
};






</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

::placeholder {
    color: #C2C2C2;
}

.custom-checkbox {
    width: 30px;
    height: 25px;
    border: 1px solid #BFBFBF;
    background-color: #FAFAFA;
    border-radius: 6px;
    appearance: none;
    /* Убирает стандартный стиль браузера */
    cursor: pointer;
    outline: none;
    position: relative;
    display: inline-block;
}

.custom-checkbox:checked {
    background-color: #FAFAFA;
    border-color: #BFBFBF;
}

.custom-checkbox:checked::before {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    color: #4A90E2;
    font-size: 16px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-checkbox:focus {
    box-shadow: none;
}

.custom-label {
    font-size: 16px;
    color: #333;
    cursor: pointer;
    margin-left: 10px;
}

@media(max-width: 1024px) {
    .button-container {
        margin-top: 40px;
        margin-left: -1px;
    }

    .button--1 {
        margin-left: -1px;
    }

    .choice {
        margin-top: 30px;
        margin-left: -1px;
    }

    .text-checkbox {
        font-size: 16px;
        margin-bottom: 5px;
        width: 300px;
    }


    .checkbox-container {
        margin-bottom: 20px;
    }

}
</style>
