<template>
  <button
    :class="[
      'py-[14px] min-w-[1px] uppercase border-[3px] font-bold border-[#005DCA] rounded-[100px] text-[20px] font-bold text-[#005DCA] hover:bg-[#005DCA] hover:text-white transition whitespace-nowrap',
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
  padding-inline: 12px;
  font-size: clamp(12px, 3vw, 20px);
}
</style>
