<template>
  <NuxtPage />
  <!-- Навигация -->
  <nav class="mb-[30px] mt-[30px] navigation">
    <ul class="flex gap-[5px] pl-[60px]">
      <li>
        <NuxtLink to="/" class="text-[#005DCA] transition cursor-pointer"> Home / </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Catalog" class="text-[#005DCA] transition cursor-pointer">
          Plate numbers /</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer">
          Dubai plate number for sale: AA 14611</NuxtLink
        >
      </li>
    </ul>
  </nav>

  <!-- Контент -->
  <div class="flex justify-center pt-[30px] md:px-[30px] justify-between">
    <div
      class="content__main justify-between md:gap-[80px] lg:gap-[20px] min-w-[200px] max-w-[1900px] sm:justify-center"
    >
      <!-- Левая часть -->
      <div class="infoblock flex-1 min-w-[fit] max-w-[350px] title">
        <h1 class="font-medium text-[35px] text-left leading-[42px] mb-[10px] w-[315px] title-2">
          Dubai plate number for sale: AA 14611
          <!-- {{ mainText }} -->
        </h1>
        <p class="text-left text-[14px] font-normal leading-[14.4px] opacity-30">
          ID: {{ route.params.id }}
        </p>
        <div class="flex items-center">
          <h2 class="font-medium my-4 text-2xl" v-html="togglePlate.price"></h2>
        </div>
        <p class="text-left text-[#B3B3B3] text-[16px] font-normal leading-[19.2px] mb-[10px]">
          Description:
        </p>
        <p class="text-left text-[16px] font-normal leading-[20px]">
          {{ togglePlate.description }}
        </p>
        <!-- <a
          :href="fullCollectionLink"
          class="text-[#005DCA] text-[20px] font-bold leading-[24px] uppercase"
          >See full collection
        </a> -->
      </div>

      <!-- Центральная часть -->
      <div
        class="infoblock infoblock__img flex-1 min-w-[360px] w-[700px] max-w-[700px] h-[450px] rounded-[20px] bg-white border-[2px] border-[#B3B3B3] h-[450px]"
      >
        <div class="flex justify-between w-full p-[30px]">
          <ButtonShare />
          <ButtonLike :id="route.params.id" :type="numberType" />
        </div>

        <div class="flex flex-col items-center justify-center align-center h-[65%]">
          <div class="flex items-center justify-center" id="top">
            <img
              v-if="togglePlate.type === 'plate'"
              class="w-full h-auto max-w-[450px] object-contain"
              :src="togglePlate.photo"
              alt="Dubai Plate"
            />
            <div v-else class="w-[90%] mx-[auto] mt-[30px] flex gap-[15px] items-center">
              <img
                class="phone__img w-[60px] h-[60px]"
                src="/public/assets/etisalat.png"
                alt="etisalat logo"
              />
              <h1 class="phone__text text-[#70a136]">
                {{ formattedPhone }}
              </h1>
            </div>
          </div>
          <!-- <div id="bottom" class="flex justify-center gap-2 mt-[125px]">
            <div
              class="pagination-circle w-[8px] h-[8px] border-[#B3B3B3] bg-black rounded-full"
            ></div>
            <div
              class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"
            ></div>
            <div
              class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"
            ></div>
            <div
              class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"
            ></div>
          </div> -->
        </div>
      </div>

      <!-- Правая часть -->
      <div class="infoblock flex-1 max-w-[350px] right-panel">
        <div class="flex items-center space-x-2">
          <img
            v-if="!ownerPhoto"
            src="../public/assets/avatar.svg"
            alt="user photo"
            class="w-10 h-10 rounded-full"
          />
          <img v-else :src="ownerPhoto" alt="user photo" class="w-10 h-10 rounded-full" />
          <div>
            <h2 class="text-[35px] font-medium leading-[42px]">
              {{ owner.username }}
            </h2>
            <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px]">
              {{ ownerLastOnline }}
            </p>
          </div>
          <div class="relative h-[60px] w-[60px] w-full">
            <div class="group w-[24px] ml-auto mr-[50px] mt-0">
              <!-- Изображение, при наведении на которое будет появляться всплывающее окно -->
              <img
                class="cursor-pointer"
                src="../public/assets/iconamoon_attention-circle-light.svg"
                alt=""
              />
              <!-- Всплывающее окно -->
              <div
                class="absolute bg-[#000000] text-white w-[326px] h-[135px] black-window left-[-20px] transform -translate-x-1/2 top-[calc(100%+40px)] p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] gap-2 pointer-events-none group-hover:pointer-events-auto"
                id="tooltip"
              >
                <p class="font-roboto text-[16px] font-normal leading-[20px] text-white">
                  Scam warning: <br />Never wire money or financial info to a seller on the
                  Internet. For your security, all transactions should be done in person. Please
                  report scams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-[25px] mt-[30px] min-w-[60px]">
          <p class="text-[15px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
          <p class="text-[15px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ ownerEmirate }}
          </p>
        </div>
        <div class="flex gap-[25px] mt-[10px] min-w-[60px]">
          <p class="text-[15px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ togglePlate.datePosted }}
          </p>
          <p class="text-[15px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ togglePlate.views }} Views
          </p>
        </div>
        <div class="w-[212] mt-[30px]">
          <ButtonBlue
            v-if="isPhoneHidden"
            class="w-full w-[315px] h-[54px] flex items-center justify-center"
            @click="togglePhoneVisibility"
          >
            <h2>Show number</h2>
          </ButtonBlue>
          <ButtonBlue
            class="w-full w-[315px] h-[54px] flex items-center justify-center"
            @click="callPhone"
            v-else
          >
            <h2>+971{{ togglePlate.user.mobilenumber }}</h2>
          </ButtonBlue>
          <!-- <ButtonBlue
            class="w-full w-[315px] h-[54px] flex items-center justify-center mt-[212px]"
            >Buy as NFT
          </ButtonBlue> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Слайдер -->
  <div class="mt-[150px] px-[30px]">
    <!-- <div class="flex justify-center">
      <div
        class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center"
      >
        <h3
          class="max-w-[376px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px]"
        >
          Similar numbers:
        </h3>
        <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
        <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3 mb-[20px]">
          <div ref="prevE2" class="w-[50px]">
            <LeftArrow />
          </div>
          <div ref="nextE2" class="w-[50px]">
            <RightArrow />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="flex justify-center items-center mt-[50px]">
      <div
        class="sm:w-[640px] md:w-[1000px] lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px] px-[30px]"
      >
        <swiper :navigation2="{ nextE2: nextE2, prevE2: prevE2 }" :modules="modules" class="mySwiper">
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
        </swiper>
        <SimilarNumbers />
        <SimilarNumbers />
        <SimilarNumbers />
      </div>
    </div> -->
  </div>
  <div class="mt-[150px] px-[30px]">
    <!-- <div class="flex justify-center">
      <div
        class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center"
      >
        <h3
          class="max-w-[417px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px]"
        >
          Featured numbers:
        </h3>
        <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
        <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3 mb-[20px]">
          <div ref="prevEl" class="w-[50px]">
            <LeftArrow />
          </div>
          <div ref="nextEl" class="w-[50px]">
            <RightArrow />
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="flex justify-center items-center mt-[50px]">
      <div
        class="sm:w-[640px] md:w-[1000px] lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px] px-[30px]"
      >
        <swiper class="mySwiper">
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
    </div> -->
  </div>
