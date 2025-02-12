<template>
  <div class="pt-[60px]">
    <ButtonBlue
      v-if="plateStore.showMore > 0"
      class="w-fit flex justify-center items-center order-list max-w-[85vw]"
      @click="follow"
    >
      show {{ plateStore.showMore }} more
    </ButtonBlue>
  </div>
</template>

<script setup lang="ts">
import { usePlateStore } from "~/stores/plateStore";
import ButtonBlue from "../Button-blue/ButtonBlue.vue";
import { navigateTo } from "nuxt/app";

const plateStore = usePlateStore();
const follow = () => {
  plateStore.selectedPlateType
    ? navigateTo("/Catalog?numberType=plate")
    : navigateTo("/Catalog?numberType=phone");
};
</script>
