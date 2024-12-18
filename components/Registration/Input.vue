<template>
    <div class="mb-4">
        <label class="block mb-2 leading-[16.8px]">{{ title }}</label>
        <input :type="type" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="border px-4 md:px-8 py-2 md:py-3 rounded-[50px] h-[38px] md:h-[52px] w-full inputs placeholder:text-sm md:placeholder:text-base" />
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

.inputs::placeholder {
    font-size: 0.875rem;
    /* Маленький размер для мобильных устройств */
}

@media (min-width: 768px) {

    /* Для экранов от 768px и выше */
    .inputs::placeholder {
        font-size: 1rem;
        /* Средний размер для планшетов и десктопов */
    }
}
</style>
