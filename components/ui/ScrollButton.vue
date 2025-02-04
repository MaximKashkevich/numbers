<template>
  <button v-if="showScrollButton" @click="scrollToTop" class="button__scroll">
    <img src="/assets/img/icons/scroll-arrow.svg" alt="scroll arrow" />
  </button>
</template>
<script setup>
const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 1200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style>
.button__scroll {
  position: fixed;
  width: 17vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  right: 3vw;
  bottom: 3vh;
  display: none;
}

.button__scroll img {
  rotate: -90deg;
  border-radius: 50%;
}

@media (max-width: 760px) {
  .button__scroll {
    display: block;
  }
}
</style>
