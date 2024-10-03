// stores/likedCards.js
import { defineStore } from 'pinia';

export const useLikedStore = defineStore('liked', {
  state: () => ({
    likedCards: [],
  }),
  actions: {
    addCard(card) {
      this.likedCards.push(card);
    },
  },
});
