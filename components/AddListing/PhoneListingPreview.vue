<template>
  <div class="w-[95%] h-[95%] flex items-center justify-center gap-[14px] preview__number">
    <img class="width-[40px] h-[40px]" :src="getImageSource(operator)" alt="logo" />
    <h4
      class="text__number text-nowrap leading-none mt-[10px] font-light"
      :class="getNumberColor(operator)"
    >
      {{ number }}
    </h4>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  operator: {
    type: String,
    default: 'Du',
    required: true,
  },
  number: {
    type: String,
    required: false,
  },
});

function getImageSource(operator: string) {
  switch (operator) {
    case 'Du':
      return '/logos/operatorDu.svg';
    case 'Etisalat':
      return '/logos/operatorEtisalat.svg';
    case 'Virgin Mobile':
      return '/logos/operatorVirgin.svg';
    default:
      return '/logos/operatorVirgin.svg';
  }
}

function getNumberColor(operator: string) {
  switch (operator) {
    case 'Du':
      return 'text-[#00a9ce]';
    case 'Etisalat':
      return 'text-[#70a136]';
    case 'Virgin Mobile':
      return 'text-[#cc2229]';
    default:
      return 'text-[transparent]';
  }
}
</script>
<style scoped>
.preview__number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text__number {
  font-size: 44px;
}

@media (max-width: 1280px) {
  .text__number {
    font-size: clamp(26px, 3vw, 44px);
  }
}

@media (max-width: 1080px) {
  .text__number {
    font-size: 44px;
  }
}

@media (max-width: 420px) {
  .text__number {
    font-size: clamp(26px, 9vw, 44px);
  }
}
</style>
