<template>


    <!-- Навигация -->
    <nav class="mb-[30px] mt-[30px] navigation">
        <ul class="flex gap-[5px] pl-[100px]">
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Home /</a>
            </li>
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Plate numbers /</a>
            </li>
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Dubai plate number for sale: AA
                    14611</a>
            </li>
        </ul>
    </nav>

    <!-- Контент -->
    <div class="flex justify-center pt-[30px] md: px-[30px]">
        <div
            class="flex flex-wrap justify-between px-[30px] md:gap-[80px] lg:gap-[250px] min-w-[200px] max-w-[1900px] sm:justify-center">
            <!-- Левая часть -->
            <div class="flex-1 min-w-[250px] max-w-[350px] mb-[70px] title">
                <h1 class="font-medium text-[35px] leading-[42px] mb-[10px] w-[315px title-2">
                    Du mobile number for sale
                </h1>
                <p class="text-[12px] font-normal leading-[14.4px] opacity-30">
                    ID: 65131
                </p>
                <h2 class="font-medium text-[35px] mt-[50px] mb-[70px]">
                    20 000 AED
                </h2>
                <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px] mb-[10px]">
                    Description:
                </p>
                <p class="text-[16px] font-normal leading-[20px] mb-[80px]">
                    ETISALAT VIP Prepaid Fancy Mobile number For Sale. Call or WhatsApp 055-4400750.
                </p>
                <a href="#" class="text-[#005DCA] text-[20px] font-bold leading-[24px]">
                    See full collection
                </a>
            </div>

            <!-- Центральная часть -->
            <div
                class="flex-1 min-w-[280px] w-[700px] h-[470px] mb: min-w-[400px]    rounded-[20px] bg-white border-[2px] border-[#B3B3B3] mb-[70px]">
                <div class="flex justify-between w-full p-[30px]">
                    <ButtonShare />
                    <ButtonLike />
                </div>
                <div class="flex flex-col items-center justify-center h-full">
                    <div class="flex items-center justify-center" id="top">
                        <img class="max-w-[50px] min-w-[250px]" src="../public/assets/image.svg" alt="">
                    </div>
                    <div id="bottom" class="flex justify-center gap-2 mt-[125px]">
                        <div class="pagination-circle w-[8px] h-[8px] border-[#B3B3B3] bg-black rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                    </div>
                </div>
            </div>

            <!-- Правая часть -->
            <div class="flex-1 max-w-[350px] right-panel ">
                <div class="flex items-center space-x-2">
                    <img src="../public/assets/avatar.svg" alt="" class="w-10 h-10 rounded-full">
                    <div>
                        <h2 class="text-[35px] font-medium leading-[42px]">
                            Suroor
                        </h2>
                        <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px]">
                            Online
                        </p>
                    </div>
                    <img class="pl-[110px] pb-[35px]" src="../public/assets/iconamoon_attention-circle-light.svg"
                        alt="">
                </div>
                <div class="flex gap-[25px] mt-[30px]">
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        Posted Today
                    </p>
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        12 Views
                    </p>
                </div>
                <div class="w-[212] mt-[30px]">
                    <ButtonBlue class="w-full w-[315px] h-[54px] flex items-center justify-center ">
                        Call 058 210 03 10
                    </ButtonBlue>
                    <ButtonBlue class="w-full w-[315px] h-[54px] flex items-center justify-center mt-[212px]">
                        Buy as NFT
                    </ButtonBlue>
                </div>
            </div>
        </div>
    </div>


    <!-- Слайдер -->
    <div class="mt-[150px] px-[30px]">
        <div class="flex justify-center">
            <div class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center">
                <h3
                    class="max-w-[376px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px] ">
                    Similar numbers:
                </h3>
                <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
                <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3  mb-[20px]">
                    <LeftArrow class="w-[50px]" ref="prevEl" />
                    <RightArrow class="w-[50px]" ref="nextEl" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center mt-[50px]">
        <div class="lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px]">
            <swiper :navigation="{ nextEl: nextEl, prevEl: prevEl }" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <Card />
                    <Card />
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                    <Card />
                    <Card />
                </swiper-slide>
                <swiper-slide>
                    <Card />
                    <Card />
                    <Card />
                </swiper-slide>
            </swiper>
        </div>
    </div>


    <!-- Слайдер -->
    <div class="mt-[150px] px-[30px]">
        <div class="flex justify-center">
            <div class="flex flex-col lg:flex-row w-full lg:w-[1800px] mr-[50px] items-center justify-center">
                <h3
                    class="max-w-[376px] min-w-[100px] h-[60px] text-[50px] font-normal leading-[60px] text-left order-2 lg:order-1 mb-[30px] ml-[40px] ">
                    Similar numbers:
                </h3>
                <div class="flex-grow lg:pr-[100px] order-3 lg:order-2"></div>
                <div class="flex gap-[30px] mt-[5px] order-1 lg:order-3 mb-[20px]">
                    <!-- Обертка для рефов -->
                    <div ref="prevEl" class="w-[50px]">
                        <LeftArrow />
                    </div>
                    <div ref="nextEl" class="w-[50px]">
                        <RightArrow />
                    </div>

                </div>
            </div>
        </div>
        <div class="flex justify-center items-center mt-[50px]">
            <div
                class="sm:w-[640px] md:w-[1000px] lg:w-[1320px] h-[410px] flex flex-col lg:flex-row gap-[20px] px-[30px]">
                <swiper :navigation="{ nextEl: nextEl, prevEl: prevEl }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <Card />
                        <Card />
                        <Card />
                    </swiper-slide>
                    <swiper-slide>
                        <Card />
                        <Card />
                        <Card />
                    </swiper-slide>
                    <swiper-slide>
                        <Card />
                        <Card />
                        <Card />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>






</template>

<script>
import ButtonShare from './ButtonShare.vue';
import ButtonLike from './ButtonLike.vue';
import ButtonBlue from './Button-blue/ButtonBlue.vue';
import RightArrow from './RightArrow.vue';
import LeftArrow from './LeftArrow.vue';
import Card from './Card.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';



import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import "swiper/css"
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        LeftArrow,
        RightArrow,
        Card,
    },
    setup() {
        const nextEl = ref(null);
        const prevEl = ref(null);


        onMounted(() => {
            if (!nextEl.value || !prevEl.value) {
                console.error('Navigation elements not found');
            }
        });

        return {
            modules: [Navigation],
            nextEl,
            prevEl,
        };
    },
};
</script>

<style scoped>
.active {
    background-color: #000;
}

#bottom {
    display: flex;
    column-gap: 25px;
    justify-content: center;
    margin-top: 125px;
    gap: 8px;
}

#app {}

html,


body {

    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    position: relative;

}

.swiper {
    width: 1320px;
    height: 300px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.swiper-slide img {

    width: 370px;


}

@media (max-width: 768px) {
    .navigation {
        display: none;
    }

    .title {
        margin-top: 70px;
        text-align: center;
    }

    .right-panel {
        margin-left: 10px;
    }
}
</style>
