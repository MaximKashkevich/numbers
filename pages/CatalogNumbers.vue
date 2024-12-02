<template>
    <NuxtPage />
    <div class="px-[60px]">

        <nav class="mb-[30px] mt-[30px] navigation">
            <ul class="flex gap-[5px] ">
                <li>
                    <NuxtLink href="/BuyNumbers" class="text-[#005DCA] transition cursor-pointer"> Home /</NuxtLink>
                </li>
                <li>
                    <NuxtLink href="" class=" text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer"> Plate
                        numbers
                    </NuxtLink>
                </li>

            </ul>
        </nav>
        <!-- Входные данные и фильтры -->
        <div class="mt-[77px]">
            <h3
                class="max-w-[1320px] w-full h-[60px] text-[50px] font-medium leading-[60px] text-left title-input mb-[50px] uppercase">
                Plate Numbers
            </h3>
            <div class="flex gap-[20px] items-center  flex-wrap">
                <div>
                    <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
                        for="type">Type:</label>
                    <div class="mt-[10px] flex gap-[10px]">
                        <div class="flex gap-[10px]">
                            <button
                                :class="['button-black w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] text-center', getButtonClass('Plate')]"
                                @click="showPlate(); setActive('Plate')">
                                Plate
                            </button>
                            <button
                                :class="['button-black w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] text-center', getButtonClass('Mobile')]"
                                @click="showMobile(); setActive('Mobile')">
                                Mobile
                            </button>
                        </div>

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
                    <select id="code-list" name="code"
                        class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option>050</option>
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
                                            <input type="text" v-model="maxprice2" placeholder="From"
                                                class="w-full max-w-[220px] h-[50px] rounded-full border border-[#BFBFBF] bg-[#FAFAFA] text-lg text-[#C2C2C2] font-normal leading-[19.2px] pl-4" />
                                            <input type="text" v-model="pricelow2" placeholder="Up to"
                                                class="w-full max-w-[220px] h-[50px] rounded-full border border-[#BFBFBF] bg-[#FAFAFA] text-lg text-[#C2C2C2] font-normal leading-[19.2px] pl-4" />
                                        </div>
                                    </div>

                                    <!-- Number of digits -->
                                    <div>
                                        <label
                                            class="font-roboto text-lg font-normal leading-[19.2px] text-[#B3B3B3]">Number
                                            of digits:</label>
                                        <div class="flex gap-2 button-container pt-1 mb-2 ml-5 flex-wrap">
                                            <MiniButton :disabled="!isActive" @click="shoNumbers(1)">1</MiniButton>
                                            <MiniButton :disabled="!isActive" @click="shoNumbers(2)">2</MiniButton>
                                            <MiniButton :disabled="!isActive" @click="shoNumbers(3)">3</MiniButton>
                                            <MiniButton :disabled="!isActive" @click="shoNumbers(4)">4</MiniButton>
                                            <MiniButton :disabled="!isActive" @click="shoNumbers(5)">5</MiniButton>
                                        </div>
                                        <button @click="clearNumberOfDigits"
                                            class="w-full max-w-[461px] h-[50px] px-5 py-2.5 rounded-full border border-[#BFBFBF] text-lg ml-5 button--1">
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
        class="text-[16px] w-full font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px] px-[60px]">
        Similar numbers:
    </h3>
    <div class="px-[60px] flex flex-col gap-[50px]">
        <div v-if="isPlateSelected && filteredPlates.length > 0" class="mt-[40px]">
            <ul class="flex gap-[20px] flex-wrap">
                <li class="hover:shadow-2xl py-[30px] px-[30px] hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00]"
                    v-for="(plate, index) in filteredPlates" :key="index">
                    <div>
                        <p>Plate: {{ plate.plate }}</p>
                        <p class="w-[180px] h-[24px] text-[20px] font-medium leading-[24px]">
                            Price: <span v-html="plate.price"></span>
                        </p>
                        <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3] pt-16">
                            Emirate: {{ plate.emirate }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div v-if="!isPlateSelected && filteredPlates2.length > 0" class="mt-[40px]">
            <ul class="flex gap-[20px] flex-wrap">
                <li class="flex-1 min-w-[300px] max-w-[426px] h-auto p-4 rounded-[20px] bg-white border-[2px] border-[#B3B3B3] flex flex-col justify-between"
                    v-for="(phone, index) in filteredPlates2" :key="index">
                    <p>Phone: {{ phone.phone }}</p>
                    <p class="w-[180px] h-[24px] text-[20px] font-medium leading-[24px]">Price: <span
                            v-html="phone.price"></span></p>
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3] pt-16">Emirate: {{ phone.emirate
                        }}</p>
                </li>
            </ul>
        </div>
    </div>




    <!-- Пагинация -->
    <div>
        <Pagination class="mt-[70px] px-[50px]" :total-pages="totalPages" :current-page="page"
            @update:page="onPageChange" />
        <!-- <button @click="increaseTotalPages"  class="w-[100px] h-[52px] bg-[#fff] rounded-[20px] border-[1px] border-[#BFBFBF]">add page</button>
        <button @click="decreaseTotalPages" class="w-[100px] h-[52px] bg-[#fff] rounded-[20px] border-[1px] border-[#BFBFBF]">delete page</button> -->
    </div>


