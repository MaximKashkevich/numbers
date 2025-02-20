<template>
  <div>
    <nav class="px-[20px] md:px-[60px] mt-[30px]">
      <NuxtLink to="/" class="text-blue-500 cursor-pointer"> Home / </NuxtLink>
      <span class="text-[#BFBFBF]"> My Dashboard</span>
    </nav>

    <div
      class="flex flex-col lg:grid settings-profile px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container"
    >
      <div class="w-full">
        <SideBar class="sidebar" />
      </div>

      <div class="flex-1">
        <h1
          class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase mb-[65px] title-text"
        >
          My collections
        </h1>
        <div class="w-full h-[52px] mt-[65px]">
          <div class="flex items-center flex-wrap justify-between mt-[65px] gap-[20px]">
            <p class="font-normal text-[20px]">You have some collections. Create more.</p>
            <ButtonBlue
              class="w-[272px] h-[52px] flex justify-center items-center px-[40px] button--blue"
            >
              add new collection
            </ButtonBlue>
          </div>

          <div class="flex gap-[50px] items-center mt-[70px]">
            <input type="text" placeholder="Name the collection" class="input--2 text-[#BFBFBF]" />
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 7.49962L22.5 11.2496M16.25 24.9996H26.25M6.25 19.9996L5 24.9996L10 23.7496L24.4825 9.26712C24.9512 8.7983 25.2145 8.16253 25.2145 7.49962C25.2145 6.83671 24.9512 6.20094 24.4825 5.73212L24.2675 5.51712C23.7987 5.04844 23.1629 4.78516 22.5 4.78516C21.8371 4.78516 21.2013 5.04844 20.7325 5.51712L6.25 19.9996Z"
                stroke="#BFBFBF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[215px] container-order w-full"
        >
          <Card3 />
          <Card3 />
          <Card2 />
          <Card2 />
          <Card3 />
          <div
            class="w-full max-w-[426px] h-[328px] px-[40px] rounded-[20px] bg-[#FFFFFF] text-center flex flex-col justify-center items-center white-container"
          >
            <p
              class="w-[346px] h-[42px] mt-[70px] mb-[50px] text-[35px] font-medium leading-[42px] text-center font-roboto"
            >
              Add order
            </p>
            <button class="flex justify-center mb-[60px]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                class="img-2"
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
          </div>
        </div>
        <div class="flex gap-[50px] items-center mt-[70px]">
          <input type="text" placeholder="Name the collection" class="input--2 text-[#BFBFBF]" />
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 7.49962L22.5 11.2496M16.25 24.9996H26.25M6.25 19.9996L5 24.9996L10 23.7496L24.4825 9.26712C24.9512 8.7983 25.2145 8.16253 25.2145 7.49962C25.2145 6.83671 24.9512 6.20094 24.4825 5.73212L24.2675 5.51712C23.7987 5.04844 23.1629 4.78516 22.5 4.78516C21.8371 4.78516 21.2013 5.04844 20.7325 5.51712L6.25 19.9996Z"
              stroke="#BFBFBF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[100px] container-order w-full"
        >
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <div
            class="w-full max-w-[426px] h-[328px] px-[40px] rounded-[20px] bg-[#FFFFFF] text-center flex flex-col justify-center items-center white-container"
          >
            <p
              class="w-[346px] h-[42px] mt-[70px] mb-[50px] text-[35px] font-medium leading-[42px] text-center font-roboto"
            >
              Create more
            </p>
            <button class="flex justify-center mb-[60px]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                class="img-2"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/general/SideBar.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import Card2 from '../components/ButtonPLuss/Card2.vue';
import Card3 from '../components/ButtonPLuss/Card3.vue';

export default {
  components: {
    SideBar,
    MiniButton,
    ButtonBlue,
    Card3,
    Card2,
  },
};
import { ref } from 'vue';

const collectionName = ref('');

definePageMeta({
  middleware: ['subscription'],
});
</script>
<style>
.input--2 {
  width: 384px;
  height: 52px;
  background: #fafafa;
  font-size: 35px;
  border: none;
  outline: none;
  color: #000000;
}

input::placeholder {
  font-size: 42px;
  color: #bfbfbf;
}

input::-webkit-input-placeholder {
  color: #bfbfbf;
  font-size: 42px;
}

input::-moz-placeholder {
  color: #bfbfbf;
  font-size: 42px;
}

input:-ms-input-placeholder {
  color: #bfbfbf;
  font-size: 42px;
}

input::-ms-input-placeholder {
  color: #bfbfbf;
  font-size: 42px;
}
.img-2 {
  width: 100px;
  height: 100px;
}
@media (max-width: 694px) {
  .container-input {
    margin-top: -110px;
  }
}
</style>
