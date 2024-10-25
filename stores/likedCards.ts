import { defineStore } from 'pinia';

interface Card {
  id: string;
  title: string;
}

export const useLikedStore = defineStore('liked', {
  state: () => ({
    likedCards: [] as Card[],
  }),
  actions: {
    addCard(card: Card) {
      this.likedCards.push(card);
    },
  },
});
