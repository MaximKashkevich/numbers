<template>
  <section
    class="w-[400px] h-[476px] bg-white rounded-[20px] ml-[60px] gap-10 hover:shadow-2xl transition block1"
  >
    <article class="justify-between flex items-center px-6 py-4 accGeneral">
      <NuxtLink class="cursor-pointer mr-2">
        <img src="/public/assets/account.svg" alt="account" />
      </NuxtLink>
      <div>
        <span class="text-black leading-6 text-xl accText">{{
          user ? user.login : "Guest"
        }}</span>
        <p class="leading-6 text-gray-400 accText">
          Last login: {{ user ? user.lastLogin : "N/A" }}<br />
          Change avatar
        </p>
      </div>
    </article>

    <div class="px-8 py-6">
      <ul>
        <li class="my-4 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/GeneralBlockTariff' }"
            to="/GeneralBlockTariff"
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
            Archive (12)
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
        <li class="my-1 label">
          <NuxtLink
            :class="{ activeLink: $route.path === '/PaymentHistory' }"
            to="/PaymentHistory"
            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition"
          >
            Payment history
          </NuxtLink>
        </li>
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
      <div v-if="loading">Loading...</div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

// тут интерфейс
interface UserInfo {
  id: number;
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
}

export default defineComponent({
  // а тут тайпскриптовый export default defineComponent, и не забудь setup() {}
  name: "SideBar",
  setup() {
    const user = ref<UserInfo | null>(null);
    const loading = ref<boolean>(true);
    const error = ref<string | null>(null);

    const fetchUserData = async () => {
      loading.value = true;
      error.value = null;

      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "https://api.dev.numbers.ae/v1/user/info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          user.value = response.data.result;
        } else {
          error.value = "Failed to fetch user data.";
        }
      } catch (err: any) {
        if (err.response) {
          console.error("Error response:", err.response.data);
          error.value = "An error occurred while fetching user data.";
        } else {
          console.error("Error:", err);
          error.value = "An unexpected error occurred.";
        }
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchUserData();
    });

    return {
      user,
      loading,
      error,
      fetchUserData,
    };
  },
});
</script>

<style scoped>
.block1 {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  position: sticky;
  top: 20px;
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
