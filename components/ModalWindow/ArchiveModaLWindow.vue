<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal" @click.stop>
            <div class="flex justify-end mt-[-30px] mr-[-30px] img-container">
                <button @click="closeModal" aria-label="Close modal" class="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5667 0.268722C1.20841 -0.0895738 0.627502 -0.0895739 0.269208 0.268722C-0.0890854 0.627017 -0.0890848 1.20793 0.269209 1.56622L8.70342 10.0005L0.269829 18.4341C-0.0884647 18.7924 -0.0884647 19.3733 0.269829 19.7316C0.628122 20.0899 1.20903 20.0899 1.56733 19.7316L10.0009 11.298L18.4341 19.7313C18.7924 20.0896 19.3734 20.0896 19.7316 19.7313C20.0899 19.373 20.0899 18.7921 19.7316 18.4338L11.2984 10.0005L19.7323 1.56658C20.0906 1.20828 20.0906 0.62737 19.7323 0.269075C19.374 -0.0892205 18.7931 -0.08922 18.4348 0.269075L10.0009 8.70297L1.5667 0.268722Z"
                            fill="#BFBFBF" />
                    </svg>
                </button>
            </div>

            <div>
                <h1 class="text-[20px] font-bold leading-[24px] text-left uppercase">
                    plate number
                </h1>
                <div class="flex justify-between mt-[30px]">
                    <h2 class="text-[35px] font-medium leading-[42px] w-[450px]">
                        Dubai plate number for sale: AA 14611
                    </h2>
                    <h2 class="text-[35px] font-medium leading-[42px] text-[#BFBFBF]">
                        to 20 000 AED
                    </h2>
                </div>
                <div class="flex justify-between items-center">
                    <p class="text-[14px] font-normal text-[#BFBFBF] leading-[16.8px] text-left mt-[10px]">
                        ID: 65131
                    </p>
                    <button @click="toggleButton"
                        class="w-[232px] h-[35px] flex gap-[30px] rounded-[100px] justify-center items-center text-white text-[20px] button-blue bg-[#005DCA]">
                        {{ buttonText }}
                        <svg v-if="isDeactivated" width="21" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="19" height="19" rx="9.5" stroke="white" />
                            <rect x="2.95703" y="16.6016" width="20" height="1.33333"
                                transform="rotate(-45 2.95703 16.6016)" fill="white" />
                        </svg>
                        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="white" />
                            <path
                                d="M10.0008 6.36233V8.18052L12.4251 5.75627L10.0008 3.33203V5.15021C8.71493 5.15021 7.4817 5.66103 6.57243 6.5703C5.66316 7.47957 5.15234 8.7128 5.15234 9.9987C5.15234 10.9502 5.43113 11.8351 5.90386 12.5805L6.78871 11.6957C6.50899 11.1739 6.36321 10.5908 6.36446 9.9987C6.36446 9.03427 6.74758 8.10935 7.42953 7.4274C8.11148 6.74545 9.03641 6.36233 10.0008 6.36233ZM14.0978 7.41688L13.2129 8.30173C13.4796 8.81082 13.6372 9.39264 13.6372 9.9987C13.6372 10.9631 13.2541 11.888 12.5721 12.57C11.8902 13.2519 10.9653 13.6351 10.0008 13.6351V11.8169L7.57659 14.2411L10.0008 16.6654V14.8472C11.2867 14.8472 12.52 14.3364 13.4292 13.4271C14.3385 12.5178 14.8493 11.2846 14.8493 9.9987C14.8493 9.04718 14.5705 8.16233 14.0978 7.41688Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>

            </div>
            <div class="pt-[10px]">
                <p class="text-[16px] font-normal leading-[19.2px] text-[#BFBFBF] mt-[50px]">
                    Specifications Requested:
                </p>
                <div class="flex flex-wrap button-container gap-[10px] mt-[10px] container-3 justify-between ">
                    <div class="flex flex-wrap gap-[10px]">
                        <div
                            class="w-[95px] sm:w-[95px] lg:w-[95px] h-[40px] rounded-[10px] border-[1px] border-[#BFBFBF] px-[10px] sm:px-[20px] py-[10px] flex justify-center items-center">
                            4 digits
                        </div>
                        <div
                            class="w-[95px] h-[40px] text-[14px] sm:text-[16px] rounded-[10px] border-[1px] border-[#BFBFBF] px-[10px] sm:px-[20px] py-[10px] flex justify-center items-center whitespace-nowrap">
                            Dubai
                        </div>
                    </div>

                    <div
                        class="w-[325px] h-[100px] rounded-[20px] border-[1px] border-[#BFBFBF] bg-[#FFFFFF] flex justify-center items-center mt-[-60px]">
                        <img class="grey-img" src="../../public/assets/plate2.png" alt="">
                    </div>
                </div>
            </div>

            <div class="mt-[50px]">
                <p class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#BFBFBF] mb-[10px]">
                    Description:
                </p>
                <p class="font-roboto text-[16px] font-medium leading-[19.2px] text-left">
                    Car licence plate not classic any city number has to be 51255 or 5125
                    Тут может быть довольно большое описание, если покупатель посчитаен нужным расписать прям очень
                    подробные условия, которые ему нужны. Тут может быть довольно большое описание, если покупатель
                    посчитаен нужным расписать прям очень подробные условия, которые ему нужны. Тут может быть довольно
                    большое описание, если покупатель посчитаен нужным расписать прям очень подробные условия, которые
                    ему нужны.
                </p>
            </div>

            <div class="mt-6 flex justify-between">
                <div>
                    <p class="w-full text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#BFBFBF]">
                        Сollection:
                    </p>
                    <p class="mt-[3px] text-[14px] md:text-[16px]">My Numbers123</p>
                </div>
            </div>
            <div class="container-2 mt-[30px] flex justify-between">
                <div>
                    <div class="flex gap-[10px]">
                        <p
                            class="text-[14px] sm:text-[16px] font-normal leading-[18px] lg:leading-[19.2px] text-[#B3B3B3]">
                            Emirate:
                        </p>
                        <p
                            class="text-[14px] sm:text-[16px] text-[#BFBFBF] font-normal leading-[18px] lg:leading-[19.2px]">
                            Dubai
                        </p>
                    </div>
                    <div class="flex pt-[5px] gap-[10px]">
                        <p
                            class="text-[14px] sm:text-[16px] font-normal leading-[18px] lg:leading-[19.2px] text-[#B3B3B3]">
                            Posted Today
                        </p>
                        <p
                            class="text-[14px] sm:text-[16px] text-[#BFBFBF] font-normal leading-[18px] lg:leading-[19.2px]">
                            12 Views
                        </p>

                    </div>
                </div>

                <div>
                    <ButtonBlue class="w-[135px] h-[52px] flex justify-center items-center">
                        Edit ad
                    </ButtonBlue>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';

