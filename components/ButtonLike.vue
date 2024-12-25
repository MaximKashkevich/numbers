<template>
  <button v-if="isLikeButtonVisible" @click="likeCard">
    <img src="../public/assets/like.svg" alt="Like" />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLikedStore } from "../stores/likedCards";

const isLikeButtonVisible = true;
const router = useRouter();
const likedStore = useLikedStore();

const likeCard = () => {
  const card = { id: 1, name: "Card Title", description: "Card Description" }; // Ваша карточка
  likedStore.addCard(card); // Добавляем карточку в хранилище
  router.push("/liked"); // Перенаправляем на страницу лайкнутых
};
</script>
