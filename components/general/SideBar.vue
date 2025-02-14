<template>
  <section
    class="bg-white rounded-[20px] ml-[60px] gap-10 hover:shadow-2xl transition block1 bg-red-500 h-fit top-[0]"
  >
    <article class="gap-[20px] flex items-center px-6 py-4 accGeneral">
      <NuxtLink class="cursor-pointer mr-2">
        <img src="/public/assets/account.svg" alt="account" />
      </NuxtLink>
      <div>
        <span class="text-black leading-6 text-xl accText">{{
          userData ? userData.fullName : "Guest"
        }}</span>
        <p class="leading-6 text-gray-400 accText">Change avatar</p>
      </div>
    </article>
    <div class="px-8 py-6">
      <ul>
        <li class="my-4 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/Subscription' }"
            to="/Subscription"
            class="text-black leading-[24px] text-xl cursor-pointer font-medium uppercase hover:font-medium transition"
          >
            Add listing
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/MyColections' }"
            to="/MyColections"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            My collections (0)
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/TableOrder' }"
            to="/TableOrder"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            Numbers concierge (0)
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/ArchivePage' }"
            to="/ArchivePage"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            Archive (0)
          </NuxtLink>
        </li>
      </ul>
      <ul>
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/' }"
            to="/"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            My cart (0)
          </NuxtLink>
        </li>
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/Settings' }"
            to="/Settings"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            Settings
          </NuxtLink>
        </li>
        <!-- <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/PaymentHistory' }"
            to="/PaymentHistory"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            Payment history
          </NuxtLink>
        </li> -->
      </ul>
      <ul>
        <li class="my-1 label">
          <button
            @click="logout"
            class="text-black leading-[24px] text-xl cursor-pointer font-medium hover:font-medium transition"
          >
            Log Out
          </button>
        </li>
      </ul>

      <!-- Обработка состояния загрузки и ошибок -->
      <!-- <div v-show="loading">Loading...</div>
      <div v-show="error" class="text-red-500">{{ error }}</div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useAuthStore } from "~/stores/auth";

// Хранилища (Pinia)
const authStore = useAuthStore();

// Состояния
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

// Получаем токен из authStore
const userData = computed(() => authStore.userData);

onMounted(() => {
  authStore.fetchUserData();
});

// Функция выхода
const logout = () => {
  authStore.logout();
  window.location.href = "/";
};
</script>

<style scoped>
.block1 {
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  position: sticky;
}

.accText {
  margin-left: 0;
}

.label {
  margin-top: 12px;
}

.activeLink {
  color: #005dca;
}

@media (max-width: 600px) {
  .block1 {
    max-width: 100%;
    height: auto;
    padding: 16px;
  }

  .accText {
    font-size: 14px;
  }

  .label {
    justify-content: center;
    margin-top: 14px;
  }
}

@media (max-width: 800px) {
  .block1 {
    max-width: 480px;
    padding: 16px;
    height: auto;
  }

  .label {
    justify-content: center;
    display: flex;
    margin-top: 16px;
  }
}

@media (max-width: 1100px) {
  .block1 {
    max-width: 700px;
    height: auto;
  }
}

@media (max-width: 1000px) {
  .gen {
    flex-wrap: wrap;
  }
}
</style>
