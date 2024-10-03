<template>
    <div>
        <nav class="px-[20px] md:px-[60px] mt-[30px]">
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                Home /
            </NuxtLink>
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                My Dashboard /
            </NuxtLink>
            <span class="text-[#BFBFBF]"> Add listing</span>
        </nav>

        <div
            class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
            <div class="w-full md:w-[300px] lg:w-[500px]">
                <SideBar class="sidebar" />
            </div>

            <div class="flex-1">
                <h1 class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase">
                    Add purchase orders
                </h1>
                <div>
                    <div>
                        <div class="flex flex-col md:flex-row gap-[20px] mt-[50px] mb-[70px]">
                            <button @click="setActive('plate')" :class="getButtonClass('plate')"
                                class="w-full max-w-[426px] h-[52px] px-[50px] py-[14px] gap-[20px] rounded-[100px]  font-roboto text-[20px] font-bold leading-[24px] uppercase flex justify-center items-center transition-all duration-300 border-[2px] border-[#000000]">
                                plate number
                            </button>
                            <button @click="setActive('phone')" :class="getButtonClass('phone')"
                                class="w-full max-w-[426px] h-[52px] px-[50px] py-[14px] gap-[20px] rounded-[100px] font-roboto text-[20px] font-bold leading-[24px] uppercase flex justify-center items-center transition-all duration-300 border-[2px] border-[#000000]">
                                phone number
                            </button>
                        </div>
                        <div class="">
                            <div class="flex  justify-between items-center w-full  ">
                                <div class="mt-[15px] flex items-center gap-[10px]">
                                    <input type="checkbox" id="custom-checkbox-3"
                                        class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox border-[#000000]">
                                    <label for="custom-checkbox-3" class="relative font-medium gap-[10px]">
                                        Select all
                                    </label>
                                </div>
                                <NuxtLink
                                    class="text-[#005DCA] text-[20px] font-bold leading-[24px] uppercase mt-[10px] link">
                                    Add selected ones to collection
                                </NuxtLink>
                                <NuxtLink
                                    class="text-[#005DCA] text-[20px] font-bold leading-[24px] uppercase mt-[10px] link">
                                    Delete selected
                                </NuxtLink>
                            </div>
                            <div>
                                <ul
                                    class="w-full max-w-[872px]  h-[52px] rounded-[10px] border border-[#BFBFBF] bg-[#FFFFFF] flex justify-end items-center mt-[30px]">
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                                    <li class="w-[50px] ">
                                    </li>

                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                                    <li class="w-[130px] ml-[15px]">
                                        <p
                                            class="w-[72px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            Number</p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <p
                                            class="w-[72px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            City</p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <p
                                            class="w-[72px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            Code</p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[150px] ml-[15px]">
                                        <p
                                            class="w-[72px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            Design</p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p
                                            class="w-[137px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            Price, AED</p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p
                                            class="w-[127px] h-[24px] font-roboto text-[20px] font-medium leading-[24px] text-left">
                                            Discount, AED</p>
                                    </li>
                                </ul>

                            </div>
                            <ul
                                class="w-[872px] h-[880px] rounded-[10px] border-[1px] border-[#BFBFBF] bg-[#FAFAFA] justify-end mt-[10px] ">
                                <div class="bg-[#BFBFBF] opacity-50 w-[1px] "></div>
                                <ul
                                    class="w-[872px] h-[52px] rounded-[10px] F] bg-[##FAFAFA] flex justify-start items-center">
                                    <li class="w-[50px] flex justify-center items-center ">
                                        <input type="checkbox" id="custom-checkbox-3" v-model="isChecked"
                                            class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox border-[#000000]">
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[130px] ml-[15px]">
                                        <p
                                            class="w-[72px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left">
                                            {{ isChecked ? '21721' : 'Number' }}
                                        </p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[75px]">
                                            <option>Dubai</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[75px]">
                                            <option>AA</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[150px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[120px]">
                                            <option>Base</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p
                                            class="w-[137px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left">
                                            {{ isChecked ? '5000' : 'Price, AED' }}
                                        </p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p
                                            class="w-[127px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left">
                                            {{ isChecked ? '4000' : 'Discount, AED' }}
                                        </p>
                                    </li>

                                </ul>
                                <div class="w-full max-w-[872px]  border-b border-[#BFBFBF]">
                                </div>

                                <ul
                                    class="w-[872px] h-[52px] rounded-[10px] F] bg-[##FAFAFA] flex justify-start items-center">
                                    <li class="w-[50px] flex justify-center items-center ">
                                        <input type="checkbox" id="custom-checkbox-3" v-model="isChecked"
                                            class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox border-[#000000]">
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[130px] ml-[15px]">
                                        <p :class="{
                                            'w-[100px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left': true,
                                            'text-[#BFBFBF]': !isChecked,
                                            'text-[#000000]': isChecked
                                        }">
                                            {{ isChecked ? '5000' : 'Number' }}
                                        </p>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[75px]">
                                            <option>Dubai</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[100px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[75px]">
                                            <option>AA</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[150px] ml-[15px]">
                                        <select id="code" name="code" class="border-[#000000] bg-[#FAFAFA] w-[120px]">
                                            <option>Base</option>
                                            <option>None</option>
                                        </select>
                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p :class="{
                                            'w-[137px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left': true,
                                            'text-[#BFBFBF]': !isChecked,
                                            'text-[#000000]': isChecked
                                        }">
                                            {{ isChecked ? '5000' : 'Price, AED' }}
                                        </p>

                                    </li>
                                    <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

                                    <li class="w-[167px] ml-[15px]">
                                        <p :class="{
                                            'w-[137px] h-[24px] font-roboto text-[16px] font-medium leading-[24px] text-left': true,
                                            'text-[#BFBFBF]': !isChecked,
                                            'text-[#000000]': isChecked
                                        }">
                                            {{ isChecked ? '5000' : 'Discount, AED' }}
                                        </p>
                                    </li>
                                    
                                </ul>
                                <div class="w-full max-w-[872px]  border-b border-[#BFBFBF]"></div>
                            </ul>
                            

                        </div>


                        <ButtonBlue class="flex justify-center items-center w-[280px] md:w-[280px] h-[52px] mt-[70px]">
                            Add all numbers
                        </ButtonBlue>


                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import SideBar from '../components/general/SideBar.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';

// Reactive data using refs
const activeButton = ref(null);
const isChecked = ref(false);

// Methods
const setActive = (buttonType) => {
    activeButton.value = buttonType;
};

const getButtonClass = (buttonType) => {
    return {
        'border-[#000000] text-[#000000]': activeButton.value === buttonType,
        'border-[#BFBFBF] text-[#BFBFBF]': activeButton.value !== buttonType,
    };
};

// Computed classes
const selectClasses = computed(() => {
    return {
        'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]': true,
        'border-[#BFBFBF] text-[#BFBFBF]': !isChecked.value,
        'cursor-not-allowed': !isChecked.value,
    };
});
</script>


<style scoped>
.checkbox {
    appearance: none;
    position: relative;
    background: #fff;
}

.checkbox:checked::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -90%);
    color: blue;
}

.checkbox:not(:checked)::before {
    content: none;
}

select {
    font-size: 16px;
    font-weight: 500;
}

@media (max-width: 1200px) {
  .big-container {
    width: 80%; /* Уменьшение ширины контейнера при экранах меньше 1200px */
  }
}

@media (max-width: 992px) {
  .big-container {
    width: 90%; /* Еще большее уменьшение для меньших экранов */
  }
}

@media (max-width: 768px) {
  .big-container {
    width: 100%; /* Полная ширина для мобильных устройств */
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 30px; /* Уменьшение заголовка для мобильных экранов */
  }
  
  .sidebar {
    width: 100%; /* Сайдбар занимает всю ширину на маленьких экранах */
  }

  button {
    width: 100%; /* Кнопки занимают всю ширину */
  }
}
</style>