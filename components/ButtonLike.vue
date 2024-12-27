<template>
  <button v-if="isLikeButtonVisible" @click.prevent="toggleLike">
    <img
      class="w-[26px]"
      :src="favorites.likes[id] ? '/assets/likeTrue.png' : '/assets/like.svg'"
    />
  </button>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useFavoritesStore } from "~/stores/favoritesStore";

// Определяем входящие свойства с типом IFavorites
const props = defineProps<{
  id: number;
  type: string;
}>();

const isLikeButtonVisible = true;

const favorites = useFavoritesStore();

const toggleLike = (event: MouseEvent) => {
  event.stopPropagation();
  favorites.toggleLike(props.id, props.type);
};
</script>
