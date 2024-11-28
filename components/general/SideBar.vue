<template>
    <section class="w-[400px] h-[476px] bg-white rounded-[20px] ml-[60px] gap-10 hover:shadow-2xl transition block1">
        <article class="justify-between flex items-center px-6 py-4 accGeneral">
            <NuxtLink class="cursor-pointer mr-2">
                <img src="/public/assets/account.svg" alt="account">
            </NuxtLink>
            <div>
                <span class="text-black leading-6 text-xl accText">{{ userData.fullName || 'Guest' }}</span>
                <p class="leading-6 text-gray-400 accText">
                    Last login: {{ lastLogin }} <br />
                    Change avatar
                </p>
            </div>
        </article>
        <div class="px-8 py-6">
            <ul>
                <li class="my-4 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/GeneralBlockTariff' }" to="/GeneralBlockTariff"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium uppercase hover:font-medium transition">
                        Add listing
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/MyColections' }" to="/MyColections"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My collections (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/TableOrder' }" to="/TableOrder"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Numbers concierge (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/ArchivePage' }" to="/ArchivePage"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Archive (12)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/' }" to="/"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My cart (0)
                    </NuxtLink>
                </li>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/Settings' }" to="/Settings"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Settings
                    </NuxtLink>
                </li>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/PaymentHistory' }" to="/PaymentHistory"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Payment history
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/logout' }" to="/logout"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium hover:font-medium transition">
                        Log Out
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

export default {
    setup() {
        const authStore = useAuthStore();
        const token = authStore.authToken;

        const userData = reactive({
            fullName: '',
            email: '',
            mobileNumber: '',
        });
        const lastLogin = ref('Not available');

        const getUserData = async () => {
            if (!token) {
                console.error('Токен отсутствует. Пожалуйста, выполните вход.');
                return;
            }

            try {
                const response = await axios.get('https://api.dev.numbers.ae/v1/user/info', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!token) {
                    console.log('Токен отсуствует ');

                }
                const { fullName, email, mobileNumber } = response.data;
                userData.fullName = fullName;
                userData.email = email;
                userData.mobileNumber = mobileNumber;


                lastLogin.value = new Date().toLocaleString();
            } catch (error) {
                console.error('Ошибка при запросе данных:', error.response?.data || error.message);
            }
        };

        onMounted(() => {
            getUserData();
        });

        return {
            userData,
            lastLogin,
        };
    },
};
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
    color: #005DCA;
}

@media(max-width: 600px) {
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

@media(max-width: 800px) {
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

@media(max-width: 1100px) {
    .block1 {
        max-width: 700px;
        height: auto;
    }
}

@media(max-width: 1000px) {
    .gen {
        flex-wrap: wrap;
    }
}
</style>
