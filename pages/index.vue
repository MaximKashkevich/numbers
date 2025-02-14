<template>
  <NuxtPage />
  <div
    class="mt-[100px] container__main min-w-[90%] px-8 md:px-10 lg:px-12 xl:px-16 relative"
  >
    <h1
      class="max-w-[1320px] text-[100px] font-medium leading-[100px] text-left title-2"
    >
      PLATE AND MOBILE NUMBERS IN UAE
    </h1>

    <div class="mt-[100px] containres">
      <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
      <div
        class="flex gap-[50px] pt-[30px] pb-[30px] justify-between items-center flex-wrap"
      >
        <div
          class="flex gap-[30px] h-[36px] w-full justify-between sm:justify-start items-end"
        >
          <h2
            class="link__catalog_buy text-nowrap w-[340px] h-full text-[24px] sm:text-[30px] font-normal leading-[36px] uppercase"
          >
            Total plate numbers:
          </h2>
          <p
            class="w-[70px] h-[36px] text-[24px] sm:text-[30px] font-normal leading-[36px] uppercase text-1"
          >
            {{ totalPlateNumbers }}
          </p>
        </div>
        <NuxtLink to="/Catalog?numberType=plate">
          <ButtonBlue class="flex items-center justify-center ml-auto">
            BUY
          </ButtonBlue>
        </NuxtLink>
      </div>

      <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

      <div
        class="flex gap-[50px] pt-[30px] pb-[30px] justify-between items-center flex-wrap"
      >
        <div
          class="flex gap-[30px] h-[36px] w-full justify-between sm:justify-start items-end"
        >
          <h2
            class="link__catalog_buy text-nowrap w-[340px] h-full text-[24px] sm:text-[30px] font-normal leading-[36px] uppercase"
          >
            Total mobile numbers:
          </h2>
          <p
            class="w-[70px] h-[36px] text-[24px] sm:text-[30px] font-normal leading-[36px] uppercase text-1"
          >
            {{ totalMobileNumbers }}
          </p>
        </div>
        <NuxtLink to="/Catalog?numberType=phone">
          <ButtonBlue class="flex items-center justify-center ml-auto">
            BUY
          </ButtonBlue>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

    <img
      class="w-full pt-[70px] img-bg"
      src="../public/assets/backgroundMain.webp"
      alt=""
    />
    <CatalogComponent />
    <CatalogShowMore />
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      <SimilarNumber v-for="item in similarNumbers" :key="item.id" :id="item.id" :imageSrc="item.photo"
        :price="item.price" :emirate="item.emirate" :postedAt="item.postedAt" :views="item.views" />
    </div> -->
    <div class="mt-[150px]">
      <h3
        class="w-[1000px] h-[180px] text-[50px] font-normal leading-[60px] text-left mini-title"
      >
        Save time on your search: create an ad to buy a number and we will send
        you suitable ads to your WhatsApp.
      </h3>
      <p
        class="w-[1000px] text-[16px] font-normal leading-[19.2px] text-left mt-[20px] mini-text"
      >
        View ads for purchase is available only for registered users
      </p>
      <div
        class="w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] mb-[70px]"
      >
        <div
          class="w-[100%] h-[270px] rounded-[20px] border-[#BFBFBF] border-[1px] px-[20px] py-[30px]"
        >
          <div class="">
            <p class="">1/3</p>

            <p
              class="w-[188px] h-[36px] font-normal text-[30px] leading-[36px] mt-[70px]"
            >
              Application
            </p>
            <p
              class="max-w-[386.67px] w-full font-normal text-[16px] leading-[19.2px] mt-[30px]"
            >
              You leave a request to buy a room and specify all the criteria
              that are important to you.
            </p>
          </div>
        </div>
        <div
          class="w-[100%] h-[270px] rounded-[20px] border-[#BFBFBF] border-[1px] px-[20px] py-[30px]"
        >
          <div class="">
            <p class="">2/3</p>

            <p
              class="w-[188px] h-[36px] font-normal text-[30px] leading-[36px] mt-[70px]"
            >
              Search
            </p>
            <p
              class="max-w-[386.67px] w-full font-normal text-[16px] leading-[19.2px] mt-[30px]"
            >
              During the week, our manager will match your application with
              suitable numbers and send them to you on WhatsApp
            </p>
          </div>
        </div>
        <div
          class="w-[100%] h-[270px] rounded-[20px] border-[#BFBFBF] border-[1px] px-[20px] py-[30px]"
        >
          <div class="">
            <p class="">3/3</p>

            <p
              class="w-[188px] h-[36px] font-normal text-[30px] leading-[36px] mt-[70px]"
            >
              Buying
            </p>
            <p
              class="max-w-[386.67px] w-full font-normal text-[16px] leading-[19.2px] mt-[30px]"
            >
              If the number fits you, you pay for it, we buy it, register it in
              the traffic police and give it to you.
            </p>
          </div>
        </div>
      </div>
      <ButtonBlue
        class="w-[329px] h-[52px] flex justify-center items-center order-list"
      >
        Submit a purchase order
      </ButtonBlue>
    </div>
    <h3
      class="w-[198px] h-[60px] text-[50px] font-normal leading-[60px] text-left mt-[150px]"
    >
      Licenses
    </h3>
    <LicenseList></LicenseList>

    <h3
      class="w-[91px] h-[60px] text-[50px] font-normal leading-[60px] text-left mt-[150px]"
    >
      FAQ
    </h3>

    <div>
      <ul class="mt-[70px] space-y-6">
        <li>
          <div class="flex flex-wrap py-[25px] justify-between items-start">
            <div class="flex-1 min-w-0">
              <p
                class="w-full max-w-[800px] text-[24px] md:text-[35px] font-medium leading-[30px] md:leading-[42px]"
              >
                How do I login?
              </p>
              <!-- Анимация для первого элемента -->
              <transition name="fade-slide">
                <span
                  v-show="showMore"
                  class="block mt-2 w-full max-w-[800px] text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px]"
                >
                  You can easily update your account information. Just go to
                  your Dashboard page and click on the Settings link. From here
                  you can do whatever you like with your information.
                </span>
              </transition>
            </div>
            <div class="mt-4 md:mt-0 mb-[20px] self-start flex-shrink-0">
              <ButtonPlus @click="seeMore" />
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
        </li>

        <li>
          <div class="flex flex-wrap py-[25px] justify-between items-start">
            <div class="flex-1 min-w-0">
              <p
                class="w-full max-w-[800px] text-[24px] md:text-[35px] font-medium leading-[30px] md:leading-[42px]"
              >
                Can I create more than one account?
              </p>
              <!-- Анимация для второго элемента -->
              <transition name="fade-slide">
                <span
                  v-show="showMore1"
                  class="block mt-2 w-full max-w-[800px] text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px]"
                >
                  You can easily update your account information. Just go to
                  your Dashboard page and click on the Settings link. From here
                  you can do whatever you like with your information.
                </span>
              </transition>
            </div>
            <div class="mt-4 md:mt-0 mb-[20px] self-start flex-shrink-0">
              <ButtonPlus @click="seeMore1" />
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
        </li>

        <li>
          <div class="flex flex-wrap py-[25px] justify-between items-start">
            <div class="flex-1 min-w-0">
              <p
                class="w-full max-w-[800px] text-[24px] md:text-[35px] font-medium leading-[30px] md:leading-[42px]"
              >
                How do I change my account information?
              </p>
              <!-- Анимация для третьего элемента -->
              <transition name="fade-slide">
                <span
                  v-show="showMore2"
                  class="block mt-2 w-full max-w-[800px] text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px]"
                >
                  You can easily update your account information. Just go to
                  your
                  <NuxtLink class="cursor-pointer underline"
                    >Dashboard</NuxtLink
                  >
                  page and click on the Settings link. From here you can do
                  whatever you like with your information.
                </span>
              </transition>
            </div>
            <div class="mt-4 md:mt-0 mb-[20px] self-start flex-shrink-0">
              <ButtonPlus @click="seeMore2" />
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
        </li>

        <li>
          <div class="flex flex-wrap py-[25px] justify-between items-start">
            <div class="flex-1 min-w-0">
              <p
                class="w-full max-w-[800px] text-[24px] md:text-[35px] font-medium leading-[30px] md:leading-[42px]"
              >
                How can I create or delete a listing?
              </p>
              <!-- Анимация для четвертого элемента -->
              <transition name="fade-slide">
                <span
                  v-show="showMore3"
                  class="block mt-2 w-full max-w-[800px] text-[14px] md:text-[16px] leading-[18px] md:leading-[19.2px]"
                >
                  You can easily update your account information. Just go to
                  your Dashboard page and click on the Settings link. From here
                  you can do whatever you like with your information.
                </span>
              </transition>
            </div>
            <div class="mt-4 md:mt-0 mb-[20px] self-start flex-shrink-0">
              <ButtonPlus @click="seeMore3" />
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
        </li>
      </ul>
    </div>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ButtonBlue from "../components/Button-blue/ButtonBlue.vue";
