<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <CardPlate v-for="item in plateStore.viewedPlates" :key="item.id" v-bind="item" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePlateStore } from '~/stores/plateStore'; // Убедитесь, что путь правильный

const plateStore = usePlateStore();

onMounted(() => {
    plateStore.loadViewedPlates(); // Загружаем просмотренные номера при монтировании компонента
});
</script>
