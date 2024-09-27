<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal custom-scrollbar" @click.stop>
            <div class="flex justify-end mt-[-20px] mb-[-20px]  img-container">
                <button @click="closeModal" aria-label="Close modal" class="img-modal">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="img-2">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5667 0.268722C1.20841 -0.0895738 0.627502 -0.0895739 0.269208 0.268722C-0.0890854 0.627017 -0.0890848 1.20793 0.269209 1.56622L8.70342 10.0005L0.269829 18.4341C-0.0884647 18.7924 -0.0884647 19.3733 0.269829 19.7316C0.628122 20.0899 1.20903 20.0899 1.56733 19.7316L10.0009 11.298L18.4341 19.7313C18.7924 20.0896 19.3734 20.0896 19.7316 19.7313C20.0899 19.373 20.0899 18.7921 19.7316 18.4338L11.2984 10.0005L19.7323 1.56658C20.0906 1.20828 20.0906 0.62737 19.7323 0.269075C19.374 -0.0892205 18.7931 -0.08922 18.4348 0.269075L10.0009 8.70297L1.5667 0.268722Z"
                            fill="#BFBFBF" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-between mr-[50px] items-center flex-wrap gap-[20px]  ">
                <h1 class="text-[35px] font-bold leading-[24px] text-left ">
                    Select numbers
                </h1>
                <ButtonBlue class="w-[128px] h-[52px] flex justify-center items-center">
                    Add 10
                </ButtonBlue>

            </div>
            <div class="flex wrap-container mt-[35px]">
                <div class="mr-[20px]  flex-wrap wrap-container">
                    <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
                        for="type">Type:</label>
                    <div class="mt-[10px] flex gap-[10px]">
                        <button :class="getButtonClass('plate')" @click="setActive('plate')"
                            class="btn-blck w-[130px] h-[47px] rounded-[100px] text-[16px] font-normal border-[1px] border-[#BFBFBF] leading-[19.2px] flex justify-center items-center text-center">
                            Plate
                        </button>
                        <button :class="getButtonClass('mobile')" @click="setActive('mobile')"
                            class="btn-blck w-[130px] h-[47px] rounded-[100px] text-[16px] font-normal border-[1px] border-[#BFBFBF] leading-[19.2px] flex justify-center items-center text-center">
                            Mobile
                        </button>

                    </div>
                </div>
                <div class="flex  cntrn gap-[20px] mt-[-2px]">
                    <div class="container  ">
                        <label for="emirate"
                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</label>
                        <select id="emirate" name="emirate"
                            class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[160px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                            <option value="city">Dubai</option>
                            <option value="city">Abu Dhabi</option>
                            <option value="city">Ajman</option>
                            <option value="city">Umm Al Quwain</option>
                            <option value="city">Ras Al Khaimah</option>
                            <option value="city">None</option>
                        </select>
                    </div>
                    <div>
                        <label for="code"
                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Number:</label>
                        <select id="emirate" name="code"
                            class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[160px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                            <option>12345</option>
                            <option>None</option>
                        </select>
                    </div>
                    <div>
                        <label for="sort"
                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Sort
                            by:</label>
                        <select id="emirate" name="sort"
                            class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[160px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                            <option>Latest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="cards-container custom-scrollbar ">

                <div class="">
                    <div v-if="activeButton === 'mobile'" class="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                        <CardPlusMinus />
                    </div>
                    <div v-if="activeButton === 'plate'" class="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                        <Card3 />
                        <Card2 />
                        <Card3 />
                        <Card2 />
                        <Card3 />
                        <Card2 />
                        <Card3 />
                        <Card2 />
                        <Card3 />
                        <Card2 />
                    </div>
                </div>



            </div>
        </div>

    </div>




</template>

<script setup>
import ChooseCard from './ChooseCard.vue';
import ButtonBlue from './Button-blue/ButtonBlue.vue';
import CardPlusMinus from './ButtonPLuss/CardPlusMinus.vue';
import Card2 from './ButtonPLuss/Card2.vue';
import Card3 from './ButtonPLuss/Card3.vue';



import { ref } from 'vue';

const isVisible = ref(true);
const activeButton = ref(null);
const cards = Array.from({ length: 6 }, (_, i) => ({ id: i }));

function closeModal() {
    isVisible.value = false;
}

function setActive(buttonType) {
    activeButton.value = buttonType;
}

function getButtonClass(buttonType) {
    return {
        'border-black bg-black text-white': activeButton.value === buttonType,
        'border-[#BFBFBF] text-[#000000] bg-transparent': activeButton.value !== buttonType,
    };
}
</script>

<style>
.img {
    width: 100px;
    height: 100px;
}
.img-modal{
    width: 20px;
    height: 20px;
}

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
    width: 1000px;
    max-width: 1000px;
    background: #FAFAFA;
    position: relative;
    padding: 50px 20px;
    gap: 50px;
    border-radius: 20px;
    opacity: 1;
    height: 700px;
    padding-left: 30px;
    padding-right: 10px;
}

.cards-container {
    margin-top: 40px;
    max-height: 500px;
    /* Максимальная высота контейнера с карточками */
    height: 100%;
    /* Чтобы занять всю доступную высоту */
    overflow-y: auto;
    /* Включаем вертикальный скролл */
    margin-bottom: 20px;

}

/* Стили для кастомного скролла */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 100%;
    /* Добавляем фиксированную высоту для скроллбара */

}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #005DCA;
    /* Цвет скроллбара */
    border-radius: 10px;
    height: 100px;
    /* Высота самой полоски скролла */

}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #004bb5;
    /* Темнее при наведении */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
    border: 1px solid #BFBFBF;
    height: 100%;
    /* Высота трека скроллбара */

}

.btn-blck:hover {
    background-color: #000000;
    color: #ffffff;
}

button svg {
    width: 20px;
    height: 20px;
    max-width: 100%;
    max-height: 100%;
}
@media(max-width: 650px){
  .modal{
    height: 800px;
  
  }
  .cntrn{
    flex-wrap: wrap;
  }
}
@media(max-width: 999px){
.wrap-container{
    flex-wrap: wrap;
}
}
</style>