import SimilarNumber from "../components/SimilarNumbers/SimilarNumber.vue";
import ButtonPlus from "../components/ButtonPlus/ButtonPlus.vue";
import ContactForm from "../components/ContactForm/ContactForm.vue";

import "/assets/css/main.css";
import { ref, onMounted } from "vue";

import { useSimilarNumbersStore } from "~/stores/similarNumbers";
import CatalogComponent from "~/components/Catalog/CatalogComponent.vue";
import CatalogShowMore from "~/components/Catalog/CatalogShowMore.vue";

const similarNumbersStore = useSimilarNumbersStore();
const similarNumbers = ref(similarNumbersStore.similarNumbers);

onMounted(async () => {
  await similarNumbersStore.fetchSimilar();
});

// Пропсы
const props = defineProps({
  totalMobileNumbers: {
    type: Number,
    default: 3028,
  },
  totalPlateNumbers: {
    type: Number,
    default: 7353,
  },
});

// Состояние
const showMore = ref(false);
const showDots = ref(true);
// const isChecked = ref(false);

// Методы
const seeMore = () => {
  showMore.value = !showMore.value;
  showDots.value = !showDots.value;
};
const showMore1 = ref(false);
const showDots1 = ref(true);
// const isChecked1 = ref(false);

// Методы
const seeMore1 = () => {
  showMore1.value = !showMore1.value;
  showDots1.value = !showDots1.value;
};
const showMore2 = ref(false);
const showDots2 = ref(true);
// const isChecked2 = ref(false);

