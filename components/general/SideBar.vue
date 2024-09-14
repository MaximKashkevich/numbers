<template>
    <section class="w-[400px] h-[476px] bg-white rounded-[20px] gap-10 hover:shadow-2xl transition block1 flex-wrap">
        <article class="justify-between flex items-center px-6 py-4 accGeneral">
            <NuxtLink class="cursor-pointer">
                <img src="/public/assets/account.svg" alt="account">
            </NuxtLink>
            <div>
                <span class="text-black leading-6 text-xl accText">Suroor</span>
                <p class="leading-6 text-gray-400 accText">Last login: 23:12, 19 Aug 2024 <br />Change avatar</p>
            </div>
        </article>
        <div class="px-7 py-5 h-full">
            <ul>
                <li class="my-4 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Add listing
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My collections (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Numbers concierge (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My watch list
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Archive (12)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Sold numbers (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        My cart (0)
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Settings
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li class="my-1 label">
                    <NuxtLink class="text-black leading-[24px] text-xl cursor-pointer hover:font-medium transition">
                        Log Out
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
/* @media(max-width:600px) {
    .block1 {
        width: 300px;
        height: 550px;
    }
}

@media(max-width:600px) {
    .accText {
        margin-left: 8px;
    }
}

@media(max-width:600px) {
    .label {
        margin-top: 14px;
    }
}

@media(max-width:600px) {
    .block1 {
        width: 300px;
        height: 550px;
    }
}

@media(max-width:1100px) {
    .block1 {
        width: 700px;
        height: 650px;
    }
}

@media(max-width:800px) {
    .label {
        justify-content: center;
        display: flex;
        margin-top: 16px;
    }
}


@media(max-width:800px) {
    .block1 {
        width: 480px;
        height: 600px
    }
}

@media(max-width:1000px) {
    .gen {
        flex-wrap: wrap;
    }
} */

/* @media(max-width:380px) {
    .label {
        margin-top: 0px;
        margin-bottom: 0px;
    }
} */

.block1 {
    max-width: 400px;
}

@media (min-width: 361px) {
    .block1 {
        max-width: 400px;
    }
}

@media (min-width: 3000px) {
    .block1 {
        max-width: 800px;
    }
}
</style>