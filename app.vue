<template>
  <div class="overflow-x-hidden">
    <!-- <NuxtPage /> -->
    <!-- <Entrance /> -->
    <!-- <GeneralEmpty /> -->
    <!-- <GeneralPrimaryPages /> -->
    <!-- <GeneralPrimaryPages />
                <GeneralViewAds /> -->
    <!-- <Login /> -->
    <!-- <GeneralBlockTariff /> -->
    <!-- <GeneralAddAdvertiseAuto /> -->
  </div>
  <!-- <NuxtPage /> -->
  <div class="overflow-x-hidden">
    <Entrance />
  </div>
  <!-- <GeneralEmpty /> -->

  <!-- <GeneralPrimaryPages /> -->

  <!-- <GeneralPrimaryPages />
        <GeneralViewAds /> -->

  <!-- <SignUp /> -->
  <ScrollButton />
</template>

<script setup lang="ts">
import { useAuthStore } from "./stores/auth";
const authStore = useAuthStore();
authStore.initAuth();

import Entrance from "./components/Entrance.vue";
import ScrollButton from "./components/ui/ScrollButton.vue";

import { useHead } from "#imports";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png", // путь к файлу
    },
  ],
});

useHead({
  title: "Numbers",
  meta: [
    {
      name: "description",
      content:
        "Buy and sell car registration plates and mobile numbers in the UAE.",
    },
    {
      name: "keywords",
      content: "car registration plates, mobile numbers, UAE",
    },
  ],
});
</script>
