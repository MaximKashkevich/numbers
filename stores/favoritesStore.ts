import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export interface IFavorites {
  id: number;
  photo: string;
  emirate: string;
  price: string;
  isFeatured: boolean;
  views: number;
  type: string;
  postedAt: string;
}

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref<IFavorites[]>([]);
  const likes = ref<{ [key: number]: boolean }>({});
  const userId = ref<number | null>(null);

  const setUserId = (id: number) => {
    userId.value = id;
  };

  const handleAxiosError = (error: any, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      console.error(defaultMessage, error.response?.data || error.message);
    } else {
      console.error(defaultMessage, "Unexpected error:", error);
    }
  };

  const addFavorite = async (favorite: IFavorites) => {
    if (!userId.value || !favorite.id)
      return console.error("User ID or Favorite ID is missing");

    try {
      const response = await axios.post(
        `https://api.dev.numbers.ae/v1/watchlist/plate/add?id=${favorite.id}&user_id=${userId.value}`,
        {}
      );

      if (response.status === 200 && response.data.success) {
        favorites.value.push(favorite);
        likes.value[favorite.id] = true;
      } else {
        console.error(
          "Ошибка при добавлении в избранное:",
          response.data.result.message || "Неизвестная ошибка"
        );
      }
    } catch (e) {
      handleAxiosError(e, "Failed to add favorite");
    }
  };

  const toggleLike = async (favorite: IFavorites) => {
    if (!userId.value)
      return console.error("User ID is required but not provided.");

    // Проверка на наличие лайка; если его нет, добавляем в избранное
    if (!likes.value[favorite.id]) {
      await addFavorite(favorite);
    } else {
      console.log("Этот элемент уже в избранном.");
    }
  };

  return { favorites, likes, toggleLike, setUserId };
});
