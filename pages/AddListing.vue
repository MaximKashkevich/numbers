<template>
  <div class="pl-[60px] mt-[33px]">
    <p class="leading-[16.8px] text-blue-500 cursor-pointer">
      <NuxtLink to="/"> Home </NuxtLink> /
      <NuxtLink to="/Dashboard"> My Dashboard </NuxtLink> /
      <span class="leading-[16.8px] text-gray-300">Add listing</span>
    </p>
  </div>
  <main>
    <section
      class="flex flex-col lg:flex-row px-[20px] md:px-[10px] justify-center gap-[30px] md:gap-[50px] mt-[34px] big-container max-w-[97%]"
    >
      <SideBar />
      <nav class="container__listing flex-1 md:ml-6 md:order-2">
        <h1
          class="font-medium leading-[50px] text-[32px] uppercase md:text-[50px] mb-[50px]"
        >
          Add listing
        </h1>
        <ComponentAddListing />
      </nav>
    </section>
  </main>
</template>
<script setup>
import ComponentAddListing from "~/components/AddListing/ComponentAddListing.vue";
import SideBar from "../components/general/SideBar.vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
// authStore.initAuth();

definePageMeta({
  middleware: ["add-listing-middleware"],
});
</script>
<style scoped>
@media (max-width: 420px) {
  .container__listing {
    margin: 0 !important;
    min-width: 100%;
  }
}
</style>
