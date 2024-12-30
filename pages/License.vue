<template>
  <div class="px-8 md:px-10 lg:px-12 xl:px-16">
    <!-- Навигация -->
    <!-- <nav class="mb-[30px] mt-[30px] navigation">
      <ul class="flex gap-[5px]">
        <li>
          <NuxtLink to="/" class="text-[#d4e0ee] cursor-pointer transition">
            Home /</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href=""
            class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition"
          >
            License price</NuxtLink
          >
        </li>
      </ul>
    </nav> -->

    <!-- Заголовок и текст -->
    <div class="pt-[100px]">
      <h1
        class="w-full sm:w-[600px] lg:w-[900px] text-[30px] sm:text-[40px] lg:text-[40px] font-medium leading-tight text-left"
      >
        To publish an ad you first need to license to the service.
      </h1>
      <p
        class="w-full sm:w-[400px] lg:w-[500px] text-[14px] sm:text-[16px] font-normal leading-[19px] text-left pt-[20px] sm:pt-[30px]"
      >
        Once you pay the rate you want, you can add listings right away.
      </p>
    </div>
    <!-- Карточки -->
    <LicenseList></LicenseList>
  </div>
</template>

<script setup>
import axios from "axios";
import LicenseList from "../components/LicenseList.vue";
import { onMounted } from "vue";

const items = ref([]);

const fetchTariff = async () => {
  try {
    const { data } = await axios.get(
      "https://api.dev.numbers.ae/v1/tariff.list"
    );
    items.value = data.data;
    console.log(items.value);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  fetchTariff();
});
</script>
