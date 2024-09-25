<template>
    <NuxtPage />
    <nav class="my-5  ml-[60px] ">
        <NuxtLink class="text-blue-500 cursor-pointer">
            Home
        </NuxtLink>
        <span class="text-[#BFBFBF]">/ My Dashboard</span>
    </nav>
    <main class="justify-between flex items-center gen">
        <SideBar class="ml-[60px]" />
        <section class="p-[70px]">
            <h1 class="leading-[50px] text-[50px] font-medium textDash">My Dashboard</h1>
            <h2 class="leading-[42px] text-[50px] font-medium my-6 textDash">My featured numbers:</h2>
            <nav
                class="border-[3px] border-orange-500 rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition block2">
                <p class="text-[35px] font-medium">You don’t have any featured number listings yet :(</p>

                <ButtonBlue class="w-[382px] h-[52px] justify-center flex items-center mx-32 my-4 btn1">
                    Create and promote an ad
                </ButtonBlue>
            </nav>
        </section>
    </main>
    <div class="flex justify-end block3">
        <main class="block3">
            <h1 class="my-12 text-black font-medium leading-6 text-[35px] textBlock4">My plate numbers</h1>
            <section class="w-[872px] h-[300px] bg-white px-[50px] py-[50px] items-center">
                <span class="text-[35px] text-center font-medium textBlock3">
                    You don’t have any plate number listings
                    yet
                    :(</span>
                <ButtonBlue class="w-[339px] h-[52px] justify-center flex items-center mx-44 my-4 btn1">
                    Sell the plate number
                </ButtonBlue>
            </section>
        </main>
    </div>
    <div class="flex justify-end block3 mt-20">
        <main class="block3">
            <h1 class="my-12 text-black font-medium leading-6 text-[35px] textBlock4">My mobile numbers</h1>
            <section class="w-[872px] h-[300px] bg-white px-[50px] py-[50px] items-center">
                <span class="text-[35px] text-center font-medium textBlock3">You don’t have any plate number listings
                    yet
                    :(</span>
                <ButtonBlue class="w-[339px] h-[52px] justify-center flex items-center mx-44 my-4 btn1">
                    Sell the phone number
                </ButtonBlue>
            </section>
        </main>
    </div>
</template>

<script setup>
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import SideBar from '../components/general/SideBar.vue';


</script>

<style scoped>
@media(max-width:1000px) {
    .gen {
        flex-wrap: wrap;
    }
}


@media(max-width:480px) {
    .block2 {
        width: 150px;
        flex-wrap: wrap;
    }
}


@media(max-width:600px) {
    .textDash {
        font-size: 30px;
    }
}

@media(max-width:600px) {
    .block2 {
        width: 350px;
    }
}

@media(max-width:600px) {
    .btn1 {
        margin-left: 0;
        margin-right: 0;
        width: 200px;
        font-size: 10px;
    }
}

@media(max-width:600px) {
    .block3 {
        justify-content: center;
        width: 250px;
        height: 300px;
    }
}

@media(max-width:800px) {
    .block3 {
        justify-content: center;
        width: 350px;
        height: 300px;
    }
}

@media(max-width:600px) {
    .textBlock3 {
        font-size: 16px;
        text-align: center
    }
}


@media(max-width:800px) {
    .accGeneral {
        padding: 30px 20px 30px 60px;
    }
}

@media(max-width:800px) {
    .block2 {
        width: 500px;
        flex-wrap: wrap
    }
}

@media(max-width:800px) {
    .btn1 {
        width: 250px;
        font-size: 15px;
        margin-left: 0;
        margin-left: 70px;
    }
}

@media(max-width:800px) {
    .textBlock3 {
        font-size: 25px;
    }
}

@media(max-width:800px) {
    .textBlock4 {
        margin-left: 37px;
    }
}



@media(max-width:1100px) {
    .gen {
        padding: 30px 30px 30px 70px;
    }
}

@media(max-width:1100px) {
    .block2 {
        width: 450px;
        flex-wrap: wrap;
    }
}

@media(max-width:1100px) {
    .block3 {
        justify-content: center;
        width: 450px;
        height: 300px;
        display: flex;
    }
}

@media(max-width:1100) {
    .textBlock4 {
        display: flex;
        justify-content: center;
        text-align: center
    }
}

@media(max-width:1100) {
    .textBlock3 {
        font-size: 10px;
        flex-wrap: wrap;
    }
}
</style>