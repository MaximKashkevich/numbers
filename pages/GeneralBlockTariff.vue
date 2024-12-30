<template>
  <div class="pl-[60px] mt-[33px]">
    <NuxtLink>
      <p class="leading-[16.8px] text-blue-500 cursor-pointer">
        <NuxtLink to="/"> Home </NuxtLink> /
        <NuxtLink to="/GeneralEmpty"> My Dashboard </NuxtLink> /
        <span class="leading-[16.8px] text-gray-300">Add listing</span>
      </p>
    </NuxtLink>
  </div>
  <main>
    <section
      class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[34px] big-container"
    >
      <SideBar />
      <nav class="flex-1 md:ml-6 md:order-2">
        <h1
          class="font-medium leading-[50px] text-[32px] uppercase md:text-[50px]"
        >
          Add listing
        </h1>
        <License v-if="!acceptPayment" />
        <ButtonBlue
          v-if="!acceptPayment"
          @click="
            () => {
              handleAccept();
            }
          "
          class="flex self-end justify-center font-bold max-w-[220px] m-[auto] mt-[50px]"
        >
          Simulate payment
        </ButtonBlue>
      </nav>
    </section>
  </main>
</template>

<script setup>
import ButtonBlue from "~/components/Button-blue/ButtonBlue.vue";
import SideBar from "../components/general/SideBar.vue";
import License from "./License.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const acceptPayment = ref(false);

const handleAccept = () => {
  acceptPayment.value = true;
  goToLink("/AddListing");
};

const goToLink = (page) => {
  router.push({
    path: page,
  });
};
</script>

<style scoped></style>
