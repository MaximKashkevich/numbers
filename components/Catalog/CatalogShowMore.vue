<template>
  <div class="pt-[60px]">
    <ButtonBlue
      v-if="plateStore.showMore > 0"
      class="w-fit flex justify-center items-center order-list max-w-[85vw]"
    >
      show {{ plateStore.showMore }} more
    </ButtonBlue>
  </div>
</template>

<script setup lang="ts">
import { usePlateStore } from "~/stores/plateStore";
import ButtonBlue from "../Button-blue/ButtonBlue.vue";

const plateStore = usePlateStore();
</script>