const isDeactivated = ref(true)
const buttonText = ref('refresh')



const isVisible = ref(true);

function closeModal() {
    isVisible.value = false;
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 60px;
}

.modal {
    width: 900px;
    max-width: 900px;
    height: 740px;
    background: #FFFFFF;
    position: relative;
    padding: 50px 20px;
    gap: 50px;
    border-radius: 20px;
    opacity: 1;
    transition: opacity 0.3s ease;
    overflow-y: auto;
    max-height: 90vh;
    padding-left: 50px;
    padding-right: 50px;
}

.grey-img {
    width: 300px;
    height: 65px;
}



button svg {
    width: 20px;
    height: 20px;
    max-width: 100%;
    max-height: 100%;

}

@media (max-width: 640px) {
    .modal {
        width: 95vw;
        padding: 30px 15px;
        border-radius: 10px;
    }

    h1,
    h2 {
        font-size: 18px;
        line-height: 22px;
    }

    .button-container div {
        width: auto;
        padding: 5px 10px;
    }
}

@media (max-width: 1024px) {
    h1 {
        font-size: 18px;
    }

    h2 {
        font-size: 28px;
    }

    .modal {
        padding: 40px 25px;
    }

    .img-container {
        margin-right: 5px;
        padding-top: 10px;
    }
}

@media (max-width: 620px) {
    h1 {
        font-size: 18px;
    }

    h2 {
        font-size: 18px;
    }


}

@media (max-width: 400px) {
    h1 {
        font-size: 14px;
    }

    h2 {
        font-size: 14px;
    }


}
</style>