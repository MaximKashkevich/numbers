<template>
    <div>
      <nav class="px-[20px] md:px-[60px] mt-[30px]">
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                Home /
            </NuxtLink>
            <NuxtLink to="/GeneralEmpty" class="text-blue-500 cursor-pointer">
              My Dashboard /
            </NuxtLink>
            <span class="text-[#BFBFBF]"> Payment history</span>
        </nav>
      <div
        class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container"
      >
        <div class="w-full md:w-[300px] lg:w-[500px]">
          <SideBar class="sidebar" />
        </div>
  
        <div class="flex-1">
          <h1
            class="w-full text-[50px] font-medium leading-[50px] text-left uppercase lg:text-[40px] md:text-[35px]"
          >
            Payment history
          </h1>
          <div>
            <!-- Table header -->
            <ul
              class="w-full max-w-[872px] h-[52px] rounded-[10px] border border-[#BFBFBF] bg-[#FFFFFF] flex justify-between items-center mt-[30px] text-[16px] md:text-[14px] flex-wrap"
            >
              <li class="w-[100px] md:w-[80px] ">
                <p class="font-roboto font-medium ml-[15px] text-[16px]">Number</p>
              </li>
              <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
  
              <li class="w-[330px] md:w-[200px] ">
                <p class="font-roboto font-medium ml-[15px] text-[16px]">Name of payment</p>
              </li>
              <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
  
              <li class="w-[140px] md:w-[100px] ">
                <p class="font-roboto font-medium w-[100px] text-[16px]">Amount, AED</p>
              </li>
              <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
  
              <li class="w-[100px] md:w-[80px] ">
                <p class="font-roboto font-medium ml-[15px] text-[16px]">Date</p>
              </li>
              <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
  
              <li class="w-[140px] ">
                <p class="font-roboto font-medium ml-[15px] text-[16px]">Status</p>
              </li>
            </ul>
  
            <!-- Table content -->
            <ul
              class="w-full max-w-[872px] h-auto rounded-[10px] border border-[#BFBFBF] bg-[#FAFAFA] mt-[30px] flex-wrap"
            >
              <li class="w-full">
                <ul class="w-full flex justify-between flex-wrap text-[16px] ">
                  <li class="w-[100px] md:w-[80px]">
                    <p class="font-roboto mt-[15px] ml-[15px]">11113</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[330px] md:w-[200px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">6 months tariff</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[140px] md:w-[100px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">5000</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[100px] md:w-[80px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">24.12.24</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[140px] ">
                    <p class="font-roboto mt-[15px] text-[#EA0038]">Payment error</p>
                  </li>
                  <div class="w-full max-w-[872px] border-b border-[#BFBFBF]"></div>
                </ul>
               
              </li>
              <li class="w-full">
                <ul class="w-full flex justify-between flex-wrap  ">
                  <li class="w-[100px] md:w-[80px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">11113</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[330px] md:w-[200px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">6 months tariff</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[140px] md:w-[100px]">
                    <p class="font-roboto mt-[15px] ml-[15px]">5000</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[100px] md:w-[80px] ">
                    <p class="font-roboto mt-[15px] ml-[15px]">24.12.24</p>
                  </li>
                  <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>
                  <li class="w-[140px]">
                    <p class="font-roboto mt-[15px]  text-[#EA0038]">Payment error</p>
                  </li>
                  
                </ul>
                <div class="w-full max-w-[872px] border-b border-[#BFBFBF]"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
import SideBar from '../components/general/SideBar.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';


export default {
    components: {
        SideBar,
        MiniButton,
        ButtonBlue,
    },
    data() {
        return {
            activeButton: null,
            isCheckboxChecked: false,
            isCheckboxChecked2: false,
            isCheckboxChecked3: false,
            isChecked: false,
        };
    },
    methods: {
        setActive(buttonType) {
            this.activeButton = buttonType;
        },
        getButtonClass(buttonType) {
            return {
                'border-[#000000] text-[#000000]': this.activeButton === buttonType,
                'border-[#BFBFBF] text-[#BFBFBF]': this.activeButton !== buttonType,
            };
        },
    },
    computed: {
        selectClasses() {
            return {
                'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]': true,
                'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked,
                'cursor-not-allowed': !this.isCheckboxChecked,
            };
        },
        selectClasses2() {
            return {
                'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]': true,
                'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked2,
                'cursor-not-allowed': !this.isCheckboxChecked2,
            };
        },
        selectClasses3() {
            return {
                'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked3,
                'cursor-not-allowed': !this.isCheckboxChecked3,
                'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-full py-[15px] px-[20px]': true,
            };
        },
    },
};
</script>

<style scoped>
select {
    font-size: 16px;
    font-weight: 500;
}

@media (max-width: 1200px) {
    .big-container {
        width: 80%;
        /* Уменьшение ширины контейнера при экранах меньше 1200px */
    }
}

@media (max-width: 992px) {
    .big-container {
        width: 90%;
        /* Еще большее уменьшение для меньших экранов */
    }
}

@media (max-width: 768px) {
    .big-container {
        width: 100%;
        /* Полная ширина для мобильных устройств */
    }
}

@media (max-width: 600px) {
    h1 {
        font-size: 30px;
        /* Уменьшение заголовка для мобильных экранов */
    }

    .sidebar {
        width: 100%;
        /* Сайдбар занимает всю ширину на маленьких экранах */
    }

    button {
        width: 100%;
        /* Кнопки занимают всю ширину */
    }
}
</style>