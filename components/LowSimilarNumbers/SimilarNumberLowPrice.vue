<template>
    <NuxtLink>
        <div class="flex-1 h-[300px] rounded-[20px] bg-white border-[2px] border-[#BFBFBF] ">
            <img class="mt-[40px] px-[20px]" :src="imageSrc" alt="">

            <div class="flex items-center justify-between mt-[30px] mr-[30px]">
                <div class="w-[110px] flex gap-[25px]">
                    <h1 class="min-w-[110px] h-[24px] text-[#EA0038] text-[20px] font-medium leading-[24px] ml-[20px]">
                        {{ currentPrice }} AED
                    </h1>
                    <h1
                        class="min-w-[110px] h-[24px] text-[#BFBFBF] text-[15px] font-medium leading-[24px] custom-strike">
                        {{ originalPrice }} AED
                    </h1>
                </div>

                <component :is="liked ? 'HeartRed' : 'ButtonLike'" class="w-[24px] h-[20px] img-like mini-img-like"
                    @click="toggleLike" />
            </div>

            <div class="mt-[30px] pl-[20px]">
                <div class="flex gap-[10px]">
                    <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        Emirate:
                    </p>
                    <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        {{ emirate }}
                    </p>
                </div>

                <div class="flex gap-[25px] pt-[5px]">
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        Posted Today
                    </p>
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        {{ views }} Views
                    </p>
                </div>
            </div>
        </div>
    </NuxtLink>

</template>

<script>
import { ref } from 'vue';
import ButtonLike from '../ButtonLike.vue';
import HeartRed from '../HeartRed.vue';

export default {
    components: {
        ButtonLike,
        HeartRed,
    },
    props: {
        imageSrc: {
            type: String,
            default: '/assets/Rectangle 73.png',
        },
        currentPrice: {
            type: Number,
            default: 15000,
        },
        originalPrice: {
            type: Number,
            default: 20000,
        },
        emirate: {
            type: String,
            default: 'Dubai',
        },
        views: {
            type: Number,
            default: 12,
        },
    },
    setup() {
        const liked = ref(false);

        const toggleLike = () => {
            liked.value = !liked.value;
        };

        return {
            liked,
            toggleLike,
        };
    },
};
</script>

<style>
.custom-strike {
    position: relative;
}

.custom-strike::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 0;
    top: 11px;
    right: 20px;
    border-top: 1px solid #BFBFBF;
    opacity: 1;
}

@media (max-width: 500px) {
    .img-like {
        margin-left: -70px;
    }
}

@media (max-width: 400px) {
    .mini-img-like {
        margin-left: -120px;
    }
}
</style>
