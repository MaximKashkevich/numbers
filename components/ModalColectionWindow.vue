<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal" @click.stop>
            <div class="flex justify-end mt-[-30px] mr-[-30px] img-container">
                <button @click="closeModal" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5667 0.268722C1.20841 -0.0895738 0.627502 -0.0895739 0.269208 0.268722C-0.0890854 0.627017 -0.0890848 1.20793 0.269209 1.56622L8.70342 10.0005L0.269829 18.4341C-0.0884647 18.7924 -0.0884647 19.3733 0.269829 19.7316C0.628122 20.0899 1.20903 20.0899 1.56733 19.7316L10.0009 11.298L18.4341 19.7313C18.7924 20.0896 19.3734 20.0896 19.7316 19.7313C20.0899 19.373 20.0899 18.7921 19.7316 18.4338L11.2984 10.0005L19.7323 1.56658C20.0906 1.20828 20.0906 0.62737 19.7323 0.269075C19.374 -0.0892205 18.7931 -0.08922 18.4348 0.269075L10.0009 8.70297L1.5667 0.268722Z"
                            fill="#BFBFBF" />
                    </svg>
                </button>
            </div>

            <div>
                <h1 class="text-[35px] font-bold leading-[24px] text-left mt-[10px]">
                    Create a new collection
                </h1>

                <div class="relative w-full mt-[50px]">
                    <input type="text" placeholder="Name the collection"
                        class="w-full h-[50px] py-2 pl-4 pr-10 border border-gray-300 rounded-[20px] focus:outline-none bg-[#FFFFFF] focus:border-gray-400">
                    <img src="../public/assets/pencil.svg" alt="pencil" class="absolute right-[35px] top-2.5 w-5 h-5">
                </div>

                <ButtonBlue class="max-w-[510px] text-btn w-full mt-[30px]">
                    Add 12 selected ads to the collection
                </ButtonBlue>

                <div class="flex mt-[80px] font-bold" @click="closeModal" aria-label="Close modal">
                    <a href="" class="text-[20px] w-[52px] h-[24px] text-[#005DCA] uppercase">Back</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonBlue from './Button-blue/ButtonBlue.vue';
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

.modal {
    width: 900px;
    max-width: 900px;
    background: #FAFAFA;
    position: relative;
    padding: 50px 20px;
    gap: 50px;
    border-radius: 20px;
    opacity: 1;
    overflow: hidden; /* Убираем скролл */
    padding-left: 50px;
    padding-right: 50px;
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
    .text-btn{
        font-size: 11px;
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
</style>
