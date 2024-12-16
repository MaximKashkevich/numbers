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
  const likes = ref<{ [key: number]: boolean }>({});
  const userId = ref<number | null>(null);

  const setUserId = (id: number) => {
    userId.value = id;
  };

  const addFavorite = async (favorite: IFavorites) => {
    try {
      console.log("Отправляемые данные:", favorite);

      if (userId.value === null) {
        console.error("User ID is required but not provided.");
        return;
      }

      if (!favorite.id) {
        console.error("Favorite ID is missing");
        return;
      }

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

      console.log(favorites.value);
    } catch (e) {
      handleAxiosError(e, "Failed to add favorite");
    }
  };

  const removeFavorite = async (favorite: IFavorites) => {
    try {
      if (userId.value === null) {
        console.error("User ID is required but not provided.");
        return;
      }

      const response = await axios.post(
        `https://api.dev.numbers.ae/v1/watchlist/plate/remove?id=${favorite.id}&user_id=${userId.value}`,
        {}
      );

      if (response.status === 200 && response.data.success) {
        favorites.value = favorites.value.filter(
          (fav) => fav.id !== favorite.id
        );
        delete likes.value[favorite.id];
      } else {
        console.error(
          "Ошибка при удалении из избранного:",
          response.data.result.message || "Неизвестная ошибка"
        );
      }
    } catch (e) {
      handleAxiosError(e, "Failed to remove favorite");
    }
  };

  const toggleLike = async (favorite: IFavorites) => {
    if (!userId.value) {
      console.error("User ID is required but not provided.");
      return;
    }
    if (likes.value[favorite.id]) {
      await removeFavorite(favorite);
    } else {
      await addFavorite(favorite);
    }
  };

  const handleAxiosError = (error: any, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      console.error(defaultMessage, error.response?.data || error.message);
    } else {
      console.error(defaultMessage, "Unexpected error:", error);
    }
  };

  return { favorites, likes, toggleLike, setUserId };
});
