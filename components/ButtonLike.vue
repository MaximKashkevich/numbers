<template>
  <button v-if="isLikeButtonVisible" @click.prevent="toggleLike">
    <img
      class="w-[26px]"
      :src="
        isFavorite
          ? '/assets/img/icons/likeTrue.svg'
          : '/assets/img/icons/like.svg'
      "
    />
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useFavoritesStore } from "~/stores/favoritesStore";

// Определяем входящие свойства с типами
const props = defineProps<{
  id: number;
  type: string;
}>();

const isFavorite = computed(() => {
  return favoritesStore.favorites.some((item) => item[props.id] === props.type);
});
const isLikeButtonVisible = true;

const favoritesStore = useFavoritesStore();

const toggleLike = (event: MouseEvent) => {
  event.stopPropagation();
  favoritesStore.toggleLike(props.id, props.type);
};
</script>
