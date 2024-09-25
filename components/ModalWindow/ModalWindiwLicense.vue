<template>
    <div v-if="isVisible" class="modal-overlay flex justify-center">
        <div class="modal " @click.stop>
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
                <h1 class="text-[35px] font-bold leading-[24px] text-left mt-[10px] title-window ">
                    Your license has already expired.
                </h1>
                <p class="font-normal text-[16px] mt-[10px]">
                    To start publishing ads again, pay any applicable rate
                </p>
                
                <div class=" cards-container-2 flex gap-[20px] mt-[50px]  custom-scrollbar">
                    <CardLicenses/>
                    <CardLicenses/>
                    <CardLicenses/>
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
.cards-container-2{
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
    .cards-container-2{
    flex-wrap: wrap;
    }
    .title-window{
        font-size: 25px;
    }
}
</style>
