import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export interface IFavorites {
  id: number;
  photo: string;
  emirate: string;
  price: number;
  isFeatured: boolean;
  views: string;
  type: string;
  postedAt: string;
}

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref<IFavorites[]>([]);
  const likes = ref<{ [key: number]: boolean }>({}); // Объект для хранения состояния лайков

  const addFavorite = async (favorite: IFavorites) => {
    try {
      const response = await axios.post(
        "https://api.dev.numbers.ae/v1/watchlist/plate/add",
        favorite
      );
      if (response.status === 200) {
        favorites.value.push(favorite);
        likes.value[favorite.id] = true; // Установите лайк на true
      }
      console.log(favorites.value);
    } catch (e) {
      console.error("Failed to add favorite:", e);
    }
  };

  const toggleLike = async (favorite: IFavorites) => {
    if (likes.value[favorite.id]) {
      // Если уже в избранном, можно добавить логику удаления
      console.log("Already in favorites");
      return;
    } else {
      await addFavorite(favorite);
    }
  };

  return { favorites, likes, toggleLike };
});
