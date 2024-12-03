<template>
  <div class="headerWrapper px-5 pt-5 flex justify-between items-center">
    <header class="headerClass min-w-[200px] flex items-center flex-wrap">
      <NuxtLink to="/">
        <img
          src="../public/assets/New-Logo.webp"
          class="header-img img2 cursor-pointer"
          alt="Logo"
        />
      </NuxtLink>

      <nav class="hidden md:flex flex-wrap items-center gap-10 py-5">
        <ul class="flex gap-10 ml-10">
          <li>
            <NuxtLink
              to="/CatalogNumbers?numberType=plate"
              class="text-link cursor-pointer text-black hover:text-blue-400 transition"
            >
              Plate Numbers
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/CatalogNumbers?numberType=Mobile"
              class="text-link cursor-pointer text-black hover:text-blue-400 transition"
            >
              Mobile Numbers
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/GeneralBlockTariff"
              @click.prevent="handleClick"
              class="text-link cursor-pointer text-black hover:text-blue-400 transition"
            >
              Subscriptions for dealers
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/Discounts"
              class="text-link cursor-pointer text-black hover:text-blue-400 transition"
            >
              Discounts
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/License"
              class="text-link cursor-pointer text-black hover:text-blue-400 transition"
            >
              Number concierge
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex md:hidden">
        <button @click="toggleMenu" class="burger-menu">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>
      </div>

      <ul
        v-show="isOpen"
        class="header__dropdown md:hidden mobile-menu flex flex-col items-center justify-center gap-1 mt-2"
      >
        <li>
          <NuxtLink
            to="/CatalogNumbers?numberType=plate"
            class="mobile-link"
            @click.prevent="handleClick"
          >
            Plate Numbers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/CatalogNumbers?numberType=Mobile"
            class="mobile-link"
            @click.prevent="handleClick"
          >
            Mobile Numbers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/GeneralBlockTariff"
            class="mobile-link"
            @click.prevent="handleClick"
          >
            Subscriptions for dealers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/Discounts"
            class="mobile-link"
            @click.prevent="handleClick"
          >
            Discounts
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/License"
            class="mobile-link"
            @click.prevent="handleClick"
          >
            Number concierge
          </NuxtLink>
        </li>
      </ul>
      <!-- 1 -->
      <div class="row__actions">
        <div class="row__actions_listing flex ml-auto">
          <NuxtLink to="/GeneralBlockTariff" @click.prevent="handleClick">
            <ButtonBlue :requiresAdapt="true" class="py-3 px-5"
              >Add Listing</ButtonBlue
            >
          </NuxtLink>
        </div>
        <div class="flex gap-4">
          <NuxtLink to="/Viewed" @click.prevent="handleClick">
            <img src="/assets/Vector1.svg" alt="view" />
          </NuxtLink>

          <NuxtLink to="/Liked" @click.prevent="handleClick">
            <img src="/assets/Vector.svg" alt="favorites" />
          </NuxtLink>

          <NuxtLink to="/GeneralEmpty" @click.prevent="handleClick">
            <img src="/assets/Frame 33.svg" alt="general" />
          </NuxtLink>
        </div>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

const authStore = useAuthStore();
const router = useRouter();
const isOpen = ref(false);

const handleClick = () => {
  const token = authStore.authToken;
  isOpen.value = false;
  // if (!token) {
  //   router.push("/login");
  // }
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.text-link {
  font-size: clamp(18px, 16px, 20px);
}

.img2 {
  width: 144px;
  height: 40px;
}

.header__dropdown {
  position: absolute;
  right: 0px;
  width: 100vw;
  top: 55px;
  padding-inline: 20px;
  padding-bottom: 50px;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 1) 82%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
  font-size: clamp(16px, 5vw, 28px);
}

.header__dropdown li {
  margin-left: auto;
}

.burger-menu {
  cursor: pointer;
}

.burger-menu span {
  display: flex;
  width: 30px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger-menu span.open {
  background-color: blue;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 10px;
  /* Добавить место между иконкой и текстом */
}

.icon {
  width: 20px;
  /* Задайте нужный размер иконки */
  height: 20px;
}

.headerClass {
  width: 100%;
}

.row__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 8px;
}

.row__actions img:hover {
  filter: brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(2128%)
    hue-rotate(201deg) brightness(93%) contrast(102%);
}

@media (max-width: 768px) {
  .headerClass {
    justify-content: space-between;
  }
  .row__actions {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
    padding-right: 7px;
  }
  .row__actions_listing {
    margin-left: 0;
  }
}
</style>