// Методы
const seeMore2 = () => {
  showMore2.value = !showMore2.value;
  showDots2.value = !showDots2.value;
};
const showMore3 = ref(false);
const showDots3 = ref(true);
// const isChecked3 = ref(false);

// Методы
const seeMore3 = () => {
  showMore3.value = !showMore3.value;
  showDots3.value = !showDots3.value;
};
// definePageMeta({
//     name: 'Home',
// });
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

/* Начальное состояние элемента при входе */
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

/* Состояние при выходе */
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Видимый элемент */
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.hidden {
  display: none;
}

@media (max-width: 324px) {
  .text-1 {
    padding-top: 50px;
  }
}

@media (max-width: 500px) {
  .img-bg {
    display: none;
  }

  .container__main {
    margin-top: 130px;
  }

  .container-input {
    margin-top: 150px;
  }
}

@media (max-width: 920px) {
  .title-2 {
    width: 500px;
    font-size: 48px;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .title-2 {
    max-width: 80vw;
    font-size: 50px;
    font-size: clamp(42px, 12vw, 48px);
    flex-wrap: wrap;
    margin: auto;
  }

  .containres {
    margin-top: 200px;
  }

  .blue-button {
    width: 300px;
    font-size: 16px;
  }

  .orange-button {
    width: 300px;
    font-size: 16px;
  }

  .title-input {
    width: 400px;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .form-title {
    margin-bottom: 50px;
  }
}

@media (max-width: 420px) {
  .link__catalog_buy {
    text-wrap: wrap;
  }
}

@media (max-width: 1120px) {
  .order-list {
    width: 395px;
    font-size: 20px;
  }

  .mini-text {
    width: 500px;
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .mini-title {
    width: 700px;
    font-size: 35px;
    font-weight: 700;
    line-height: 40px;
  }

  @media (max-width: 850px) {
    .order-list {
      width: 250px;
      font-size: 15px;
      margin-top: -10px;
    }

    .mini-text {
      width: 250px;
      font-size: 15px;
    }

    .mini-title {
      width: 300px;
      font-size: 25px;
      font-weight: 700;
      line-height: 30px;
    }

    .text-container {
      padding-right: 30px;
    }

    .text-show {
    }
  }
}

#emirate {
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background-image: url("../../public/assets/Polygon3.svg"); */
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 10px;
}

.button-black:active {
  border-color: #bfbfbf;
  color: #bfbfbf;
}

.grid-2 {
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
}
</style>
