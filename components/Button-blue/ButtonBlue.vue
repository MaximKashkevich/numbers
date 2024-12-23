<template>
  <button
    :class="[
      'py-[14px] px-[30px] leading-[24px] uppercase border-[2px] font-bold border-[#005DCA] rounded-[100px] text-[20px] text-[#005DCA] hover:bg-[#005DCA] hover:text-white transition whitespace-nowrap',
      adaptedClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    requiresAdapt: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // Добавляем класс 'adapted' если requiresAdapt true
    adaptedClass() {
      return this.requiresAdapt === true ? "adapted" : "nonAdapted";
    },
  },
};
</script>
<style scoped>
.adapted {
  font-size: clamp(12px, 3vw, 20px);
}
</style>
