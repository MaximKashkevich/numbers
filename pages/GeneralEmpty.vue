<template>

    <nav class="mt-[30px]  ml-[60px] ">
        <NuxtLink class="text-blue-500 cursor-pointer">
            Home
        </NuxtLink>
        <span class="text-[#BFBFBF]">/ My Dashboard</span>
    </nav>

    <div
        class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
        <div class="w-full md:w-[300px] lg:w-[500px]">
            <SideBar class="sidebar" />
        </div>

        <div class="flex-1">
            <h1 class="w-[872px] h-[50px] font-medium text-[50px] uppercase ml-[65px]">
                My Dashboard
            </h1>
            <section class="p-[70px]">
                <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">My featured numbers:</h2>
                <nav
                    class="border-[3px]  w-[885px] h-[300px] border-orange-500 bg-[#FFFFFF] rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition">
                    <p class="text-[35px] mt-[20px] font-medium">You don’t have any featured number listings yet :(</p>
                    <ButtonBlue class="w-[382px] h-[52px] justify-center flex items-center mx-auto mt-[50px] btn1">
                        Create and promote an ad
                    </ButtonBlue>
                </nav>
            </section>


            <section class="p-[70px]">
                <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">My featured numbers:</h2>
                <nav
                    class=" w-[872px] h-[300px] bg-[#FFFFFF] rounded-[20px] p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition">
                    <p class="text-[35px] mt-[20px] font-medium">You don’t have any featured number listings yet :(</p>
                    <ButtonBlue class="w-[382px] h-[52px] justify-center flex items-center mx-auto mt-[50px] btn1">
                        Create and promote an ad
                    </ButtonBlue>
                </nav>
            </section>
        </div>
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