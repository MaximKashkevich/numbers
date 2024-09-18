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
          <h2 class="text-[35px] font-medium leading-[42px]">
            51255 or 5125 any city
          </h2>
          <h2 class="text-[35px] font-medium leading-[42px]">
            to 20 000 AED
          </h2>
        </div>
        <p class="text-[14px] font-normal text-[#BFBFBF] leading-[16.8px] text-left mt-[10px]">
          ID: 65131
        </p>
      </div>
      <p class="text-[16px] font-normal leading-[19.2px] text-[#BFBFBF] mt-[50px]">
        Specifications Requested:
      </p>
      <div class="flex flex-wrap button-container gap-[10px] mt-[10px] container-3">

        <div
          class="w-[95px] sm:w-[95px] lg:w-[95px] h-[40px] rounded-[10px] border-[1px] border-[#BFBFBF] px-[10px] sm:px-[20px] py-[10px] flex justify-center items-center">
          4 digits
        </div>
        <div
          class="w-[125px] h-[40px] text-[14px] sm:text-[16px] rounded-[10px] border-[1px] border-[#BFBFBF] px-[10px] sm:px-[20px] py-[10px] flex justify-center items-center whitespace-nowrap">
          Any emirate
        </div>
      </div>
      <div class="mt-[50px]">
        <p class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#BFBFBF] mb-[10px]">
          Description:
        </p>
        <p class="font-roboto text-[16px] font-medium leading-[19.2px] text-left">
          Car licence plate not classic any city number has to be 51255 or 5125...
        </p>
      </div>
      <div class="container-2 mt-[30px]">
        <div class="flex gap-[10px]">
          <p class="text-[14px] sm:text-[16px] font-normal leading-[18px] lg:leading-[19.2px] text-[#B3B3B3]">
            Emirate:
          </p>
          <p class="text-[14px] sm:text-[16px] text-[#BFBFBF] font-normal leading-[18px] lg:leading-[19.2px]">
            Dubai
          </p>
        </div>
        <div class="flex pt-[5px] gap-[10px]">
          <p class="text-[14px] sm:text-[16px] font-normal leading-[18px] lg:leading-[19.2px] text-[#B3B3B3]">
            Posted Today
          </p>
          <p class="text-[14px] sm:text-[16px] text-[#BFBFBF] font-normal leading-[18px] lg:leading-[19.2px]">
            12 Views
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
  width: 90vw;
  max-width: 900px;
  height: auto;
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

  h1, h2 {
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

  .img-container{
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
