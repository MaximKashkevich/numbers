import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export interface IFavorites {
  id: number;
  photo?: string;
  emirate: string;
  price: string;
  isFeatured: boolean;
  views?: number;
  type: string;
  datePosted: string;
  phone?: string;
}

export const useFavoritesStore = defineStore("favorites", () => {
  const userId = ref<number | null>(null);
  const favorites = ref<Array<{ [key: number]: string }>>([]);
  const favoritesData = ref<Array<IFavorites>>([]);
  const setUserId = (id: number) => {
    userId.value = id;
  };

  const parseLocalFavorites = () => {
    const localFavorites = localStorage.getItem("favorites");
    if (localFavorites) {
      favorites.value = JSON.parse(localFavorites);
    }
  };

  const fetchFavorites = async () => {
    const data = [];
    for (const item of favorites.value) {
      const id = Object.keys(item)[0];
      let type: string = item[+id];
      const idNumber = Number(id);
      try {
        const response = await axios.get(
          `https://api.dev.numbers.ae/v1/catalog/${type}/${id}`
        );
        data.push({ id: idNumber, ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    favoritesData.value = data;
  };

  const addFavorite = async (favorite: number, type: string) => {
    const exists = favorites.value.some((item) => favorite in item);

    if (!exists) {
      favorites.value.unshift({ [favorite]: type });
    } else {
      favorites.value = favorites.value.filter((item) => !(favorite in item));
    }
    localStorage.setItem("favorites", JSON.stringify(favorites.value));

    await fetchFavorites();
    // if (!userId.value || !favorite)
    //   return console.error("User ID or Favorite ID is missing");
    // try {
    //   const response = await axios.get(
    //     // `https://api.dev.numbers.ae/v1/watchlist/plate/add?id=${favorite.id}&user_id=${userId.value}`,
    //     `https://api.dev.numbers.ae/v1/watchlist/${
    //       type === "plate" ? "plate" : "mobile"
    //     }/add?id=${favorite}&user_id=${userId.value}`,
    //     {}
    //   );
    //   if (response.status === 200 && response.data.success) {
    //     favorites.value.push(favorite);
    //     likes.value[favorite] = true;
    //   } else {
    //     console.error(
    //       "Ошибка при добавлении в избранное:",
    //       response.data.result.message || "Неизвестная ошибка"
    //     );
    //   }
    // } catch (e) {
    //   handleAxiosError(e, "Failed to add favorite");
    // }
  };

  const toggleLike = async (favorite: number, type: string) => {
    // if (!userId.value)
    //   return console.error("User ID is required but not provided.");
    await addFavorite(favorite, type);
  };

  return {
    favorites,
    favoritesData,
    toggleLike,
    setUserId,
    parseLocalFavorites,
    fetchFavorites,
  };
});
