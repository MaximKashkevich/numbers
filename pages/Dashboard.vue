<template>
  <nav class="px-[20px] md:px-[60px] mt-[30px]">
    <NuxtLink to="/" class="text-blue-500 cursor-pointer"> Home / </NuxtLink>
    <NuxtLink to="/Dashboard" class="text-blue-500 cursor-pointer"> My Dashboard / </NuxtLink>
    <span class="text-[#BFBFBF]"> Add listing</span>
  </nav>

  <div
    class="flex flex-col lg:grid settings-profile px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container"
  >
    <div class="w-full">
      <SideBar class="sidebar" />
    </div>

    <div class="max-w-[885px] w-[100%]">
      <h1
        class="w-full sm:mr-[50px] h-[50px] mt-[-10px] global-title font-medium text-[50px] uppercase"
      >
        My Dashboard
      </h1>
      <DashboardFeatured />
      <DashboardNumbers :number-type="true" />
      <DashboardNumbers :number-type="false" />
    </div>
  </div>
</template>

<script setup>
import DashboardFeatured from '~/components/Dashboard/DashboardFeatured.vue';
import SideBar from '../components/general/SideBar.vue';
import DashboardNumbers from '~/components/Dashboard/DashboardNumbers.vue';
import { useListedNumbersStore } from '~/stores/listedNumbersStore';
import { onMounted } from 'vue';

definePageMeta({
  middleware: 'auth-middleware',
});

const listedNumbersStore = useListedNumbersStore();
onMounted(() => {
  listedNumbersStore.fetchListedNumbers();
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
}
</style>
