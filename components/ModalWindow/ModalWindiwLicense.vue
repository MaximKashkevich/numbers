<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal " @click.stop>
            <div class="flex justify-end mt-[-30px] mr-[-30px] img-container">
                <button @click="closeModal" aria-label="Close modal">
                    <svg class="img-img"  viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.5662 20.2687C21.2079 19.9104 20.627 19.9104 20.2687 20.2687C19.9104 20.627 19.9104 21.2079 20.2687 21.5662L28.7029 30.0005L20.2693 38.4341C19.911 38.7924 19.911 39.3733 20.2693 39.7316C20.6276 40.0899 21.2085 40.0899 21.5668 39.7316L30.0004 31.298L38.4337 39.7313C38.792 40.0896 39.3729 40.0896 39.7312 39.7313C40.0894 39.373 40.0894 38.7921 39.7312 38.4338L31.2979 30.0005L39.7318 21.5666C40.0901 21.2083 40.0901 20.6274 39.7318 20.2691C39.3735 19.9108 38.7926 19.9108 38.4343 20.2691L30.0004 28.703L21.5662 20.2687Z"
                            fill="#BFBFBF" />
                    </svg>

                </button>
            </div>

            <div>
                <h1 class="text-[35px] font-bold leading-[24px] text-left  title-window ">
                    Your license has already expired.
                </h1>
                <p class="font-normal text-[16px] mt-[10px]">
                    To start publishing ads again, pay any applicable rate
                </p>

                <div class="text-left md:text-center"> <!-- измените на text-left для мобильных -->
                       
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 cards-container-2">
                        <div
                            class="w-full h-auto py-[30px] px-[20px] border-[1px] border-[#BFBFBF] rounded-[20px] bg-[#FAFAFA] hover:shadow-2xl transition">
                            <h2 class="font-medium text-[50px] leading-[50px]">FREE</h2>
                       
                            <ol class="list-disc my-[30px] pl-5">
                                <li>Plate or phone</li>
                                <li>1 ad for sale</li>
                                <li>No update</li>
                            </ol>
                            <ButtonBlue class="w-[210px] h-[52px] flex justify-center items-center">
                                pay</ButtonBlue>
                        </div>
                        <div
                            class="w-full h-auto py-[30px] px-[20px]  border-[1px] border-[#BFBFBF] rounded-[20px] bg-[#FAFAFA] hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$69</span>
                            <ol class="list-disc my-[30px] pl-5">
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="w-[210px] h-[52px] flex justify-center items-center">
                                pay</ButtonBlue>
                        </div>
                        <div
                            class="w-full h-auto py-[30px] px-[20px]  border-[1px] border-[#BFBFBF] rounded-[20px] bg-[#FAFAFA] hover:shadow-2xl transition">
                            <span class="font-medium text-[50px] leading-[50px]">$109</span>
                   
                            <ol class="list-disc my-[30px] pl-5">
                                <li>Plate or phone</li>
                                <li>Any number of ads</li>
                                <li>Updates every 7 days</li>
                            </ol>
                            <ButtonBlue class="w-[210px] h-[52px] flex justify-center items-center">
                                pay</ButtonBlue>
                        </div>
                    </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import CardLicenses from '../CardLicenses/CardLicenses.vue';
import { ref } from 'vue';

const isVisible = ref(true);

function closeModal() {
    isVisible.value = false;
}
</script>

<style>
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

.cards-container-2 {
    width: auto;
    margin-top: 40px;
    max-height: 530px;
    height: 100%;
    overflow-y: auto;
    margin-bottom: 20px;
}

.modal {
    width: 895px;
    max-width: 900px;
    height: auto;
    background: #FAFAFA;
    position: relative;
    padding: 50px 20px;
    gap: 50px;
    border-radius: 20px;
    opacity: 1;

    padding-left: 50px;
    padding-right: 50px;
}

.img-img{
    width: 60px;
    height: 50px;
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

    h1 {
        font-size: 18px;
        line-height: 22px;
    }
}

@media (max-width: 1024px) {
    h1 {
        font-size: 18px;
    }

    .modal {
        padding: 40px 25px;
    }

    .img-container {
        margin-right: 5px;
        padding-top: 10px;
    }
}

@media (max-width: 400px) {
    h1 {
        font-size: 14px;
    }
}

@media (max-width: 820px) {
    .cards-container-2 {
        flex-wrap: wrap;
    }

    .title-window {
        font-size: 25px;
    }
}
@media (max-width: 620px) {
    .cards-container-2 {
        max-height: 300px; /* Ограничиваем высоту контейнера карточек */
        overflow-y: auto; /* Добавляем вертикальный скролл */
    }
}



</style>
