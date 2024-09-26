<template>
    <section class="w-[400px] h-[476px] bg-white rounded-[20px] ml-[60px] gap-10 hover:shadow-2xl transition block1">
        <article class="justify-between flex items-center px-6 py-4 accGeneral">
            <NuxtLink class="cursor-pointer mr-2">
                <img src="/public/assets/account.svg" alt="account">
            </NuxtLink>
            <div>
                <span class="text-black leading-6 text-xl accText">Suroor</span>
                <p class="leading-6 text-gray-400 accText">Last login: 23:12, 19 Aug 2024 <br />Change avatar</p>
            </div>
        </article>
        <div class="px-8 py-6">
            <ul>
                <li class="my-4 label">

                    <NuxtLink
                        :class="{ activeLink: $route.path === '/GeneralBlockTariff' }"
                        to="/GeneralBlockTariff"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >

                </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">

                    <NuxtLink
                        :class="{ activeLink: $route.path === '/MyColections' }"
                        to="/MyColections"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >

                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">

                    <NuxtLink
                        :class="{ activeLink: $route.path === '/TableOrder' }"
                        to="/TableOrder"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >
                </NuxtLink>
                </li>
            </ul>
            <ul>
                
            </ul>
            <ul>
                <NuxtLink to="/ArchivePage">
                     <li class="my-1 label">
                    <NuxtLink
                        :class="{ activeLink: $route.path === '/ArchivePage' }"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >
                        Archive (12)
                    </NuxtLink>
                </li>
                </NuxtLink>
            </ul>
            <ul>
               
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink
                        :class="{ activeLink: $route.path === '/my-cart' }"
                        to="/my-cart"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >
                    
=======                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/watch-list' }" to="/watch-list"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My watch list
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <NuxtLink to="/ArchivePage">
                    <li class="my-1 label">
                        <NuxtLink :class="{ activeLink: $route.path === '/ArchivePage' }"
                            class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                            Archive (12)
                        </NuxtLink>
                    </li>
                </NuxtLink>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/sold-numbers' }" to="/sold-numbers"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Sold numbers (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink :class="{ activeLink: $route.path === '/my-cart' }" to="/my-cart"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">

                        My cart (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">

                    <NuxtLink
                        :class="{ activeLink: $route.path === '/Settings' }"
                        to="/Settings"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >

                    <NuxtLink :class="{ activeLink: $route.path === '/Settings' }" to="/Settings"

                        Settings
                    </NuxtLink>
                </li>
                <li class="my-1 label">
                    <NuxtLink
                        :class="{ activeLink: $route.path === '/PaymentHistory' }"
                        to="/PaymentHistory"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >
                    Payment history
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">

                    <NuxtLink
                        :class="{ activeLink: $route.path === '/logout' }"
                        to="/logout"
                        class="text-black leading-[24px] text-xl cursor-pointer font-medium  hover:font-medium transition"
                    >

            <NuxtLink :class="{ activeLink: $route.path === '/logout' }" to="/logout"
                        class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">

                        Log Out
                    </NuxtLink>
                </li>
                
            </ul>
        </div>
    </section>
</template>

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
