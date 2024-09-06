<template>
    <div class="mb-2">
        <label class="block mb-4 leading-[16.8px]">{{ title }}</label>
        <input :type="type" :placeholder="placeholder"
            class="border px-8 py-[30px] rounded-[50px] h-[52px] w-[650px]" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    modelValue: {
        type: String,
        default: '',
    },
});



</script>
