<template>
  <!-- Навигация -->
  <nav class="mb-[30px] mt-[30px] navigation">
    <ul class="flex gap-[5px] pl-[60px]">
      <li>
        <NuxtLink class="text-[#005DCA] transition cursor-pointer">
          Home /</NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-[#005DCA] transition cursor-pointer">
          Plate numbers /</NuxtLink>
      </li>
      <li>
        <NuxtLink class=" text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer">
          Dubai plate number for sale: AA 14611</NuxtLink>
      </li>
    </ul>
  </nav>

  <!-- Контент -->
  <div class="flex justify-center pt-[30px] md:px-[30px]">
    <div
      class="flex flex-wrap justify-between px-[30px] md:gap-[80px] lg:gap-[250px] min-w-[200px] max-w-[1900px] sm:justify-center">
      <!-- Левая часть -->
      <div class="flex-1 min-w-[250px] max-w-[350px] mb-[70px] title">
        <h1 class="font-medium text-[35px] leading-[42px] mb-[10px] w-[315px]  title-2">Dubai plate number for sale: AA
          14611 </h1>
        <p class="text-[12px] font-normal leading-[14.4px] opacity-30">ID: 65131</p>
        <h2 class="font-medium text-[35px] mt-[50px] mb-[70px]">20 000 AED</h2>
        <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px] mb-[10px]">Description:</p>
        <p class="text-[16px] font-normal leading-[20px] mb-[80px]">ETISALAT VIP Prepaid Fancy Mobile number For Sale.
          Call or WhatsApp 055-4400750.</p>
        <a :href="fullCollectionLink" class="text-[#005DCA] text-[20px] font-bold leading-[24px] uppercase">See full
          collection
        </a>
      </div>

      <!-- Центральная часть -->
      <div
        class="flex-1 min-w-[360px] w-[650px] max-w-[700px] h-[450px] rounded-[20px] bg-white border-[2px] border-[#B3B3B3] mb-[70px] h-[450px]">
        <div class="flex justify-between w-full p-[30px]">
          <ButtonShare />
          <ButtonLike />
        </div>

        <div class="flex flex-col items-center justify-center h-full">
          <div class="flex items-center justify-center" id="top">
            <img class="w-full h-auto max-w-[450px] object-contain" src="../public/assets/plate2.png" alt="Dubai Plate">
          </div>
          <div id="bottom" class="flex justify-center gap-2 mt-[125px]">
            <div class="pagination-circle w-[8px] h-[8px] border-[#B3B3B3] bg-black rounded-full"></div>
            <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
            <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
            <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
          </div>
        </div>
      </div>



      <!-- Правая часть -->
      <div class="flex-1 max-w-[350px] right-panel">
        <div class="flex items-center space-x-2">
          <img src="../public/assets/avatar.svg" alt="" class="w-10 h-10 rounded-full">
          <div>
            <h2 class="text-[35px] font-medium leading-[42px]">Suroor</h2>
            <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px]">Online</p>
          </div>
          <div class="relative group">
            <!-- Изображение, при наведении на которое будет появляться всплывающее окно -->
            <img class=" cursor-pointer pl-[110px] mb-[35px]"
              src="../public/assets/iconamoon_attention-circle-light.svg" alt="">
            <!-- Всплывающее окно -->
            <div
              class=" absolute bg-[#000000] text-white w-[326px] h-[135px] black-window  left-[-20px] transform -translate-x-1/2 top-[calc(100%+20px)] p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] gap-2"
              id="tooltip">
              <p class="font-roboto text-[16px] font-normal leading-[20px] text-white">
                Scam warning: <br>Never wire money or financial info to a seller on the Internet. For your security, all
                transactions should be done in person. Please report scams.
              </p>
            </div>
          </div>
        </div>

        <div class="flex gap-[25px] mt-[30px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate: Dubai</p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Posted Today</p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">12 Views</p>
        </div>
        <div class="w-[212] mt-[30px]">
          <ButtonBlue class="w-full w-[315px] h-[54px] flex items-center justify-center ">Call 058 210 03 10
          </ButtonBlue>
          <ButtonBlue class="w-full w-[315px] h-[54px] flex items-center justify-center mt-[212px]">Buy as NFT
          </ButtonBlue>
        </div>
      </div>
    </div>
  </div>

  <!-- Слайдер -->
  <div class="mt-[150px] px-[30px]">
    <div class="flex justify-center">
      <div class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center">
        <h3
          class="max-w-[376px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px]">
          Similar numbers:</h3>
        <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
        <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3 mb-[20px]">
          <!-- Обертка для рефов -->
          <div ref="prevE2" class="w-[50px]">
            <LeftArrow />
          </div>
          <div ref="nextE2" class="w-[50px]">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-[50px]">
      <div class="sm:w-[640px] md:w-[1000px] lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px] px-[30px]">
        <!-- <swiper :navigation2="{ nextE2: nextE2, prevE2: prevE2 }" :modules="modules" class="mySwiper">
          <swiper-slide>
            <SimilarNumbers />
            <SimilarNumbersLow />
            <SimilarNumbers />
          </swiper-slide>
          <swiper-slide>
            <SimilarNumbers />
            <SimilarNumbersLow />
            <SimilarNumbers />
          </swiper-slide>
          <swiper-slide>
            <SimilarNumbers />
            <SimilarNumbersLow />
            <SimilarNumbers />
          </swiper-slide>
        </swiper> -->
        <SimilarNumbers />
        <SimilarNumbers />
        <SimilarNumbers />
      </div>
    </div>
  </div>
  <div class="mt-[150px] px-[30px]">
    <div class="flex justify-center">
      <div class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center">
        <h3
          class="max-w-[417px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px]">
          Featured numbers:</h3>
        <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
        <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3 mb-[20px]">
          <!-- Обертка для рефов -->
          <div ref="prevEl" class="w-[50px]">
            <LeftArrow />
          </div>
          <div ref="nextEl" class="w-[50px]">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-[50px]">
      <div class="sm:w-[640px] md:w-[1000px] lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px] px-[30px]">
        <swiper :navigation="{ nextEl: nextEl, prevEl: prevEl }" :modules="modules" class="mySwiper">
          <swiper-slide>
            <CradPlate />
            <CradPlate />
            <CradPlate />
          </swiper-slide>
          <swiper-slide>
            <CradPlate />
            <CradPlate />
            <CradPlate />
          </swiper-slide>
          <swiper-slide>
            <CradPlate />
            <CradPlate />
            <CradPlate />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonShare from '../components/ButtonShare.vue';