</template>

<script setup>
import axios from 'axios';
import ButtonShare from '../components/ButtonShare.vue';
import ButtonLike from '../components/ButtonLike.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import RightArrow from '../components/RightArrow.vue';
import LeftArrow from '../components/LeftArrow.vue';
import SimilarNumbers from '../components/SimilarNumbers/SimilarNumber.vue';
import CradPlate from '../components/Card.vue';
import { ref, onMounted, computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRoute } from 'vue-router';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const route = useRoute();

const owner = computed(() => {
  return togglePlate.value?.user || 'unknown';
});

const ownerEmirate = computed(() => {
  switch (owner.value.emirate) {
    case 1:
      return 'Dubai';
    case 2:
      return 'Abu Dhabi';
    case 3:
      return 'Ajman';
    case 4:
      return 'Umm Al Quwain';
    case 5:
      return 'Ras Al Khaimah';
    case 6:
      return 'Sharjah';
  }
});

const ownerLastOnline = computed(() => {
  if (!owner.value?.last_visit) return '';

  const timestamp = owner.value.last_visit;
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
});

const togglePlate = ref({});
const numberType = ref('');

const ownerPhoto = computed(() => {
  if (!togglePlate.value?.user?.photo) return null;
  return `https://dev.numbers.ae${togglePlate.value.user.photo}`;
});

onMounted(() => {
  const actions = {
    plate: () => initPlate(),
    phone: () => initPhone(),
  };

  const matchedAction = Object.keys(actions).find((key) => route.fullPath.includes(key));

  if (matchedAction) {
    actions[matchedAction]();
  }
});

const initPlate = () => {
  hookViewNumber('viewedPlates');
  fetchNumber(route.params.id, 'plate');
  numberType.value = 'plate';
};

const initPhone = () => {
  hookViewNumber('viewedPhones');
  fetchNumber(route.params.id, 'phone');
  numberType.value = 'phone';
};

const hookViewNumber = (plateType) => {
  const viewedNumbersString = localStorage.getItem(plateType);
  let viewedNumbersArray = viewedNumbersString ? JSON.parse(viewedNumbersString) : [];

  if (!viewedNumbersArray.includes(+route.params.id)) {
    viewedNumbersArray.push(+route.params.id);
    localStorage.setItem(plateType, JSON.stringify(viewedNumbersArray));
  }
};

const fetchNumber = async (id, plateType) => {
  try {
    const response = await axios.get(`https://api.dev.numbers.ae/v1/catalog/${plateType}/${id}`);
    const data = response.data;
    togglePlate.value = data;
    console.log(data, 'number res');
  } catch (error) {
    console.error(error);
  }
};

const formattedPhone = computed(() => {
  // Только если togglePlate.phone существует
  return togglePlate.value.phone
    ? togglePlate.value.phone.replace(/[\s_-]+/g, '').toUpperCase()
    : '';
});

// показать или скрыть телефон автора
const isPhoneHidden = ref(true);

const togglePhoneVisibility = () => {
  isPhoneHidden.value = !isPhoneHidden.value;
};

const callPhone = () => {
  const callFormat = `+971${togglePlate.value.user.mobilenumber}`;
  window.location.href = `tel:${callFormat}`;
};

const mainText = computed(
  () =>
    `${togglePlate.value.emirate} ${
      route.path.includes('plate') ? 'plate' : 'phone'
    } number for sale:`
);
</script>

<style scoped>
.content__main {
  margin: auto;
  max-width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.phone__text {
  font-size: clamp(22px, 3vw, 55px);
  text-wrap: nowrap;
}

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

@media (max-width: 839px) {
  .infoblock {
    margin: auto;
    margin-bottom: 30px;
    min-width: 100%;
  }
  .infoblock.infoblock__img {
    max-height: 50vh;
  }
  .infoblock h1 {
    width: 100%;
  }
  .phone__text {
    font-size: clamp(24px, 8vw, 42px);
  }
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
}

@media (max-width: 665px) {
}
</style>
