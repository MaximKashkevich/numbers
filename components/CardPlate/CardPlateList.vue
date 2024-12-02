<template>
    <div v-for="plate in plateNumbers" :key="plate.id">
        <CardPlate :emirate="plate.emirate" :price="plate.price" :photo="plate.photo" :id="plate.id"
            :isFeatured="plate.isFeatured" :type="plate.type" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePlateStore } from '../../stores/plateStore';
import CardPlate from './CardPlate.vue';

export default defineComponent({
    setup() {
        const plateStore = usePlateStore();

        onMounted(() => {
            plateStore.fetchPlate();
        });

        return {
            plateNumbers: plateStore.plateNumbers,
            fetchPlate: plateStore.fetchPlate,
        };
    }
});
</script>