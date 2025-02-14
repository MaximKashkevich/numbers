<template>
  <div>
    <nav class="px-[20px] md:px-[60px] mt-[30px]">
      <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
        Home /
      </NuxtLink>
      <NuxtLink to="/Dashboard" class="text-blue-500 cursor-pointer">
        My Dashboard /
      </NuxtLink>
      <span class="text-[#BFBFBF]"> Payment history</span>
    </nav>

    <div
      class="flex flex-col lg:grid settings-profile px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container"
    >
      <div class="w-full">
        <SideBar class="sidebar" />
      </div>

      <div class="flex-1">
        <h1
          class="w-full text-[50px] font-medium leading-[50px] text-left uppercase lg:text-[40px] md:text-[35px]"
        >
          Payment history
        </h1>
        <div>
          <!-- Table header -->
          <ul
            class="w-full max-w-[872px] h-[52px] rounded-[10px] border border-[#BFBFBF] bg-[#FFFFFF] flex justify-between items-center mt-[30px] text-[16px] md:text-[14px]"
          >
            <li class="w-[100px] md:w-[80px]">
              <p class="font-roboto font-medium ml-[15px] text-[16px] text--1">
                Number
              </p>
            </li>
            <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

            <li class="w-[330px] md:w-[200px]">
              <p class="font-roboto font-medium ml-[15px] text-[16px] text--1">
                Name of payment
              </p>
            </li>
            <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

            <li class="w-[140px] md:w-[100px]">
              <p class="font-roboto font-medium w-[100px] text-[16px] text--1">
                Amount, AED
              </p>
            </li>
            <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

            <li class="w-[100px] md:w-[80px]">
              <p class="font-roboto font-medium ml-[15px] text-[16px] text--1">
                Date
              </p>
            </li>
            <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-[50px]"></div>

            <li class="w-[140px]">
              <p class="font-roboto font-medium ml-[15px] text-[16px] text--1">
                Status
              </p>
            </li>
          </ul>

          <!-- Table content -->
          <ul
            class="w-full max-w-[872px] h-auto rounded-[10px] border border-[#BFBFBF] bg-[#FAFAFA] mt-[30px]"
          >
            <li class="w-full">
              <ul class="w-full flex justify-between text-[16px] flex-wrap">
                <li class="w-[100px] container-1 md:w-[80px]">
                  <p class="font-roboto mt-[15px] ml-[15px] text--2">11113</p>
                </li>
                <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-auto"></div>
                <li class="w-[330px container-1 ] md:w-[200px]">
                  <p class="font-roboto mt-[15px] ml-[15px] text--2">
                    6 months tariff
                  </p>
                </li>
                <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-auto"></div>
                <li class="w-[140px] container-1 md:w-[100px]">
                  <p class="font-roboto mt-[15px] ml-[15px] text--2">5000</p>
                </li>
                <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-auto"></div>
                <li class="w-[100px] container-1 md:w-[80px]">
                  <p class="font-roboto mt-[15px] ml-[15px] text--2">
                    24.12.24
                  </p>
                </li>
                <div class="bg-[#BFBFBF] opacity-50 w-[1px] h-auto"></div>
                <li class="w-[140px] container-1">
                  <p
                    class="font-roboto mt-[15px] text-[#EA0038] text--2 pb-[10px]"
                  >
                    Payment error
                  </p>
                </li>
                <div
                  class="w-full max-w-[872px] border-b border-[#BFBFBF]"
                ></div>
              </ul>
            </li>
            <!-- Other table rows go here -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import SideBar from "../components/general/SideBar.vue";
import MiniButton from "../components/MiniButton/MiniButton.vue";
import ButtonBlue from "../components/Button-blue/ButtonBlue.vue";

export default {
  components: {
    SideBar,
    MiniButton,
    ButtonBlue,
  },
  setup() {
    const activeButton = ref(null);
    const isCheckboxChecked = ref(false);
    const isCheckboxChecked2 = ref(false);
    const isCheckboxChecked3 = ref(false);

    const setActive = (buttonType) => {
      activeButton.value = buttonType;
    };

    const getButtonClass = (buttonType) => {
      return {
        "border-[#000000] text-[#000000]": activeButton.value === buttonType,
        "border-[#BFBFBF] text-[#BFBFBF]": activeButton.value !== buttonType,
      };
    };

    const selectClasses = computed(() => ({
      "mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]": true,
      "border-[#BFBFBF] text-[#BFBFBF]": !isCheckboxChecked.value,
      "cursor-not-allowed": !isCheckboxChecked.value,
    }));

    const selectClasses2 = computed(() => ({
      "mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]": true,
      "border-[#BFBFBF] text-[#BFBFBF]": !isCheckboxChecked2.value,
      "cursor-not-allowed": !isCheckboxChecked2.value,
    }));

    const selectClasses3 = computed(() => ({
      "border-[#BFBFBF] text-[#BFBFBF]": !isCheckboxChecked3.value,
      "cursor-not-allowed": !isCheckboxChecked3.value,
      "mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-full py-[15px] px-[20px]": true,
    }));

    return {
      activeButton,
      isCheckboxChecked,
      isCheckboxChecked2,
      isCheckboxChecked3,
      setActive,
      getButtonClass,
      selectClasses,
      selectClasses2,
      selectClasses3,
    };
  },
};
</script>

<style scoped>
select {
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .text--1 {
    font-size: 10px;
    font-weight: 800;
    margin-left: 0;
    padding: 3px;
  }
  .text--2 {
    font-size: 10px;
    font-weight: 800;
    margin-left: -10px;
    padding: 13px;
  }
  .container-1 {
    width: 100px;
  }
  h1 {
    font-size: 30px;
  }

  .sidebar {
    width: 100%;
  }

  button {
    width: 100%;
  }
}
</style>
