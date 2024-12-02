<template>
    <div class="px-5 pt-5 flex justify-between items-center ">
        <header class="min-w-[200px] flex items-center flex-wrap">
            <NuxtLink to="/">
                <img src="../public/assets/New-Logo.webp" class="header-img img2 cursor-pointer" alt="Logo">
            </NuxtLink>

            <nav class="hidden md:flex flex-wrap items-center gap-10 py-5">
                <ul class="flex gap-10">
                    <li>
                        <NuxtLink to="/CatalogNumbers"
                            class="text-link cursor-pointer text-black hover:text-blue-400 transition">
                            Plate Numbers
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/CatalogNumbers"
                            class="text-link cursor-pointer text-black hover:text-blue-400 transition">
                            Mobile Numbers
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/GeneralBlockTariff" @click.prevent="handleClick"
                            class="text-link cursor-pointer text-black hover:text-blue-400 transition">
                            Subscriptions for dealers
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/Discounts"
                            class="text-link cursor-pointer text-black hover:text-blue-400 transition">
                            Discounts
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/License"
                            class="text-link cursor-pointer text-black hover:text-blue-400 transition">
                            Number concierge
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="flex md:hidden">
                <button @click="toggleMenu" class="burger-menu">
                    <span :class="{ 'open': isOpen }"></span>
                    <span :class="{ 'open': isOpen }"></span>
                    <span :class="{ 'open': isOpen }"></span>
                </button>
            </div>

            <ul v-show="isOpen" class="md:hidden mobile-menu flex flex-col items-center justify-center gap-1 mt-2">
                <li>
                    <NuxtLink to="/CatalogNumbers" class="mobile-link" @click.prevent="handleClick">
                        Plate Numbers
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/CatalogNumbers" class="mobile-link" @click.prevent="handleClick">
                        Mobile Numbers
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/GeneralBlockTariff" class="mobile-link" @click.prevent="handleClick">
                        Subscriptions for dealers
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/Discounts" class="mobile-link" @click.prevent="handleClick">
                        Discounts
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/License" class="mobile-link" @click.prevent="handleClick">
                        Number concierge
                    </NuxtLink>
                </li>
            </ul>
            <!-- 1 -->
            <div class="flex  items-center gap-4 ml-4">

                <div class="flex ml-auto">
                    <NuxtLink to="/GeneralBlockTariff" @click.prevent="handleClick">
                        <ButtonBlue class="py-3 px-5">Add Listing</ButtonBlue>
                    </NuxtLink>
                </div>
                <NuxtLink to="/Viewed" @click.prevent="handleClick">
                    <img src="/assets/Vector1.svg" alt="view">
                </NuxtLink>

                <NuxtLink to="/Liked" @click.prevent="handleClick">
                    <img src="/assets/Vector.svg" alt="favorites">
                </NuxtLink>

                <NuxtLink to="/GeneralEmpty" @click.prevent="handleClick">
                    <img src="/assets/Frame 33.svg" alt="general" />
                </NuxtLink>
            </div>
        </header>
    </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const authStore = useAuthStore();
const router = useRouter();
const isOpen = ref(false);

const handleClick = () => {
    const token = authStore.authToken;

    if (!token) {
        router.push('/login');
    }
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
</style>