</template>






<script>
import { ref, onMounted } from 'vue';
import axios, { AxiosError } from 'axios';
import CardPlate from '../components/Card.vue';
import SimilarNumber from '../components/SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue';
import Pagination from '../components/Pagination/Pagination.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import Card from '../components/Card.vue';
import { useAuthStore } from '@/stores/auth';


export default {
    components: {
        CardPlate,
        SimilarNumber,
        SimilarNumberLowPrice,
        Pagination,
        Card,
    },
    setup() {
        const isExactMatch = ref(false);
        const exactMatchValue = ref('');
        const showMore = ref(false);
        const isChecked = ref(false);
        const priceFrom = ref('');
        const priceTo = ref('');
        const selectedDigits = ref([]);
        const postedDate = ref('Today');
        const isPlateSelected = ref(true);
        const activeButton = ref(null);
        const totalPages = ref(0);
        const page = ref(1);
        const phoneCatalog = ref([]);
        const plateCatalog = ref([]);
        const itemsPerPage = 3;
        const stateinput = ref('');
        const isActive = ref(false);
        const authStore = useAuthStore();
        const token = authStore.authToken;


        const maxprice = ref('150000');
        const pricelow = ref('2000');
        const isActiveinput = ref(false);


        const filteredPlates2 = computed(() => {
            const from = pricelow2.value ? parseFloat(pricelow2.value) : 0;
            const to = maxprice2.value ? parseFloat(maxprice2.value) : Infinity;

            return phoneCatalog.value.filter(item => {

                const priceString = item.price.replace(/[^0-9.]/g, '');
                const price = parseFloat(priceString);


                if (isNaN(price)) {
                    console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
                    return false;
                }

                return price >= from && price <= to;
            });

        });

        const maxprice2 = ref('');
        const pricelow2 = ref('');




        const filteredPlates = computed(() => {
            const from = pricelow.value ? parseFloat(pricelow.value) : 0;
            const to = maxprice.value ? parseFloat(maxprice.value) : Infinity;

            return plateCatalog.value.filter(item => {

                const priceString = item.price.replace(/[^0-9.]/g, '');
                const price = parseFloat(priceString);


                if (isNaN(price)) {
                    console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
                    return false;
                }

                return price >= from && price <= to;
            });
        });




        const enableInput = () => {
            isReadonly.value = false;
        };

        const onPageChange = (newPage) => {
            page.value = newPage;
            fetchPhoneCatalog(page.value);
            fetchPlateCatalog(page.value);
        };

        const shoNumbers = (num) => {
            stateinput.value += num;
        };


        const showPlate = () => {
            isPlateSelected.value = true;
        };

        const showMobile = () => {
            isPlateSelected.value = false;

            const filteredPlates2 = computed(() => {
                const from = pricelow2.value ? parseFloat(pricelow2.value) : 0;
                const to = maxprice2.value ? parseFloat(maxprice2.value) : Infinity;

                return phoneCatalog.value.filter(item => {

                    const priceString = item.price.replace(/[^0-9.]/g, '');
                    const price = parseFloat(priceString);


                    if (isNaN(price)) {
                        console.warn(`Цена для ${item.plate} некорректна: ${item.price}`);
                        return false;
                    }

                    return price >= from && price <= to;
                });

            });

            const maxprice2 = ref('4000');
            const pricelow2 = ref('1000');

        };

        const seeMore = () => {
            showMore.value = !showMore.value;
        };

        const setActive = (buttonType) => {
            activeButton.value = buttonType;
        };

        const getButtonClass = (buttonType) => {
            return {
                'border-[#000000] text-[#000000]': activeButton.value === buttonType,
                'border-[#BFBFBF] text-[#BFBFBF]': activeButton.value !== buttonType,
            };
        };

        const clearFilters = () => {
            stateinput.value = '';
            selectedDigits.value = [];
            postedDate.value = 'Today';
            isExactMatch.value = false;
            exactMatchValue.value = '';
        };

        const fetchPhoneCatalog = async (pageNumber) => {
            try {
                const response = await axios.get(`https://api.dev.numbers.ae/v1/catalog/phone?page=${pageNumber}&order=desc`);
                phoneCatalog.value = response.data.items || response.data;
                totalPages.value = Math.ceil(phoneCatalog.value.length / itemsPerPage);
            } catch (error) {
                console.error('Error fetching phone data:', error);
            }
        };

        const fetchPlateCatalog = async (pageNumber) => {
            try {
                const response = await axios.get(`https://api.dev.numbers.ae/v1/catalog/plate?page=${pageNumber}&order=desc`);
                plateCatalog.value = response.data.items || response.data;
                totalPages.value = Math.ceil(phoneCatalog.value.length / itemsPerPage);
            } catch (error) {
                console.error('Error fetching plate data:', error);
            }
        };
        const getSettingForSelect = async () => {
            try {
                const response = await axios.get(`https://api.dev.numbers.ae/v1/account/operators/list`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            } catch (error) {
                console.error('проблемы брат', error);
            }
        };

        const getOperatorList = async () => {
            try {
                const response = await axios.get(`https://api.dev.numbers.ae/v1/account/operators/list`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data && response.data.success) {
                    const operators = response.data.result.items; 
                    const selectElement = document.getElementById('emirate'); 

                 
                    selectElement.innerHTML = '';

                  
                    operators.forEach((operator) => {
                        const option = document.createElement('option');
                        option.value = operator.id; 
                        option.textContent = operator.name; 
                        selectElement.appendChild(option);
                    });
                }
            } catch (e) {
                console.error('Ошибка при получении операторов:', e);
            }
        };

        const getNumberList = async () => {
    try {
        const response = await axios.get(`https://api.dev.numbers.ae/v1/account/operators/codes/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.data && response.data.success) {
            const codes = response.data.result.items; 
            const selectElement = document.getElementById('code-list'); 
            selectElement.innerHTML = '';
            codes.forEach((code) => {
                const option = document.createElement('option');
                option.value = code.id;
                option.textContent = code.name || code.code; 
                selectElement.appendChild(option);
            });
        }
    } catch (e) {
        console.error('Ошибка при получении кодов:', e);
    }
};





        const getPlatesForPage = computed(() => {
            const start = (page.value - 1) * itemsPerPage;
            return plateCatalog.value.slice(start, start + itemsPerPage);
        });

        const getPhonesForPage = computed(() => {
            const start = (page.value - 1) * itemsPerPage;
            return phoneCatalog.value.slice(start, start + itemsPerPage);
        });

        onMounted(() => {
            fetchPhoneCatalog(page.value);
            fetchPlateCatalog(page.value, 1);
            getSettingForSelect()
            getOperatorList()
            getNumberList()
        });






        return {
            isExactMatch,
            exactMatchValue,
            showMore,
            isChecked,
            priceFrom,
            priceTo,
            selectedDigits,
            postedDate,
            isPlateSelected,
            activeButton,
            totalPages,
            page,
            onPageChange,
            showPlate,
            showMobile,
            seeMore,
            setActive,
            getButtonClass,
            clearFilters,
            phoneCatalog,
            plateCatalog,
            fetchPlateCatalog,
            getPlatesForPage,
            getPhonesForPage,
            stateinput,
            shoNumbers,
            stateinput,
            isReadonly,
            enableInput,
            stateinput,
            isActive,
            maxprice,
            pricelow,
            filteredPlates,
            filteredPlates2,
        };
    },
};
</script>
<style>
.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.dots span {
    width: 10px;
    height: 10px;
    background-color: #2b4dbd;
    border-radius: 50%;
    animation: blink 1.5s infinite ease-in-out;
}

.dots span:nth-child(1) {
    animation-delay: 0s;
}

.dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes blink {

    0%,
    80%,
    100% {
        opacity: 0;
    }

    40% {
        opacity: 1;
    }
}

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

@media(max-width: 530px) {
    .dots {
        margin-top: 80px;
    }

}
</style>
