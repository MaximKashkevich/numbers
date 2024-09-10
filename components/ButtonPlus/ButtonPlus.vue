<template>
    <button
      @click="toggle"
      :class="{
        'bg-[#005DCA] text-white': isActive,
        'text-[#005DCA] border-[#005DCA]': !isActive
      }"
      class="w-[30px] h-[30px] font-bold flex items-center justify-center rounded-full border-[1.5px]"
    >
      {{ isActive ? '-' : '+' }}
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },
    },
    
  };
  </script>
  