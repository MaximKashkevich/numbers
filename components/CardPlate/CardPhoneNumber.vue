<template>
  <div class="flex justify-between gap-[10px] max-h-[60px]">
    <img class="w-[14%]" src="/assets/etisalat.png" alt="" />
    <div class="flex-grow flex justify-end">
      <h4 class="text-[#70a136] leading-none phone__text font-light text-nowrap">
        {{ phone?.replace(/\D/g, '') }}
      </h4>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  phone: String,
});
</script>
<style>
.phone__text {
  font-size: 60px;
}

@media (max-width: 1350px) {
  .phone__text {
    font-size: 55px;
  }
}
@media (max-width: 1270px) {
  .phone__text {
    font-size: 45px;
  }
}
@media (max-width: 1200px) {
  .phone__text {
    font-size: 45px;
  }
}
@media (max-width: 1150px) {
  .phone__text {
    font-size: 38px;
  }
}

@media (max-width: 1024px) {
  .phone__text {
    font-size: clamp(46px, 6vw, 65px);
  }
}

@media (max-width: 768px) {
  .phone__text {
    font-size: clamp(36px, 13vw, 110px);
  }
}
</style>
