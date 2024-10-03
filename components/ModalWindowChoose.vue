<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal custom-scrollbar" @click.stop>
            <div class="flex justify-end mt-[-20px] mb-[px]  img-container">
                <button @click="closeModal" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5667 0.268722C1.20841 -0.0895738 0.627502 -0.0895739 0.269208 0.268722C-0.0890854 0.627017 -0.0890848 1.20793 0.269209 1.56622L8.70342 10.0005L0.269829 18.4341C-0.0884647 18.7924 -0.0884647 19.3733 0.269829 19.7316C0.628122 20.0899 1.20903 20.0899 1.56733 19.7316L10.0009 11.298L18.4341 19.7313C18.7924 20.0896 19.3734 20.0896 19.7316 19.7313C20.0899 19.373 20.0899 18.7921 19.7316 18.4338L11.2984 10.0005L19.7323 1.56658C20.0906 1.20828 20.0906 0.62737 19.7323 0.269075C19.374 -0.0892205 18.7931 -0.08922 18.4348 0.269075L10.0009 8.70297L1.5667 0.268722Z"
                            fill="#BFBFBF" />
                    </svg>
                </button>
            </div>
            <h1 class="text-[35px] font-bold leading-[24px] text-left ">
                    Create a new collection
                </h1>
             <div class="cards-container custom-scrollbar ">
          
               <div class="">
                <div
                    class="grid lg:grid-cols-2  grid-cols-1  gap-x-[20px] gap-y-[20px] ">
                    <ChooseCard v-for="(item, index) in cards" :key="index" />
                </div>
            </div>

            <div
                class="w-full max-w-[390px] h-[200px] px-[40px] rounded-[20px] bg-[#FFFFFF] text-center flex flex-col justify-center items-center white-container mt-[20px]">
                <p class="w-[346px] h-[42px] pt-[80px] mb-[40px] text-[35px] font-medium leading-[42px] text-center ">
                    Create more
                </p>
                <button class="flex justify-center mt-[20px] mb-[80px]">
                    <svg class="img" width="100" height="100" viewBox="0 0 100 100" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="98" height="98" rx="49" stroke="#005DCA" stroke-width="2" />
                        <path
                            d="M67.0557 47.7764V51.6387H32.9443V47.7764H67.0557ZM51.9141 31.8828V68.1133H47.8125V31.8828H51.9141Z"
                            fill="#005DCA" />
                    </svg>
                </button>
            </div> 
             </div>
            
        </div>
    </div>
</template>

<script setup>
import ChooseCard from './ChooseCard.vue';
import { ref } from 'vue';

const isVisible = ref(true);
const cards = Array.from({ length: 6 }, (_, i) => ({ id: i }));

function closeModal() {
    isVisible.value = false;
}
</script>

<style>
.img {
    width: 100px;
    height: 100px;
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
    padding-right: 30px;
}

.cards-container {
    margin-top: 40px;
    max-height: 500px; /* Максимальная высота контейнера с карточками */
    height: 100%; /* Чтобы занять всю доступную высоту */
    overflow-y: auto; /* Включаем вертикальный скролл */
    margin-bottom: 20px;
   
}

/* Стили для кастомного скролла */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 100%; /* Добавляем фиксированную высоту для скроллбара */
   
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #005DCA; /* Цвет скроллбара */
    border-radius: 10px;
    height: 100px; /* Высота самой полоски скролла */
    
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #004bb5; /* Темнее при наведении */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
    border: 1px solid #BFBFBF;
    height: 100%; /* Высота трека скроллбара */
    
}


button svg {
    width: 20px;
    height: 20px;
    max-width: 100%;
    max-height: 100%;
}
</style>
