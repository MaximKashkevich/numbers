<template>
  <header
    class="wrapper__header container__main min-w-[90%] px-8 md:px-10 lg:px-12 xl:px-16"
  >
    <div class="row__header">
      <NuxtLink class="logo mb-[10px]" to="/">
        <img src="../public/assets/New-Logo.webp" alt="Logo" />
      </NuxtLink>

      <div class="menu__pc">
        <NuxtLink
          to="/CatalogNumbers?numberType=plate"
          @click="handleClickNumberLink('plate')"
        >
          Plate Numbers
        </NuxtLink>
        <NuxtLink
          to="/CatalogNumbers?numberType=phone"
          @click="handleClickNumberLink('phone')"
        >
          Mobile Numbers
        </NuxtLink>

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
          <img src="/assets/img/icons/saw.svg" alt="view" />
        </NuxtLink>

        <NuxtLink class="button__action" to="/Liked">
          <img src="/assets/img/icons/fav.svg" alt="favorites" />
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
      <NuxtLink
        to="/CatalogNumbers?numberType=plate"
        @click="handleClickNumberLink('plate')"
        >Plate Numbers
      </NuxtLink>

      <NuxtLink
        to="/CatalogNumbers?numberType=phone"
        @click="handleClickNumberLink('phone')"
        >Mobile Numbers
      </NuxtLink>

      <NuxtLink to="/GeneralBlockTariff"> Subscriptions for dealers </NuxtLink>

      <NuxtLink to="/Discounts">Discounts</NuxtLink>
      <NuxtLink to="/License">Number concierge</NuxtLink>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();

const goToLink = (page: string) => {
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

const handleClickNumberLink = (type: string) => {
  router.replace({
    path: "CatalogNumbers",
    query: {
      numberType: type,
    },
  });
};
</script>
<style scoped>
.wrapper__header {
  padding-top: 20px;
  padding-bottom: 20px;
}

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
}

.button__action:hover img {
  filter: brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(2128%)
    hue-rotate(201deg) brightness(93%) contrast(102%);
  transition: 0.2s;
}

.button__action img {
  transition: 0.2s;
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
}

.row__mobile button {
  font-size: 20px;
  width: fit-content;
  text-align: end;
  display: block;
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
