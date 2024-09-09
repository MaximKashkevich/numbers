<template>
    <button v-if="isLikeButtonVisible">
        <img src="../public/assets/like.svg" alt="Share">
    </button>
</template>

<script setup>
const isLikeButtonVisible = true; 
</script>
