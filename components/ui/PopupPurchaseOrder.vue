<template>
  <div
    @click="togglePopup"
    class="fixed top-[0] left-[0] w-[100vw] h-[100vh] popup__background"
    :class="{
      popup__hidden: !popupVisibility,
      popup__visible: popupVisibility,
    }"
  ></div>
</template>
<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const popupVisibility = ref(true);

const togglePopup = () => {
  popupVisibility.value = !popupVisibility.value;
  console.log("popup");
};
</script>
<style>
.popup__background {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3.5px);
}

.popup__hidden {
  display: none;
}
.popup__visible {
  display: none;
}
</style>
