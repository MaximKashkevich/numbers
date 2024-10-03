// stores/likedCards.ts
import { defineStore } from 'pinia';

interface LikeState {
  likedCards: [];
}

export const useLikedStore = defineStore('liked', {
  state: (): LikeState => ({
    likedCards: [],
  }),
  actions: {
    addCard(card) {
      this.likedCards.push(card);
    },
  },
});
