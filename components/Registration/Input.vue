<template>
    <div class="mb-4">
        <label class="block mb-2 leading-[16.8px]">{{ title }}</label>
        <input :type="type" :placeholder="placeholder"
            class="border px-4 md:px-8 py-2 md:py-3 rounded-[50px] h-[38px] md:h-[52px] w-full inputs " />
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

<style scoped>
@media(max-width:600px) {
    .inputs {
        width: 450px;
    }
}

@media(max-width:500px) {
    .inputs {
        width: 380px;
    }
}

@media(max-width:420px) {
    .inputs {
        width: 280px;
    }
}
</style>
