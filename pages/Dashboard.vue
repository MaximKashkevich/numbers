<template>
  <nav class="px-[20px] md:px-[60px] mt-[30px]">
    <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
      Home /
    </NuxtLink>
    <NuxtLink to="/Dashboard" class="text-blue-500 cursor-pointer">
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

    <div class="flex-1 flex flex-wrap global-container">
      <h1
        class="w-full sm:mr-[50px] h-[50px] mt-[-10px] global-title font-medium text-[50px] uppercase"
      >
        My Dashboard
      </h1>
      <!-- Section My featured numbers -->
      <section class="py-[70px] section-dashboard">
        <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">
          My featured numbers:
        </h2>
        <nav
          class="border-[3px] max-w-[885px] w-[300px] sm:w-[600px] lg:w-[885px] h-[300px] border-orange-500 bg-[#FFFFFF] rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition"
        >
          <p
            class="text-[35px] max-w-[800px] w-[300px] lg:w-[800px] mt-[20px] font-medium text-dash"
          >
            You don’t have any featured number listings yet :(
          </p>
          <ButtonBlue
            @click="() => {}"
            class="w-full lg:w-[382px] h-[52px] justify-center flex items-center mx-auto mt-[50px] btn1"
          >
            Create and promote an ad
          </ButtonBlue>
        </nav>
      </section>

      <!-- Section My plate numbers -->
      <section class="py-[70px] section-dashboard">
        <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">
          My plate numbers
        </h2>
        <nav
          class="max-w-[885px] w-[300px] sm:w-[600px] lg:w-[885px] h-[300px] bg-[#FFFFFF] rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition"
        >
          <p
            class="text-[35px] max-w-[800px] w-[300px] lg:w-[800px] mt-[20px] font-medium text-dash"
          >
            You don’t have any plate number listings yet :(
          </p>
          <ButtonBlue
            class="w-full lg:w-[382px] h-[52px] justify-center flex items-center mx-auto mt-[50px] btn1"
          >
            SELL THE PLATE NUMBER
          </ButtonBlue>
        </nav>
      </section>

      <!-- Section My mobile numbers -->
      <section class="py-[70px] section-dashboard">
        <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">
          My mobile numbers
        </h2>
        <nav
          class="max-w-[885px] w-[300px] sm:w-[600px] lg:w-[885px] h-[300px] bg-[#FFFFFF] rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition"
        >
          <p
            class="text-[35px] max-w-[800px] w-[300px] lg:w-[800px] mt-[20px] font-medium text-dash"
          >
            You don’t have any mobile number listings yet :(
          </p>
          <ButtonBlue
            class="w-full lg:w-[382px] h-[52px] justify-center flex items-center mx-auto mt-[50px] btn1"
          >
            SELL THE PHONE NUMBER
          </ButtonBlue>
        </nav>
      </section>
    </div>
  </div>
</template>

<script setup>
import ButtonBlue from "../components/Button-blue/ButtonBlue.vue";
import SideBar from "../components/general/SideBar.vue";

definePageMeta({
  middleware: "auth-middleware",
});
</script>

<style scoped>
@media (max-width: 1000px) {
  .gen {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .textDash {
    font-size: 30px;
  }

  h1 {
    font-size: 40px;
    margin-left: 0;
    text-align: center;
  }

  section {
    padding: 20px;
  }

  .btn1 {
    width: 100%;
    font-size: 14px;
  }
  .global-container {
    display: flex;
    justify-content: center;
  }
  .global-title {
    margin-top: 30px;
  }
}

@media (max-width: 1024px) {
  .text-dash {
    font-size: 25px;
    width: 250px;
  }
}

@media (max-width: 480px) {
  .block2 {
    width: 100%;
  }

  .btn1 {
    width: 100%;
    font-size: 12px;
  }
}
@media (max-width: 373px) {
  .global-title {
    font-size: 30px;
    margin-top: 30px;
  }
}

@media (max-width: 800px) {
  .btn1 {
    width: 250px;
    font-size: 15px;
    margin-left: -25px;
    margin-top: 30px;
  }

  h1 {
    font-size: 35px;
    text-align: center;
  }

  .block2,
  .block3 {
    width: 100%;
  }

  .textDash {
    font-size: 25px;
    text-align: center;
  }
  .global-title {
  }
}
</style>
