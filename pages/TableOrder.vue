<template>
  <div>
    <nav class="px-[20px] md:px-[60px] mt-[30px]">
      <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
        Home /
      </NuxtLink>
      <NuxtLink to="/GeneralEmpty" class="text-blue-500 cursor-pointer">
        My Dashboard /
      </NuxtLink>
      <span class="text-[#BFBFBF]"> Add listing</span>
    </nav>

    <div
      class="flex flex-col lg:grid settings-profile px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container"
    >
      <div class="w-full">
        <SideBar class="sidebar" />
      </div>

      <div class="flex-1">
        <h1
          class="text-[30px] md:text-[50px] font-medium leading-[35px] md:leading-[50px] text-left uppercase text-1"
        >
          Numbers concierge
        </h1>
        <h2
          class="text-[25px] md:text-[35px] font-medium leading-[30px] md:leading-[42px] text-left mt-[20px] md:mt-[50px] text-2"
        >
          Plate numbers
        </h2>

        <!-- Карточки Plate numbers -->
        <div
          class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[30px] container-order w-full"
          @click="openModal"
        >
          <CardOrder />
          <CardOrder />
          <CardOrder />

          <CardOrder />

          <CardOrder />

          <div
            class="w-full max-w-[426px] h-[328px] px-[40px] rounded-[20px] bg-[#FFFFFF] text-center flex flex-col justify-center items-center white-container"
          >
            <p
              class="w-[346px] h-[42px] mt-[70px] mb-[50px] text-[35px] font-medium leading-[42px] text-center font-roboto"
            >
              Add order
            </p>
            <NuxtLink to="/AddOrder">
              <button class="flex justify-center mb-[60px]">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="49"
                    stroke="#005DCA"
                    stroke-width="2"
                  />
                  <path
                    d="M67.0557 47.7764V51.6387H32.9443V47.7764H67.0557ZM51.9141 31.8828V68.1133H47.8125V31.8828H51.9141Z"
                    fill="#005DCA"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>
        </div>

        <h2
          class="text-[25px] md:text-[35px] font-medium leading-[30px] md:leading-[42px] text-left mt-[50px] md:mt-[70px] text-2"
        >
          Mobile numbers
        </h2>

        <!-- Карточки Mobile numbers -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[30px] container-card"
        >
          <div class="max-w-[426px] w-full">
            <MoreCard />
          </div>
          <div class="max-w-[426px] w-full">
            <MoreCard />
          </div>
          <div class="max-w-[426px] w-full">
            <MoreCard />
          </div>

          <div
            class="w-full max-w-[426px] h-[328px] px-[40px] rounded-[20px] bg-[#FFFFFF] text-center flex flex-col justify-center items-center white-container"
          >
            <p
              class="w-[346px] h-[42px] mt-[70px] mb-[50px] text-[35px] font-medium leading-[42px] text-center font-roboto"
            >
              Add order
            </p>
            <NuxtLink to="/AddOrder">
              <button class="flex justify-center mb-[60px]">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="49"
                    stroke="#005DCA"
                    stroke-width="2"
                  />
                  <path
                    d="M67.0557 47.7764V51.6387H32.9443V47.7764H67.0557ZM51.9141 31.8828V68.1133H47.8125V31.8828H51.9141Z"
                    fill="#005DCA"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>
        </div>
        <ModalWindow v-if="isModalVisible" />
      </div>
    </div>
  </div>
</template>

<script>
import MoreCard from "../components/MoreCard/MoreCard.vue";
import CardOrder from "../components/CardOrder/CardOrder.vue";
import SideBar from "../components/general/SideBar.vue";
import ModalWindow from "../components/ModalWindow.vue";

export default {
  components: {
    SideBar,
    MoreCard,
    CardOrder,
    ModalWindow,
  },

  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
/* Основные стили для всех экранов */
.container {
  grid-template-columns: repeat(1, 1fr);
  /* по умолчанию одна колонка */
}

h1,
h2 {
  font-size: 2rem;
  /* размер шрифта по умолчанию */
}

button svg {
  width: 5rem;
  /* размер SVG по умолчанию */
  height: 5rem;
}

/* Медиа-запросы для экранов шириной до 1000px */
@media (max-width: 1000px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
    /* одна колонка для меньших экранов */
  }

  h1 {
    font-size: 1.5rem;
    /* размер шрифта для заголовков h1 */
  }

  h2 {
    font-size: 1.25rem;
    /* размер шрифта для заголовков h2 */
  }

  button svg {
    width: 4rem;
    /* уменьшение размера SVG */
    height: 4rem;
  }
}

/* Медиа-запросы для экранов шириной до 765px */
@media (max-width: 765px) {
  .card {
    margin-left: 0;
    text-align: center;
  }

  h1,
  h2 {
    font-size: 1rem;
    /* размер шрифта для всех заголовков */
  }

  button svg {
    width: 3.5rem;
    /* уменьшение размера SVG для самых маленьких экранов */
    height: 3.5rem;
  }
}

@media (max-width: 1200px) {
  .big-container {
    flex-wrap: wrap;
  }
}

@media (max-width: 407px) {
  .container-order {
    margin-left: -60px;
  }

  .container-card {
    margin-left: -60px;
  }

  .text-1 {
    margin-left: 20px;
    width: 300px;
    font-size: 25px;
  }

  .text-2 {
    margin-left: 60px;
  }

  .white-container {
    width: full;
  }
}
</style>
