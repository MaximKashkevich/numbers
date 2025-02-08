<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    <CardPlate
      v-if="plateStore.selectedPlateType"
      v-for="number in pageData"
      :key="number.id"
      v-bind="number"
      :is-featured-class="false"
    />
    <CardPlate
      v-else
      v-for="phone in pageData"
      :key="phone.id"
      v-bind="phone"
      :is-featured-class="false"
    />
  </div>
</template>
<script setup lang="ts">
import { usePlateStore } from "~/stores/plateStore";
import CardPlate from "../CardPlate/CardPlate.vue";
import type { ICardPlate } from "../CardPlate/CardPlate.vue";

const plateStore = usePlateStore();
const props = defineProps<{
  pageData: ICardPlate[];
  pageType: string;
}>();
</script>
