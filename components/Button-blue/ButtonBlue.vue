<template>
    <button
        class="  border-2  font-medium border-blue-500 rounded-[100px] text-[20px] font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition">
        <slot></slot>
    </button>
</template>
<script>
export default {
  name: 'Button',
};
</script>