import ButtonLike from '../components/ButtonLike.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import RightArrow from '../components/RightArrow.vue';
import LeftArrow from '../components/LeftArrow.vue';
import SimilarNumbers from '../components/SimilarNumbers/SimilarNumber.vue'
import SimilarNumbersLow from '../components/LowSimilarNumbers/SimilarNumberLowPrice.vue'
import CradPlate from '../components/Card.vue'
import { ref, onMounted } from 'vue';


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';


</script>

<style scoped>
.black-window {
  margin-top: -70px;
}

.active {
  background-color: #000;
}

#bottom {
  display: flex;
  column-gap: 25px;
  justify-content: center;
  margin-top: 125px;
  gap: 8px;
}

#app {}

html,
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  position: relative;
}

.swiper {
  width: 1320px;
  height: 300px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.swiper-slide img {
  width: 370px;
}

.title-2 {
  font-size: 35px;
  line-height: 42px;
  width: 315px;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
  }

  .title {
    margin-top: 70px;
    text-align: center;
    line-height: 22px;
  }



  .right-panel {
    margin-left: 10px;
  }

}

@media (max-width: 670px) {


  .title-2 {

    padding-right: 70px;
  }
}

@media (max-width: 665px) {


  .title-2 {

    margin-left: 55px;
  }
}
</style>