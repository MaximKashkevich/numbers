<template>
  <header class="py-[20px] tw-container">
    <div class="row__header">
      <NuxtLink class="logo mb-[10px]" to="/">
        <img src="/assets/New-Logo.webp" alt="Logo" />
      </NuxtLink>

      <div class="menu__pc">
        <NuxtLink to="/Catalog?numberType=plate"> Plate Numbers </NuxtLink>
        <NuxtLink to="/Catalog?numberType=phone"> Mobile Numbers </NuxtLink>

        <NuxtLink to="/License"> Subscriptions for dealers </NuxtLink>

        <NuxtLink to="/Discounts">Discounts</NuxtLink>

        <NuxtLink to="/License">Number concierge</NuxtLink>
      </div>

      <button
        class="mx-[10px]"
        :class="[isOpen ? 'menu__mobile close' : 'menu__mobile']"
        @click="toggleMenu"
      >
        <div class="menu__shape"></div>

        <div class="menu__shape"></div>

        <div class="menu__shape"></div>
      </button>

      <div class="row__actions_inner mx-[10px]">
        <NuxtLink class="button__action" to="/Viewed">
          <img src="/assets/img/icons/eye.svg" alt="view" />
        </NuxtLink>

        <NuxtLink class="button__action" to="/Liked">
          <img src="/assets/img/icons/fav.svg" alt="favorites" />
          <div
            v-if="favoriteStore.favorites.length > 0"
            class="absolute w-[18px] h-[18px] top-[-8px] right-[-7px] rounded-[50%] bg-[#005dca] flex justify-center items-center border-[2px]"
          >
            <h3 class="h-full">{{ favoriteStore.favorites.length }}</h3>
          </div>
        </NuxtLink>

        <button class="button__action" @click="handleClick">
          <img src="/assets/img/icons/profile.svg" alt="general" />
        </button>
      </div>
      <ButtonBlue :requiresAdapt="true" @click="goToLink('/GeneralBlockTariff')"
        >Add Listing
      </ButtonBlue>
    </div>
    <div :class="[isOpen ? 'row__mobile' : 'row__mobile_close']">
      <NuxtLink to="/Catalog?numberType=plate">Plate Numbers </NuxtLink>

      <NuxtLink to="/Catalog?numberType=phone">Mobile Numbers </NuxtLink>

      <NuxtLink to="/GeneralBlockTariff"> Subscriptions for dealers </NuxtLink>

      <NuxtLink to="/Discounts">Discounts</NuxtLink>
      <NuxtLink to="/License">Number concierge</NuxtLink>
    </div>
  </header>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";
import { useFavoritesStore } from "~/stores/favoritesStore";

const favoriteStore = useFavoritesStore();
const router = useRouter();

const authStore = useAuthStore();

const goToLink = (page) => {
  router.push({
    path: page,
  });
};

const handleClick = () => {
  if (authStore.authToken) {
    //переход на лк
    router.push({ name: "GeneralEmpty" });
  } else {
    router.push({ name: "login" });
  }
};

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  favoriteStore.parseLocalFavorites();

  // очистка локалсторейджа если надо
  const CLEAR_LOCAL_STORAGE_KEY = "localStorageCleared_v1.0";

  if (!localStorage.getItem(CLEAR_LOCAL_STORAGE_KEY)) {
    // Очищаем localStorage
    localStorage.clear();
    console.log("localStorage очищен один раз для пользователя.");

    // Устанавливаем флаг, чтобы больше не очищать
    localStorage.setItem(CLEAR_LOCAL_STORAGE_KEY, "true");
  }
});
</script>
<style scoped>
.row__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 144px;
  height: 40px;
}

.menu__pc {
  display: flex;
  gap: 20px;
  font-size: 18px;
  color: #000;
}

.menu__pc a:hover {
  color: #005dca;
  transition: 0.2s;
}

a {
  transition: 0.2s;
  font-size: 16px;
}

.menu__mobile {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 32px;
}

.menu button:hover {
  color: #005dca;
}

.menu__shape {
  width: 30px;
  height: 3px;
  background-color: #000;
  border-radius: 6px;
}

.menu__mobile .menu__shape {
  transition: transform 0.4s, opacity 0.4s;
}

.menu__mobile.close :nth-child(1) {
  transform: rotate(45deg) translateY(15px) translateX(10px);
}

.menu__mobile.close :nth-child(2) {
  opacity: 0;
}

.menu__mobile.close :nth-child(3) {
  transform: rotate(-45deg) translateY(-10px) translateX(5px);
}

.row__actions {
  display: flex;
  align-items: center;
}

.row__actions_inner {
  display: flex;
  gap: 20px;
}

.button__action {
  cursor: pointer;
  position: relative;
}

.button__action:hover img {
  filter: brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(2128%)
    hue-rotate(201deg) brightness(93%) contrast(102%);
  transition: 0.2s;
}

.button__action img {
  transition: 0.2s;
}

.button__action h3 {
  position: absolute;
  font-size: clamp(10px, 1vw, 10px);
  color: #fff;
}

.row__mobile {
  position: absolute;
  right: 0;
  left: 0;
  padding-right: 20px;
  z-index: 2;
  transition: opacity 0.5s;
  opacity: 1;
  flex-direction: column;
  align-items: end;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 1) 83%,
    rgba(0, 0, 0, 0) 100%
  );
  padding-bottom: 70px;
}

.row__mobile_close {
  position: absolute;
  opacity: 0;
  transition: opacity 0s;
  padding-bottom: 70px;
  pointer-events: none;
}

.row__mobile button {
  font-size: 20px;
  width: fit-content;
  text-align: end;
  display: block;
}

.button__action img {
  width: 28px;
  height: 28px;
}

@media (max-width: 1280px) {
  .row__header {
    flex-wrap: wrap;
  }

  .row__actions {
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .button__action img {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 1024px) {
  .menu__pc {
    display: none;
  }

  .menu__mobile {
    display: flex;
  }

  .row__mobile {
    display: flex;
  }

  .menu__mobile {
    display: flex;
  }
}
</style>
