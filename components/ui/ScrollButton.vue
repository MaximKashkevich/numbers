<template>
  <button class="button__scroll">
    <img src="/assets/img/icons/scroll-arrow.svg" alt="scroll arrow" />
  </button>
</template>
<script></script>
<style>
.button__scroll {
  position: fixed;
  width: 17vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: red;
  right: 3vw;
  bottom: 3vh;
}

.button__scroll img {
  rotate: -90deg;
  border-radius: 50%;
}
</style>
